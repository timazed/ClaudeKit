import XCTest
@testable import ClaudeKitLegacy

final class JSONValueTests: XCTestCase {
    func testRoundTripsObjects() throws {
        let value = JSONValue.object([
            "name": .string("lookup"),
            "count": .number(2),
            "enabled": .bool(true),
            "items": .array([.string("a"), .null]),
        ])

        let data = try JSONEncoder().encode(value)
        let decoded = try JSONDecoder().decode(JSONValue.self, from: data)

        XCTAssertEqual(decoded, value)
        XCTAssertEqual(decoded["name"]?.stringValue, "lookup")
        XCTAssertEqual(decoded["count"]?.intValue, 2)
    }
}
