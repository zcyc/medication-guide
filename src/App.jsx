import './App.css'

function App() {
  return (<div className="App">
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">
        🦠 新冠肺炎症状缓解药物参考
      </a>
    </div>
    <div className="alert shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">症状持续超过7天或药物连续使用三天不见效请及时就医！</h3>
        </div>
      </div>
      <div className="flex-none">
        <a
          className="btn btn-sm"
          href="tel:4001121066"
        >拨打急救电话</a>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
        <tr>
          <th>😷 症状</th>
          <th>💊 常用药物</th>
          <th>🕗 0~3个月</th>
          <th>🕗 3~6个月</th>
          <th>🕗 6个月~6岁</th>
          <th>🕗 6岁~18岁</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th rowSpan={2}>发烧</th>
          <td>对乙酰氨基酚</td>
          <td>🏥 及时就医</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          {/*<th>发烧</th>*/}
          <td>布洛芬</td>
          <td>🏥 及时就医</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <th rowSpan={2}>喉咙痛</th>
          <td>对乙酰氨基酚</td>
          <td>❗︎ 孩子可能还不会表达喉咙痛</td>
          <td>❗︎ 孩子可能还不会表达喉咙痛</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          {/*<th>喉咙痛</th>*/}
          <td>布洛芬</td>
          <td>❗︎ 孩子可能还不会表达喉咙痛</td>
          <td>❗︎ 孩子可能还不会表达喉咙痛</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <th>干咳</th>
          <td>右美沙芬</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>🥼 遵医嘱</td>
        </tr>
        <tr>
          <th rowSpan={4}>流鼻涕*</th>
          <td>氯苯那敏</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>🥼 遵医嘱</td>
        </tr>
        <tr>
          {/*<th>流鼻涕*</th>*/}
          <td>苯海拉明</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>🥼 遵医嘱</td>
        </tr>
        <tr>
          {/*<th>流鼻涕*</th>*/}
          <td>氯雷他定</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>🥼 遵医嘱</td>
        </tr>
        <tr>
          {/*<th>流鼻涕*</th>*/}
          <td>西替利嗪</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>🥼 遵医嘱</td>
        </tr>
        <tr>
          <th rowSpan={3}>鼻塞*</th>
          <td>赛洛唑啉</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>🥼 遵医嘱</td>
        </tr>
        <tr>
          {/*<th>鼻塞*</th>*/}
          <td>羟甲唑啉</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>🥼 遵医嘱</td>
        </tr>
        <tr>
          {/*<th>鼻塞*</th>*/}
          <td>伪麻黄碱</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>🥼 遵医嘱</td>
        </tr>
        <tr>
          <th>咳痰</th>
          <td colSpan={5}>呼吸道感染导致的咳痰症状，通常不建议使用药物祛痰。但如有大量脓痰，
            堵塞较严重，咳痰超过2周症状未改善或有其他异常，建议前往医院就诊。
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <p>
          ♥️ 带好口罩，做健康的第一责任人！
        </p>
      </div>
      {/* made by https://github.com/zcyc */}
    </footer>
  </div>)
}

export default App
