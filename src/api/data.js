const database = [

  {
    itemId: 6,
    image: 'vscode.png',
    demo: 'sample.gif',
    url: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag',
    title: 'Auto Close Tag',
    categorys: [
      {
        id: 4,
        name: 'Visual Studio Code'
      },
      {
        id: 5,
        name: 'coding'
      },
    ],
    text: 'HTMLでタグを書き換えるとそれに対応したタグも自動的に切り替えてくれるvscodeの拡張機能。これがあればタグの書き換え忘れやタイプミスが減る。',
    date: 2019.05
  },

  {
    itemId: 5,
    image: 'vscode.png',
    demo: 'sample.gif',
    url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
    title: 'Trailing Spaces',
    categorys: [
      {
        id: 4,
        name: 'Visual Studio Code'
      },
      {
        id: 5,
        name: 'coding'
      },
    ],
    text: '余分な空白を表示してくれるvscodeの拡張機能。これがあれば空白ミスに時間を取られる心配はない。',
    date: 2019.05
  },

  {
    itemId: 4,
    image: 'chrome.png',
    demo: 'sample.gif',
    url: 'https://chrome.google.com/webstore/detail/pixelparallel-by-htmlburg/iffnoibnepbcloaaagchjonfplimpkob?hl=ja',
    title: 'PixelParallel by htmlBurger',
    categorys: [
      {
        id: 2,
        name: 'Google Chrom'
      },
      {
        id: 5,
        name: 'coding'
      },
    ],
    text: '画像をブラウザに重ねてレイアウトを確認できる。コーディングの効率が上がる。',
    date: 2019.05
  },

  {
    itemId: 3,
    image: 'liveserver.png',
    demo: 'liveserver.gif',
    url: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
    title: 'Live Server',
    categorys: [
      {
        id: 4,
        name: 'Visual Studio Code'
      },
      {
        id: 5,
        name: 'coding'
      },
    ],
    text: 'ファイルを保存するとブラウザを自動でリロードしてくれる。コーディングの効率が上がる。',
    date: 2019.05
  },

  {
    itemId: 2,
    image: 'chrome.png',
    demo: 'sample.gif',
    url: 'https://chrome.google.com/webstore/detail/website-ip/ghbmhlgniedlklkpimlibbaoomlpacmk?hl=ja',
    title: 'Website IP',
    categorys: [
      {
        id: 2,
        name: 'Google Chrom'
      },
      {
        id: 3,
        name: 'IP'
      }
    ],
    text: 'webサイトのipアドレスをブラウザの下部に表示してくれる拡張機能。',
    date: 2019.05
  },

  {
    itemId: 1,
    image: 'sousetree.jpeg',
    demo: 'sample.gif',
    url: 'https://www.sourcetreeapp.com/',
    title: 'Source Tree',
    categorys: [
      {
        id: 1,
        name: 'Git'
      }
    ],
    text: 'Gitでのバージョン管理をローカルで行えるアプリケーション。',
    date: 2019.05
  },
]

// カテゴリを取得
let getcategory = [];
database.forEach(el => {
  el.categorys.forEach(el => {
    getcategory.push(el);
  });
});

// 重複しているカテゴリを取り除く
const categorys = getcategory.filter((el, i, self) => self.findIndex(val => el.id === val.id) === i);


export default {
  fetch(){return database},
  find(id){
    return database.find(el => el.itemId === id)
  },
  findBycategory(id){
    return database.filter(el => el.categorys.find(category => category.id === id));
  },
  findByKeyword(val) {
    return database.filter(el => el.text.toUpperCase().includes(val) || el.title.toUpperCase().includes(val));
  },
  findCurrentPost() {return database.slice(0, 3);},
  asyncFind(id, callback) {
    return database.find(el => el.itemId === id);
  },
  getcategory() { return categorys; }
}