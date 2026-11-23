// swift-tools-version: 6.0
import PackageDescription
import Foundation

let localNode = "HarnessDemo/Vendor/NodeMobile.xcframework"
let checkout = URL(fileURLWithPath: #filePath).deletingLastPathComponent()
let node: Target = FileManager.default.fileExists(atPath: checkout.appendingPathComponent(localNode).path)
    ? .binaryTarget(name: "NodeMobile", path: localNode)
    : .binaryTarget(
        name: "NodeMobile",
        url: "https://github.com/1Conan/nodejs-mobile/releases/download/v18.19.1-ios/NodeMobile.xcframework.zip",
        checksum: "e6471b84b3420de0845586c9b564e2cd2f7b6343bb2994706d01a45de6d8de7b"
    )

let package = Package(
    name: "ClaudeKit",
    platforms: [
        .iOS(.v18),
        .macOS(.v14),
    ],
    products: [
        .library(
            name: "ClaudeKit",
            targets: ["ClaudeKit"]
        ),
        .library(
            name: "ClaudeKitUI",
            targets: ["ClaudeKitUI"]
        ),
        .library(name: "ClaudeKitRealm", targets: ["ClaudeKitRealm"]),
        .library(name: "ClaudeKitSQLite", targets: ["ClaudeKitSQLite"]),
        .library(name: "ClaudeKitHarness", targets: ["ClaudeKitHarness"]),
    ],
    dependencies: [.package(url: "https://github.com/realm/realm-swift.git", exact: "20.0.5")],
    targets: [
        .target(
            name: "ClaudeKit",
            dependencies: ["ClaudeKitCore", "ClaudeKitHarness"],
            path: "Sources/ClaudeKitSDK"
        ),
        .target(
            name: "ClaudeKitCore",
            path: "Sources/ClaudeKit"
        ),
        .target(
            name: "ClaudeKitUI",
            dependencies: ["ClaudeKit"],
            path: "Sources/ClaudeKitUI"
        ),
        .target(name: "ClaudeKitHarness", dependencies: [
            .target(name: "ClaudeKitCore"), .target(name: "NodeMobile", condition: .when(platforms: [.iOS]))],
            resources: [.copy("Resources/Runtime")]),
        .target(name: "ClaudeKitRealm", dependencies: ["ClaudeKit", .product(name: "RealmSwift", package: "realm-swift")]),
        .target(name: "ClaudeKitSQLite", dependencies: ["ClaudeKit"], linkerSettings: [.linkedLibrary("sqlite3")]),
        .testTarget(name: "ClaudeKitImportTests", dependencies: ["ClaudeKit"]),
        .testTarget(name: "ClaudeKitTests", dependencies: ["ClaudeKit", "ClaudeKitCore", "ClaudeKitHarness", "ClaudeKitUI", "ClaudeKitSQLite", "ClaudeKitRealm"]),
        node,
    ],
    swiftLanguageModes: [.v5]
)
