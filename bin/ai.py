import openai
openai.api_key = "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"

text = "マイナンバーカードをめぐりトラブルが相次ぐ中、「健康保険証の廃止」「名称変更」「自主返納」などについて国会の閉会中審査で議論されました。"

response = openai.Completion.create(
    engine="davinci",
    prompt=text,
    temperature=0.7,
    max_tokens=1500,
    presence_penalty=0,
)

print(response['choices'][0]['text'])