export const productConfig = {
  "product": {
    "rank": 2,
    "tier": "P0",
    "score": 72,
    "domain": "WindowsApp",
    "ideaNo": 19,
    "ideaName": "レビューコメント同期ボード",
    "repository": "review-comment-sync-board",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "Frame.ioや動画レビューの対応漏れ防止として課題が明確で、小規模制作向けに切り出せる。",
    "surface": "Windows ローカル運用向け CLI と静的 HTML ダッシュボード",
    "integration": "",
    "overview": "連携ツール: Frame.io / Premiere Pro / DaVinci Resolve。タイムコード付きコメント、対応状況、差分版、再書き出し履歴を管理する。",
    "problem": "レビューコメントがツールやチャットに分散し、対応漏れが出やすい。",
    "differentiation": "コメント、編集位置、対応済み証跡をタイムラインに戻せる。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
