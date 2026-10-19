import XCTest

final class LibraryDemoUITests: XCTestCase {
    override func setUp() { continueAfterFailure = false }
    func testTypedFormatsAndRecoveryOnEmbeddedHarness() {
        let app = XCUIApplication(); app.launchArguments = ["--fixture", "--verify-formats"]; app.launch()
        XCTAssertTrue(app.staticTexts["PASS — JSONL, XML, recovery replay"].waitForExistence(timeout: 90))
    }
    func testRequestModesOnEmbeddedHarness() {
        let app = XCUIApplication(); app.launchArguments = ["--fixture", "--verify-parity"]; app.launch()
        XCTAssertTrue(app.staticTexts["PASS — images, JSON, ephemeral, memory, logout"].waitForExistence(timeout: 90))
    }
    func testOfficialSignInBrowserAndCancellation() {
        let app = XCUIApplication(); app.launch()
        XCTAssertTrue(app.buttons["Sign in with Claude"].waitForExistence(timeout: 30))
        app.buttons["Sign in with Claude"].tap()
        XCTAssertTrue(app.buttons["Cancel"].waitForExistence(timeout: 30))
        app.buttons["Cancel"].tap()
        XCTAssertTrue(app.buttons["Sign in with Claude"].waitForExistence(timeout: 10))
        let ready = NSPredicate(format: "enabled == true")
        expectation(for: ready, evaluatedWith: app.buttons["Sign in with Claude"])
        waitForExpectations(timeout: 10)
        XCTAssertFalse(app.buttons["Cancel sign-in"].exists)
        XCTAssertTrue(app.staticTexts["Sign-in cancelled"].exists)
        app.buttons["Sign in with Claude"].tap()
        XCTAssertTrue(app.buttons["Cancel"].waitForExistence(timeout: 30))
        app.buttons["Cancel"].tap()
        XCTAssertTrue(app.staticTexts["Sign-in cancelled"].waitForExistence(timeout: 10))
    }
    func testLibrarySessionsAndProcessRestart() {
        let app = XCUIApplication(); app.launchArguments = ["--fixture", "--verify"]; app.launch()
        XCTAssertTrue(app.staticTexts["PASS — library A → B → A"].waitForExistence(timeout: 90))
        app.terminate(); app.launchArguments = ["--fixture", "--verify-resume"]; app.launch()
        XCTAssertTrue(app.staticTexts["PASS — library resumed after restart"].waitForExistence(timeout: 45))
    }
    func testDenyPreventsNativeWrite() {
        let app = XCUIApplication(); app.launchArguments = ["--fixture"]; app.launch()
        XCTAssertTrue(app.buttons["New conversation"].waitForExistence(timeout: 30)); app.buttons["New conversation"].tap()
        XCTAssertTrue(app.buttons["Send"].waitForExistence(timeout: 5)); app.buttons["Send"].tap()
        XCTAssertTrue(app.buttons["Deny"].waitForExistence(timeout: 30)); app.buttons["Deny"].tap()
        XCTAssertTrue(app.staticTexts["Turn ended"].waitForExistence(timeout: 15))
        XCTAssertEqual(app.staticTexts["native-tool-count"].label, "Native tool calls: 0")
    }
    func testCancelApprovalThenNewConversation() {
        let app = XCUIApplication(); app.launchArguments = ["--fixture"]; app.launch()
        XCTAssertTrue(app.buttons["New conversation"].waitForExistence(timeout: 30)); app.buttons["New conversation"].tap()
        app.buttons["Send"].tap()
        XCTAssertTrue(app.buttons["Stop turn"].waitForExistence(timeout: 30)); app.buttons["Stop turn"].tap()
        XCTAssertTrue(app.staticTexts["Turn ended"].waitForExistence(timeout: 15))
        XCTAssertFalse(app.buttons["Allow once"].exists)
        XCTAssertEqual(app.staticTexts["native-tool-count"].label, "Native tool calls: 0")
        app.buttons["New conversation"].tap(); app.buttons["Send"].tap()
        XCTAssertTrue(app.buttons["Allow once"].waitForExistence(timeout: 30)); app.buttons["Allow once"].tap()
        XCTAssertTrue(app.buttons["Allow once"].waitForExistence(timeout: 15)); app.buttons["Allow once"].tap()
        XCTAssertTrue(app.staticTexts["Turn completed"].waitForExistence(timeout: 15))
        XCTAssertEqual(app.staticTexts["native-tool-count"].label, "Native tool calls: 2")
    }
}
