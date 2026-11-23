# SDK integration

[Documentation index](index.md)

## Requirements and package selection

The current package targets iOS 18+ and macOS 14+. Embedded NodeMobile contains arm64 device and arm64 simulator slices. An Intel simulator is not supported by that binary. macOS development uses a configured Node 24.14.0 executable.

### Install a version with SwiftPM

Use the repository URL `https://github.com/timazed/ClaudeKit.git` with an exact [published version](https://github.com/timazed/ClaudeKit/tags). For the first alpha, add these entries to your manifest.

```swift
// In dependencies
.package(url: "https://github.com/timazed/ClaudeKit.git", exact: "0.1.0-alpha.1")

// In your app target’s dependencies
.product(name: "ClaudeKit", package: "ClaudeKit"),
.product(name: "ClaudeKitUI", package: "ClaudeKit")
```

Xcode’s **Add Package Dependencies** accepts the same URL. SwiftPM fetches the checksum-pinned NodeMobile XCFramework and copies the tag’s runtime resources into the app. The first framework download is approximately 573 MiB. Apps using macOS development transport still supply a Node executable. Maintainers can prepare and test a version with the [SwiftPM release guide](swiftpm-releases.md).

### Develop from a checkout

Clone the repository and run bootstrap before Xcode resolves the local package.

```sh
git clone https://github.com/timazed/ClaudeKit.git
cd ClaudeKit
bash Scripts/bootstrap-library.sh
open LibraryDemo/LibraryDemo.xcodeproj
```

Bootstrap prepares the pinned runtime resources and generates the demo project. See [third-party provenance](../HarnessDemo/ThirdParty/README.md) for version pins and license boundaries. Do not edit the vendor CLI to customize app behavior.

In Xcode, add this directory as a local Swift package. Link `ClaudeKit` and, for the supplied UI presenters, `ClaudeKitUI`. Add `ClaudeKitSQLite` or `ClaudeKitRealm` only when choosing that persistence adapter.

## Runtime ownership

Retain one runtime for the app/account lifetime. Importing `ClaudeKit` makes the initializer that creates the driver available. Importing the module does not start the harness; `runtime.restore()` explicitly opens it. Developers do not load a driver manually.

```swift
import ClaudeKit
import ClaudeKitUI

@MainActor
func makeRuntime(approvals: ApprovalInbox,
                 signIn: ClaudeSignInCoordinator) throws -> AgentRuntime {
    try AgentRuntime(configuration: .init(
        approvalPresenter: approvals,
        stateStore: FileRuntimeStateStore(),
        signInPresenter: signIn,
        baseInstructions: "Be helpful and concise.",
        turnTimeout: 300,
        maximumToolCalls: 128,
        maximumParallelToolCalls: 4
    ))
}
```

Retain the presenters too. The app must render their browser and approval state; constructing them does not present UI. See [authentication](authentication.md) and the [demo implementation](../LibraryDemo/Sources/DemoModel.swift).

Call `restore()` before creating conversations. It prepares/loads app state and opens the harness to discover the current account. If `currentSession()` is nil, start interactive sign-in. Restoration is an exclusive lifecycle operation; finish active work first.

Use the `driver:` configuration initializer only for custom integrations or tests. Custom drivers must provide `makeSessionDriver()` for independent concurrent turns; returning nil explicitly limits that driver to one session.

## Harness options

Pass `harness: .init(storageDirectory: directory)` to select an account-specific harness directory. Keep it separate from the app projection store and recovery directory, but retain all three across launches.

On macOS, also pass `nodeExecutable: URL(fileURLWithPath: "/absolute/path/to/node")` in the harness configuration. The supplied `ClaudeSignInBrowser` is iOS-only; a macOS app needs its own implementation of `ClaudeSignInPresenting`. A browser presenter remains necessary for interactive account login.

`harness: .init(authentication: .fixture)` runs the pinned harness against the deterministic local model fixture. It is a test mode, not a logged-in Claude account or a general-purpose offline model.

## Application lifecycle

Register tools while idle, restore, sign in if needed, then create/select a thread and start work. Consume each event stream exactly once. Keep handles for cancellation. At shutdown or account switching, cancel and await active work before disconnecting. Repeatedly constructing runtimes for view redraws can create competing state ownership and unnecessary workers.

Read [messaging](messaging.md) for execution lifetime and [persistence](persistence.md) for durable state ownership.
