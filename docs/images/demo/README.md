# ClaudeKit demo gallery

Captured on 24 October 2026 from the actual LibraryDemo app on an iPhone 17 Pro simulator, iOS 27.0 (24A434). Original 1206 × 2622 PNG captures are retained without cropping or retouching. The status bar was set to 9:41 with full Wi-Fi and battery.

| Image | Screen |
| --- | --- |
| [01-sign-in.png](01-sign-in.png) | Signed-out Claude-account entry screen; no credentials entered |
| [02-conversation.png](02-conversation.png) | New sample conversation and request controls |
| [03-tool-approval.png](03-tool-approval.png) | Native write-note approval with the human-readable Saturday plan, before the Swift tool runs |
| [04-completed-reply.png](04-completed-reply.png) | Completed write/read tool loop and the saved Saturday plan |
| [05-output-controls.png](05-output-controls.png) | Memory/search options, fixture usage, composer, and recovery entry point |
| [06-reply-formats.png](06-reply-formats.png) | Text, JSON, JSON Lines, and XML selection |
| [07-structured-result.png](07-structured-result.png) | Actual schema-validated JSON itinerary returned through the typed-output API |

Screens 2–7 use `--fixture --gallery`: the real pinned official harness runs in embedded NodeMobile, while a deterministic loopback endpoint supplies realistic sample responses. The native write and read tools operate on the demo’s real note file; its contents are checked before the fixture returns a completed reply. The JSON itinerary travels through the harness’s structured-output tool and the SDK’s schema validator. No live account, hosted search, or personal information is shown.

The gallery launch argument selects readable sample prompts and conversation titles. Existing proof-oriented fixture scenarios retain their unique verification markers. Account/model controls, reply settings, and recovery remain available in disclosure sections. Structured results are displayed only after output commit and cleared on conversation changes.

## Reproduce

Use a clean disposable simulator so saved account and conversation data cannot enter the captures. Bootstrap the package and select an installed iPhone simulator UUID:

```sh
bash Scripts/bootstrap-library.sh
xcrun simctl status_bar YOUR_SIMULATOR_UUID override --time '9:41' \
  --dataNetwork wifi --wifiMode active --wifiBars 3 \
  --batteryState charged --batteryLevel 100
xcodebuild -project LibraryDemo/LibraryDemo.xcodeproj -scheme LibraryDemo \
  -destination 'platform=iOS Simulator,id=YOUR_SIMULATOR_UUID' \
  -resultBundlePath /tmp/claudekit-gallery.xcresult \
  -only-testing:LibraryDemoUITests/LibraryDemoUITests/testCaptureDocumentationGallery \
  -parallel-testing-enabled NO test
xcrun xcresulttool export attachments --path /tmp/claudekit-gallery.xcresult \
  --output-path /tmp/claudekit-gallery-export --filter '*.png'
```

The capture test waits for actual UI states, approves the native write/read calls, checks completion, generates validated JSON, and attaches seven full-screen screenshots. The final result bundle is `/tmp/claudekit-gallery-v4.xcresult`. [manifest.json](manifest.json) records source and PNG checksums for the captured build.
