import XCTest

final class HarnessDemoUITests: XCTestCase {
    // Explicit opt-in: this test uses the user's existing account for one real turn.
    // Supply these values in the test runner's xctestrun EnvironmentVariables.
    func testSignedInAccountResume() throws {
        let environment = ProcessInfo.processInfo.environment
        continueAfterFailure = false
        try XCTSkipUnless(environment["HARNESS_LIVE_ACCOUNT_TEST"] == "1", "Live account tests require explicit opt-in")
        let expectedNote = try XCTUnwrap(environment["HARNESS_EXPECTED_NOTE"])
        let marker = try XCTUnwrap(environment["HARNESS_LIVE_MARKER"])
        XCTAssertFalse(expectedNote.isEmpty)
        let app = XCUIApplication()
        app.launch()
        let resume = app.switches["Resume the saved live session"]
        XCTAssertTrue(resume.waitForExistence(timeout: 15))
        resume.tap()
        app.buttons["Open Claude Code sign-in"].tap()
        XCTAssertTrue(app.staticTexts["Signed in to Claude Code"].waitForExistence(timeout: 30), "The harness must restore the account without another browser login")
        XCTAssertFalse(app.buttons["Continue in browser"].exists)
        XCTAssertFalse(app.secureTextFields["Anthropic API key"].exists)

        let textField = app.textFields["conversation-prompt"]
        let input = textField.exists ? textField : app.textViews["conversation-prompt"]
        XCTAssertTrue(input.waitForExistence(timeout: 5))
        input.tap()
        input.press(forDuration: 1.1)
        let selectAllButton = app.buttons["Select All"]
        let selectAll = selectAllButton.waitForExistence(timeout: 2) ? selectAllButton : app.menuItems["Select All"]
        XCTAssertTrue(selectAll.waitForExistence(timeout: 3))
        selectAll.tap()
        let prompt = "Without using any tools, quote the exact note you wrote in our previous conversation, then output this marker on its own line: \(marker)"
        input.typeText(prompt)
        XCTAssertEqual(input.value as? String, prompt)
        // Abort before sending if editing did not produce the intended prompt.
        guard input.value as? String == prompt else { return }
        app.buttons["Send"].tap()
        XCTAssertTrue(app.staticTexts["Live turn completed"].waitForExistence(timeout: 90))
        let recalledNote = app.staticTexts.matching(NSPredicate(format: "label CONTAINS %@ AND label CONTAINS %@", expectedNote, marker)).firstMatch
        XCTAssertTrue(recalledNote.exists, "The model must recall the saved note without receiving it in the new prompt")
        XCTAssertEqual(app.staticTexts["count-Writes"].label, "0")
        XCTAssertEqual(app.staticTexts["count-Reads"].label, "0")
        XCTAssertEqual(app.staticTexts["count-Approvals"].label, "0")
        let flushed = expectation(description: "Evidence and transcript flushed")
        DispatchQueue.main.asyncAfter(deadline: .now() + 3) { flushed.fulfill() }
        wait(for: [flushed], timeout: 5)
    }

    func testOfficialAccountLoginInitialization() {
        let app = XCUIApplication()
        app.launchArguments = ["--auth-smoke"]
        app.launch()
        XCTAssertTrue(app.staticTexts["Complete Claude Code sign-in in the browser"].waitForExistence(timeout: 30))
        XCTAssertTrue(app.buttons["Continue in browser"].exists)
        XCTAssertFalse(app.secureTextFields["Anthropic API key"].exists)
        XCTAssertFalse(app.buttons["Send"].exists) // no inference before the user's sign-in
        XCTAssertEqual(app.staticTexts["count-Writes"].label, "0")
        XCTAssertEqual(app.staticTexts["count-Stream events"].label, "0")
        app.buttons["Continue in browser"].tap()
        XCTAssertTrue(app.buttons["Done"].waitForExistence(timeout: 15))
        app.buttons["Done"].tap()
        XCTAssertTrue(app.buttons["Continue in browser"].waitForExistence(timeout: 10))
    }

    func testManualApprovalsThenResume() {
        let app = XCUIApplication()
        app.launchArguments = ["--manual-smoke"]
        app.launch()
        XCTAssertTrue(app.staticTexts["mcp__ios__write_note"].waitForExistence(timeout: 30))
        app.buttons["Allow once"].tap()
        XCTAssertTrue(app.staticTexts["mcp__ios__read_note"].waitForExistence(timeout: 15))
        app.buttons["Allow once"].tap()
        XCTAssertTrue(app.staticTexts["PASS — official harness + native tools"].firstMatch.waitForExistence(timeout: 15))
        XCTAssertEqual(app.staticTexts["count-Writes"].label, "1")
        XCTAssertEqual(app.staticTexts["count-Reads"].label, "1")
        // Let the delayed MCP cache log and official transcript writes run too.
        let stable = expectation(description: "Post-turn runtime remains healthy")
        DispatchQueue.main.asyncAfter(deadline: .now() + 8) { stable.fulfill() }
        wait(for: [stable], timeout: 10)
        XCTAssertTrue(app.staticTexts["PASS — official harness + native tools"].firstMatch.exists)
        app.terminate()
        app.launchArguments = ["--resume-smoke"]
        app.launch()
        XCTAssertTrue(app.staticTexts["PASS — saved session resumed"].firstMatch.waitForExistence(timeout: 30))
        XCTAssertEqual(app.staticTexts["count-Writes"].label, "0")
        XCTAssertEqual(app.staticTexts["count-Reads"].label, "0")
        let attachment = XCTAttachment(screenshot: app.screenshot())
        attachment.name = "Official harness resumed on iOS"
        attachment.lifetime = .keepAlways
        add(attachment)
    }

    func testDenyPreventsNativeWrite() {
        let app = XCUIApplication()
        app.launchArguments = ["--manual-smoke"]
        app.launch()
        XCTAssertTrue(app.staticTexts["mcp__ios__write_note"].waitForExistence(timeout: 30))
        app.buttons["Deny"].tap()
        // The success-only fixture rejects the returned denial; no Swift tool may run.
        XCTAssertTrue(app.staticTexts["FAIL — inspect the event log"].firstMatch.waitForExistence(timeout: 20))
        XCTAssertEqual(app.staticTexts["count-Writes"].label, "0")
        XCTAssertEqual(app.staticTexts["count-Reads"].label, "0")
    }
}
