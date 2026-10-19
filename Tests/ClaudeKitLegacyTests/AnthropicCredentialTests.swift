import XCTest
@testable import ClaudeKitLegacy

final class AnthropicCredentialTests: XCTestCase {
    func testAPIKeyUsesXAPIKeyHeader() {
        let headers = AnthropicSession(apiKey: "test-api-key").credential.requestHeaders

        XCTAssertEqual(headers["x-api-key"], "test-api-key")
        XCTAssertNil(headers["Authorization"])
    }

    func testBearerTokenUsesAuthorizationHeader() {
        let headers = AnthropicSession(bearerToken: "test-token").credential.requestHeaders

        XCTAssertEqual(headers["Authorization"], "Bearer test-token")
        XCTAssertNil(headers["x-api-key"])
    }
}
