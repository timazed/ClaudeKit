// swift-tools-version: 6.0
import PackageDescription
import Foundation

let hasNode = FileManager.default.fileExists(atPath: URL(fileURLWithPath: #filePath).deletingLastPathComponent().appendingPathComponent("HarnessDemo/Vendor/NodeMobile.xcframework").path)

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
        .library(name: "ClaudeKitLegacy", targets: ["ClaudeKitLegacy"]),
        .library(name: "ClaudeKitLegacyUI", targets: ["ClaudeKitLegacyUI"]),
    ],
    dependencies: [.package(url: "https://github.com/realm/realm-swift.git", exact: "20.0.5")],
    targets: [
        .target(
            name: "ClaudeKit",
            path: "Sources/ClaudeKit"
        ),
        .target(
            name: "ClaudeKitUI",
            dependencies: ["ClaudeKit"],
            path: "Sources/ClaudeKitUI"
        ),
        .target(name: "ClaudeKitHarness", dependencies: [.target(name: "ClaudeKit")] +
            (hasNode ? [.target(name: "NodeMobile", condition: .when(platforms: [.iOS]))] : []),
            resources: [.copy("Resources/Runtime")]),
        .target(name: "ClaudeKitRealm", dependencies: ["ClaudeKit", .product(name: "RealmSwift", package: "realm-swift")]),
        .target(name: "ClaudeKitSQLite", dependencies: ["ClaudeKit"], linkerSettings: [.linkedLibrary("sqlite3")]),
        .target(name: "ClaudeKitLegacy"),
        .target(name: "ClaudeKitLegacyUI", dependencies: ["ClaudeKitLegacy"]),
        .testTarget(name: "ClaudeKitLegacyTests", dependencies: ["ClaudeKitLegacy", "ClaudeKitLegacyUI"]),
        .testTarget(name: "ClaudeKitTests", dependencies: ["ClaudeKit", "ClaudeKitHarness", "ClaudeKitUI", "ClaudeKitSQLite", "ClaudeKitRealm"]),
    ] + (hasNode ? [.binaryTarget(name: "NodeMobile", path: "HarnessDemo/Vendor/NodeMobile.xcframework")] : []),
    swiftLanguageModes: [.v5]
)
