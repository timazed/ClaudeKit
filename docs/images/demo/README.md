# ClaudeKit demo gallery

Captured on 23 October 2026 from the actual LibraryDemo app on an iPhone 17 Pro simulator, iOS 27.0 (24A434). Original 1206 × 2622 PNG captures are retained without cropping or retouching. The status bar was set to 9:41 with full Wi-Fi and battery.

| Image | Screen |
| --- | --- |
| [01-sign-in.png](01-sign-in.png) | Signed-out Claude-account entry screen; no credentials entered |
| [02-conversation.png](02-conversation.png) | New fixture conversation and request controls |
| [03-tool-approval.png](03-tool-approval.png) | Native write-note approval, before the Swift tool runs |
| [04-completed-reply.png](04-completed-reply.png) | Completed write/read tool loop and saved reply |
| [05-output-controls.png](05-output-controls.png) | Memory/search options, fixture usage, composer, and recovery entry point |
| [06-reply-formats.png](06-reply-formats.png) | Text, JSON, JSON Lines, and XML selection |

Screens 2–6 use `--fixture`: the real pinned official harness runs in embedded NodeMobile, while a deterministic loopback endpoint supplies model responses. The fixture's proof text and UUID are intentional test data. The images do not establish live-account inference, hosted search, or structured generation; the format image shows selection controls. No personal account information is present.

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

The capture test waits for actual UI states, approves the native write/read calls, checks completion, and attaches six full-screen screenshots. The final run passed (one UI test, zero failures); its local result bundle is `/tmp/claudekit-gallery-publish.xcresult`. The captured app source is commit `c505d69`; this PR adds the capture test and documentation. [manifest.json](manifest.json) records PNG checksums.
