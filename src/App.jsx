import './App.css'

function App() {
    return (<div className="App">
        <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-xl">
                🦠 新冠肺炎症状缓解药物参考
            </a>
        </div>
        <div className="alert alert-error shadow-lg">
            <div>
                <span>
                    <h3 className="font-bold">以下情况请及时就医：</h3>
                    <div>1.持续发热超过24小时/体温反复超过39°C/症状好转后又出现发热</div>
                    <div>2.出现头痛、耳痛、鼻窦疼痛、严重的喉咙痛</div>
                    <div>3.出现喘息、呼吸急促/困难、口唇发紫</div>
                    <div>4.出现鼻塞/流涕/咳嗽超过10天且没有改善</div>
                    <div>5.连续用药三天没有改善</div>
                    <div>6.病情持续七天没有改善</div>
                </span>
            </div>
        </div>
        <div className="text-2xl text-center m-4">儿童</div>
        <div className="overflow-x-auto m-2">
            <table className="table w-full border-collapse border border-slate-500">
                <thead>
                <tr>
                    <th className="border border-slate-600 text-center">😷 症状</th>
                    <th className="border border-slate-600 text-center">💊 常用药物</th>
                    <th className="border border-slate-600 text-center">🕗 0~3个月</th>
                    <th className="border border-slate-600 text-center">🕗 3~6个月</th>
                    <th className="border border-slate-600 text-center">🕗 6个月~6岁</th>
                    <th className="border border-slate-600 text-center">🕗 6岁~18岁</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 2 }>发烧</th>
                    <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 2 }>🏥 及时就医</td>
                    <td className="border border-slate-600 text-center">✅ 可以使用</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 4 } colSpan={ 2 }>✅ 可以使用</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">发烧</th>*/ }
                    <td className="border border-slate-600 text-center">布洛芬</td>
                    {/*<td className="border border-slate-600 text-center">🏥 及时就医</td>*/ }
                    <td className="border border-slate-600 text-center">❌ 不推荐</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 2 }>喉咙痛</th>
                    <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 2 }
                        colSpan={ 2 }>孩子可能还不会表达喉咙痛
                    </td>
                    {/*<td className="border border-slate-600 text-center">孩子可能还不会表达喉咙痛</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">喉咙痛</th>*/ }
                    <td className="border border-slate-600 text-center">布洛芬</td>
                    {/*<td className="border border-slate-600 text-center">孩子可能还不会表达喉咙痛</td>*/ }
                    {/*<td className="border border-slate-600 text-center">孩子可能还不会表达喉咙痛</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">干咳</th>
                    <td className="border border-slate-600 text-center">右美沙芬</td>
                    <td className="border border-slate-600 text-center" colSpan={ 3 } rowSpan={ 8 }>❌ 不推荐</td>
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    <td className="border border-slate-600 text-center" rowSpan={ 8 }>🥼 慎用，须咨询医生</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 4 }>流鼻涕*</th>
                    <td className="border border-slate-600 text-center">氯苯那敏</td>
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/ }
                    <td className="border border-slate-600 text-center">苯海拉明</td>
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/ }
                    <td className="border border-slate-600 text-center">氯雷他定</td>
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/ }
                    <td className="border border-slate-600 text-center">西替利嗪</td>
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 3 }>鼻塞*</th>
                    <td className="border border-slate-600 text-center">赛洛唑啉</td>
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/ }
                    <td className="border border-slate-600 text-center">羟甲唑啉</td>
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/ }
                    <td className="border border-slate-600 text-center">伪麻黄碱</td>
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">咳痰</th>
                    <td className="border border-slate-600 text-center" colSpan={ 5 }>呼吸道感染导致的咳痰症状，通常不建议使用药物祛痰。但如有大量脓痰，
                        堵塞较严重，咳痰超过2周症状未改善或有其他异常，建议前往医院就诊。
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="text-2xl text-center m-4">成人</div>
        <div className="overflow-x-auto m-2">
            <table className="table w-full">
                <thead>
                <tr>
                    <th className="border border-slate-600 text-center">😷 症状</th>
                    <th className="border border-slate-600 text-center">💊 常用药物</th>
                    <th className="border border-slate-600 text-center">🧑 普通成人</th>
                    <th className="border border-slate-600 text-center">🤰 孕妇**</th>
                    <th className="border border-slate-600 text-center">👩‍🍼 哺乳期**</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 2 }>发烧</th>
                    <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 4 }>✅ 可以使用</td>
                    <td className="border border-slate-600 text-center">✅ 可以使用</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 4 }>✅ 可以使用</td>
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">发烧</th>*/ }
                    <td className="border border-slate-600 text-center">布洛芬</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    <td className="border border-slate-600 text-center">孕晚期风险高，早/中期咨询医生</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 2 }>喉咙痛</th>
                    <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    <td className="border border-slate-600 text-center">✅ 可以使用</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">喉咙痛</th>*/ }
                    <td className="border border-slate-600 text-center">布洛芬</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    <td className="border border-slate-600 text-center">孕晚期风险高，早/中期咨询医生</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">干咳</th>
                    <td className="border border-slate-600 text-center">右美沙芬</td>
                    <td className="border border-slate-600 text-center">仅限剧烈咳嗷影响生活时，不超过7天</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 3 }>🥼 慎用，须咨询医生</td>
                    <td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 4 }>流鼻涕*</th>
                    <td className="border border-slate-600 text-center">氯苯那敏</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 2 }>✅ 可以使用</td>
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                    <td className="border border-slate-600 text-center">❌ 不推荐</td>
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/ }
                    <td className="border border-slate-600 text-center">苯海拉明</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                    <td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/ }
                    <td className="border border-slate-600 text-center">氯雷他定</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 2 } colSpan={ 3 }>✅ 可以使用</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/ }
                    <td className="border border-slate-600 text-center">西替利嗪</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 3 }>鼻塞*</th>
                    <td className="border border-slate-600 text-center">赛洛唑啉</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 2 }>不超过3天</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 3 }>❌ 不推荐</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 2 }>🥼 慎用，须咨询医生</td>
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/ }
                    <td className="border border-slate-600 text-center">羟甲唑啉</td>
                    {/*<td className="border border-slate-600 text-center">不超过3天</td>*/ }
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/ }
                    <td className="border border-slate-600 text-center">伪麻黄碱</td>
                    <td className="border border-slate-600 text-center">✅ 可以使用</td>
                    {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/ }
                    <td className="border border-slate-600 text-center">❌ 不推荐</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">咳痰</th>
                    <td className="border border-slate-600 text-center" colSpan={ 5 }>呼吸道感染导致的咳痰症状，通常不建议使用药物祛痰。但如有大量脓痰，
                        堵塞较严重，咳痰超过2周症状未改善或有其他异常，建议前往医院就诊。
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="text-2xl text-center m-4">病患</div>
        <div className="overflow-x-auto m-2">
            <table className="table w-full">
                <thead>
                <tr>
                    <th className="border border-slate-600 text-center">😷 症状</th>
                    <th className="border border-slate-600 text-center">💊 常用药物</th>
                    <th className="border border-slate-600 text-center">🩸 高血压</th>
                    <th className="border border-slate-600 text-center">🍬 糖尿病</th>
                    <th className="border border-slate-600 text-center">🫀 肾功能不全</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 2 }>发烧</th>
                    <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                    <td className="border border-slate-600 text-center">✅ 可以使用</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 4 }>✅ 可以使用</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 12 }>🥼 慎用，须咨询医生</td>
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">发烧</th>*/ }
                    <td className="border border-slate-600 text-center">布洛芬</td>
                    <td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 2 }>喉咙痛</th>
                    <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                    <td className="border border-slate-600 text-center">✅ 可以使用</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">喉咙痛</th>*/ }
                    <td className="border border-slate-600 text-center">布洛芬</td>
                    <td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">干咳</th>
                    <td className="border border-slate-600 text-center">右美沙芬</td>
                    <td className="border border-slate-600 text-center" colSpan={ 2 }>仅限剧烈咳嗷影响生活时，不超过7天
                    </td>
                    {/*<td className="border border-slate-600 text-center">仅限剧烈咳嗷影响生活时，不超过7天</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 4 }>流鼻涕*</th>
                    <td className="border border-slate-600 text-center">氯苯那敏</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 2 }>🥼 慎用，须咨询医生</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 4 }>✅ 可以使用</td>
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/ }
                    <td className="border border-slate-600 text-center">苯海拉明</td>
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/ }
                    <td className="border border-slate-600 text-center">氯雷他定</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 2 }>✅ 可以使用</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/ }
                    <td className="border border-slate-600 text-center">西替利嗪</td>
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 3 }>鼻塞*</th>
                    <td className="border border-slate-600 text-center">赛洛唑啉</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 3 } colSpan={ 2 }>🥼 慎用，须咨询医生
                    </td>
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/ }
                    <td className="border border-slate-600 text-center">羟甲唑啉</td>
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/ }
                    <td className="border border-slate-600 text-center">伪麻黄碱</td>
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                    {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">咳痰</th>
                    <td className="border border-slate-600 text-center" colSpan={ 5 }>呼吸道感染导致的咳痰症状，通常不建议使用药物祛痰。但如有大量脓痰，
                        堵塞较严重，咳痰超过2周症状未改善或有其他异常，建议前往医院就诊。
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <a href="https://github.com/zcyc/COVID-19-medication-guidelines/issues">纠正错误</a>
            </div>
            <div>
                <p>
                    ♥️ 带好口罩，当好个人健康第一责任人
                </p>
            </div>
            <div>
                <p>
                    <a href="https://github.com/zcyc">Charles</a> & <a href="https://github.com/jerryshell">Jerry</a>
                </p>
            </div>
        </footer>
    </div>)
}

export default App
