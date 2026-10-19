import Foundation

public enum JSONValue: Codable, Hashable, Sendable {
    case string(String)
    case number(Double)
    case bool(Bool)
    case object([String: JSONValue])
    case array([JSONValue])
    case null

    public init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()

        if container.decodeNil() {
            self = .null
        } else if let bool = try? container.decode(Bool.self) {
            self = .bool(bool)
        } else if let number = try? container.decode(Double.self) {
            self = .number(number)
        } else if let string = try? container.decode(String.self) {
            self = .string(string)
        } else if let object = try? container.decode([String: JSONValue].self) {
            self = .object(object)
        } else if let array = try? container.decode([JSONValue].self) {
            self = .array(array)
        } else {
            throw DecodingError.dataCorruptedError(
                in: container,
                debugDescription: "Unsupported JSON value."
            )
        }
    }

    public func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()

        switch self {
        case let .string(value):
            try container.encode(value)
        case let .number(value):
            try container.encode(value)
        case let .bool(value):
            try container.encode(value)
        case let .object(value):
            try container.encode(value)
        case let .array(value):
            try container.encode(value)
        case .null:
            try container.encodeNil()
        }
    }

    public var stringValue: String? {
        guard case let .string(value) = self else {
            return nil
        }
        return value
    }

    public var numberValue: Double? {
        guard case let .number(value) = self else {
            return nil
        }
        return value
    }

    public var intValue: Int? {
        numberValue.map(Int.init)
    }

    public var boolValue: Bool? {
        guard case let .bool(value) = self else {
            return nil
        }
        return value
    }

    public var objectValue: [String: JSONValue]? {
        guard case let .object(value) = self else {
            return nil
        }
        return value
    }

    public var arrayValue: [JSONValue]? {
        guard case let .array(value) = self else {
            return nil
        }
        return value
    }

    public subscript(key: String) -> JSONValue? {
        objectValue?[key]
    }

    public var compactJSONString: String {
        guard let data = try? JSONEncoder().encode(self) else {
            return ""
        }
        return String(decoding: data, as: UTF8.self)
    }

    public var prettyPrintedJSONString: String {
        guard
            let data = try? JSONEncoder().encode(self),
            let object = try? JSONSerialization.jsonObject(with: data),
            let prettyData = try? JSONSerialization.data(
                withJSONObject: object,
                options: [.prettyPrinted, .sortedKeys]
            )
        else {
            return compactJSONString
        }

        return String(decoding: prettyData, as: UTF8.self)
    }

    public static func encoding<Value: Encodable>(
        _ value: Value,
        encoder: JSONEncoder = JSONEncoder(),
        decoder: JSONDecoder = JSONDecoder()
    ) throws -> JSONValue {
        let data = try encoder.encode(value)
        return try decoder.decode(JSONValue.self, from: data)
    }
}
