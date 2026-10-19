import Foundation

public extension Request {
    init(imported content: AgentImportedContent, prompt: String? = nil, executionMode: RequestExecutionMode = .threaded) {
        self.init(text: content.composedText(prompt: prompt), executionMode: executionMode)
    }
}
public extension AgentImportedContent {
    /// Reads bounded UTF-8 text. The caller owns security-scoped URL access granted by a share/import UI.
    static func textFile(at url: URL, maximumBytes: Int = 262144) throws -> AgentImportedContent {
        guard url.isFileURL, maximumBytes > 0, maximumBytes <= 1_048_576 else {
            throw AgentRuntimeError(code: "invalid_import", message: "Import requires a bounded local text file.")
        }
        let file = try FileHandle(forReadingFrom: url); defer { try? file.close() }
        let bytes = try file.read(upToCount: maximumBytes + 1) ?? Data()
        guard bytes.count <= maximumBytes, let text = String(data: bytes, encoding: .utf8) else {
            throw AgentRuntimeError(code: "invalid_import", message: "Text file exceeds the limit or is not UTF-8.")
        }
        return .init(textSnippets: [text])
    }
}
