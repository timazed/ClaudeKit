import XCTest
final class HarnessDemoUITests: XCTestCase {
    func testLatestHarnessToolLoop() {
        let app = XCUIApplication()
        app.launchArguments = ["--smoke"]
        app.launch()
        XCTAssertTrue(app.staticTexts["PASS — official harness + native tools"].firstMatch.waitForExistence(timeout: 90))
        XCTAssertEqual(app.staticTexts["count-Writes"].label, "1")
        XCTAssertEqual(app.staticTexts["count-Reads"].label, "1")
        XCTAssertEqual(app.staticTexts["count-Approvals"].label, "2")
    }
}
