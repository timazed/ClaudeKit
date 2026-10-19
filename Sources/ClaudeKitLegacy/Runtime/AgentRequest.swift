import Foundation

public enum RequestExecutionMode: String, Codable, Hashable, Sendable {
    case threaded
    case ephemeral
}

public struct Request: Codable, Hashable, Sendable {
    public var text: String
    public var images: [AgentImageAttachment]
    public var executionMode: RequestExecutionMode
    public var context: JSONValue?

    public init(
        text: String,
        images: [AgentImageAttachment] = [],
        executionMode: RequestExecutionMode = .threaded,
        context: JSONValue? = nil
    ) {
        self.text = text
        self.images = images
        self.executionMode = executionMode
        self.context = context
    }

    public init<Context: Encodable & Sendable>(
        text: String,
        images: [AgentImageAttachment] = [],
        context: Context?,
        executionMode: RequestExecutionMode = .threaded,
        encoder: JSONEncoder = JSONEncoder()
    ) throws {
        self.text = text
        self.images = images
        self.executionMode = executionMode
        self.context = try context.map {
            try JSONValue.encoding($0, encoder: encoder)
        }
    }

    public var hasContent: Bool {
        !text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty || !images.isEmpty || context != nil
    }

    public var isEphemeral: Bool {
        executionMode == .ephemeral
    }

    var transportText: String {
        guard let context else {
            return text
        }

        let contextBlock = """

        Host app context:
        \(context.prettyPrintedJSONString)
        """

        if text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty {
            return contextBlock.trimmingCharacters(in: .whitespacesAndNewlines)
        }

        return text + contextBlock
    }
}
