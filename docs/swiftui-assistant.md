# Build your first SwiftUI assistant

[Documentation index](index.md) · [ClaudeKit](../README.md)

Start with the runnable LibraryDemo on an arm64 iPhone simulator. It includes the browser, streaming chat view, and native approval prompts you can reuse in your own app.

## 1. Launch a fixture conversation

Follow [installation](../README.md#installation), then open `LibraryDemo/LibraryDemo.xcodeproj`. Select the LibraryDemo scheme. Under **Edit Scheme → Run → Arguments**, add `--fixture`. Run the app, create a conversation, and send the prefilled note request. Approve both calls. The final reply contains the note read back from the app’s file.

## 2. Connect your app to the runtime

Add the package products `ClaudeKit` and `ClaudeKitUI` to your iOS app. In a main-actor view model, retain the runtime, the approval inbox, and the sign-in coordinator for the life of the account.

```swift
let approvals = ApprovalInbox()
let signIn = ClaudeSignInCoordinator()
let runtime = try AgentRuntime(configuration: .init(
    approvalPresenter: approvals,
    stateStore: FileRuntimeStateStore(),
    signInPresenter: signIn,
    baseInstructions: "Be helpful and concise."
))
try await runtime.restore()
```

Import both products. Register native tools before restoration if you want the model to use them on its first turn. Present the coordinator’s browser page in your SwiftUI view and connect browser cancellation to the task awaiting sign-in. The demo’s model and view show both sides of that connection. [Model](../LibraryDemo/Sources/DemoModel.swift) · [View](../LibraryDemo/Sources/LibraryDemoApp.swift)

**Check** — Run the demo without `--fixture` and tap **Sign in with Claude**. The private browser opens. Cancel to return to the app, or complete sign-in to use the live service.

## 3. Display a streaming reply

After sign-in, start a turn from your model. Append each delta to the visible reply and retain the execution handle if your interface offers a Stop button.

```swift
let thread = try await runtime.createThread(title: "First conversation")
let execution = try await runtime.start(Request(text: "Hello!"), in: thread.id)
for try await event in execution.events {
    if case let .assistantMessageDelta(_, _, delta) = event {
        reply += delta
    }
}
```

Here `reply` is the view model’s mutable string displayed by the view. Reuse the thread ID for follow-up messages. [Messaging and cancellation](messaging.md)

## 4. Restore history and approve tools

In fixture mode, create two conversations and run the note request in each. Switch back to the first, relaunch, and select it again. Its saved messages should be visible. File storage is sufficient for this walkthrough. SQLite and Realm support indexed history for larger stores. [Persistence](persistence.md)

Try **Deny** on a new note request. The Swift executor should run only after approval. To add your own action, follow the demo’s `write_note` registration, give it an object input schema, and select `.requiresApproval` for user-confirmed changes. [Native tool registration](tools-and-policies.md)
