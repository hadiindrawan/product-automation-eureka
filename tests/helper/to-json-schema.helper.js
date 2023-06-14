import toJsonSchema from 'to-json-schema'

export function jsonSchemaHelper(schema, cases) {
    const options = {
        objects: {
            postProcessFnc: (schema, obj, defaultFnc) => ({ ...defaultFnc(schema, obj), required: Object.getOwnPropertyNames(obj) })
        }
    }

    if (schema.hasOwnProperty(cases)) {
        return toJsonSchema(schema[cases], options)
    } else {
        throw new Error('JSON Schema: ' + cases + ', does not exist!')
    }
}