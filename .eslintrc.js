module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        "vue/no-dupe-keys": ["error", {
            "groups": []
        }],
        "vue/no-duplicate-attributes": ["error", {
            "allowCoexistClass": true,
            "allowCoexistStyle": true
        }],
        "vue/no-parsing-error": ["error", {
            "abrupt-closing-of-empty-comment": true,
            "absence-of-digits-in-numeric-character-reference": true,
            "cdata-in-html-content": true,
            "character-reference-outside-unicode-range": true,
            "control-character-in-input-stream": true,
            "control-character-reference": true,
            "eof-before-tag-name": true,
            "eof-in-cdata": true,
            "eof-in-comment": true,
            "eof-in-tag": true,
            "incorrectly-closed-comment": true,
            "incorrectly-opened-comment": true,
            "invalid-first-character-of-tag-name": true,
            "missing-attribute-value": true,
            "missing-end-tag-name": true,
            "missing-semicolon-after-character-reference": true,
            "missing-whitespace-between-attributes": true,
            "nested-comment": true,
            "noncharacter-character-reference": true,
            "noncharacter-in-input-stream": true,
            "null-character-reference": true,
            "surrogate-character-reference": true,
            "surrogate-in-input-stream": true,
            "unexpected-character-in-attribute-name": true,
            "unexpected-character-in-unquoted-attribute-value": true,
            "unexpected-equals-sign-before-attribute-name": true,
            "unexpected-null-character": true,
            "unexpected-question-mark-instead-of-tag-name": true,
            "unexpected-solidus-in-tag": true,
            "unknown-named-character-reference": true,
            "end-tag-with-attributes": true,
            "duplicate-attribute": true,
            "end-tag-with-trailing-solidus": true,
            "non-void-html-element-start-tag-with-trailing-solidus": false,
            "x-invalid-end-tag": true,
            "x-invalid-namespace": true
        }],
        "vue/no-reserved-keys": ["error", {
            "reserved": [],
            "groups": []
        }],
        "vue/no-multi-spaces": ["error", {
            "ignoreProperties": false
        }],
        "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
        "vue/no-async-in-computed-properties": ["error"],
        "vue/valid-v-for": ["error"],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
          }]
    }
};
