import './App.css'

function App() {
    return (<div className="App">
        <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-xl">
                🦠 新型冠状病毒病症状 & 💊 症状缓解药物
            </a>
        </div>
        <div className="m-2">
            <div className="alert alert-error shadow-lg">
                <div>
                <span>
                    <h3 className="font-bold">⚠ 以下情况请及时就医：</h3>
                    <div>1.持续发热超过 24 小时/体温反复超过 39°C/症状好转后又出现发热；</div>
                    <div>2.头痛、耳痛、鼻窦痛痛、严重的喉咙痛；</div>
                    <div>3.喘息、呼吸急促/困难、口唇发紫；</div>
                    <div>4.鼻塞/流涕/咳嗽超过 10 天且没有改善；</div>
                    <div>5.连续用药 3 天没有改善；</div>
                    <div>6.症状持续 7 天没有改善；</div>
                </span>
                </div>
            </div>
        </div>
        <div className="text-2xl text-center m-4">症状</div>
        <div className="overflow-x-auto m-2">
            <table className="table w-full border-collapse border border-slate-500">
                <thead>
                <tr>
                    <th className="border border-slate-600 text-center">🕗 时间</th>
                    <th className="border border-slate-600 text-center">😷 发烧</th>
                    <th className="border border-slate-600 text-center">😷 上呼吸道痛</th>
                    <th className="border border-slate-600 text-center">😷 身体酸痛</th>
                    <th className="border border-slate-600 text-center">😷 精神不振 & 失眠</th>
                    <th className="border border-slate-600 text-center">😷 肠胃不适</th>
                    <th className="border border-slate-600 text-center">😷 流鼻涕</th>
                    <th className="border border-slate-600 text-center">😷 咳嗽</th>
                    <th className="border border-slate-600 text-center">😷 嗅觉丧失 & 味觉丧失</th>
                    <th className="border border-slate-600 text-center">🧪 核酸</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="border border-slate-600 text-center">第 1 天</th>
                    <td className="border border-slate-600 text-center">身体开始微微发热</td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">阴性</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">第 2 天</th>
                    <td className="border border-slate-600 text-center">开始发烧37度多，直至38.5度以上</td>
                    <td className="border border-slate-600 text-center">上呼吸道痛，口渴</td>
                    <td className="border border-slate-600 text-center">高烧导致浑身酸痛</td>
                    <td className="border border-slate-600 text-center">失眠，精神不振</td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center" rowSpan={ 4 }>味觉减退</td>
                    <td className="border border-slate-600 text-center" rowSpan={ 4 }>阳性</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">第 3 天</th>
                    <td className="border border-slate-600 text-center">体温反复，夜间体温降到38度以下</td>
                    <td className="border border-slate-600 text-center">上呼吸道痛</td>
                    <td className="border border-slate-600 text-center">浑身难受</td>
                    <td className="border border-slate-600 text-center">半醒半睡，精神疲惫</td>
                    <td className="border border-slate-600 text-center">肠胃不适，下腹隐隐作痛</td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    {/*<td className="border border-slate-600 text-center">味觉减退</td>*/ }
                    {/*<td className="border border-slate-600 text-center">阳性</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">第 4 天</th>
                    <td className="border border-slate-600 text-center">体温反复，夜间体温降到37度以下</td>
                    <td className="border border-slate-600 text-center">症状消失</td>
                    <td className="border border-slate-600 text-center">开始好转</td>
                    <td className="border border-slate-600 text-center">开始恢复</td>
                    <td className="border border-slate-600 text-center">肠胃不适，下腹微微作痛</td>
                    <td className="border border-slate-600 text-center">开始流鼻涕</td>
                    <td className="border border-slate-600 text-center">干咳，咳嗽时胸腔跟着痛</td>
                    {/*<td className="border border-slate-600 text-center">味觉减退</td>*/ }
                    {/*<td className="border border-slate-600 text-center">阳性</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">第 5 天</th>
                    <td className="border border-slate-600 text-center">体温正常</td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">继续好转</td>
                    <td className="border border-slate-600 text-center">继续恢复</td>
                    <td className="border border-slate-600 text-center">症状消失</td>
                    <td className="border border-slate-600 text-center">症状继续</td>
                    <td className="border border-slate-600 text-center">干咳，声音嘶哑，轻微头痛</td>
                    {/*<td className="border border-slate-600 text-center">味觉减退</td>*/ }
                    {/*<td className="border border-slate-600 text-center">阳性</td>*/ }
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">第 6 天</th>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">症状消失</td>
                    <td className="border border-slate-600 text-center">精神恢复</td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">症状减轻</td>
                    <td className="border border-slate-600 text-center">干咳，声音嘶哑</td>
                    <td className="border border-slate-600 text-center">开始恢复</td>
                    <td className="border border-slate-600 text-center">弱阳</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">第 7 天</th>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">继续减轻</td>
                    <td className="border border-slate-600 text-center">咳嗽好转</td>
                    <td className="border border-slate-600 text-center">味觉恢复</td>
                    <td className="border border-slate-600 text-center">阴性</td>
                </tr>
                <tr>
                    <th className="border border-slate-600 text-center">第 8 天</th>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">轻微流鼻涕</td>
                    <td className="border border-slate-600 text-center">轻微咳嗽</td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">阴性</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="text-2xl text-center m-4">药名</div>
        <div className="overflow-x-auto m-2">
            <table className="table w-full border-collapse border border-slate-500">
                <thead>
                <tr>
                    <th className="border border-slate-600 text-center">💊 药名</th>
                    <th className="border border-slate-600 text-center">🛍 商品名</th>
                    <th className="border border-slate-600 text-center">® 品牌</th>
                    <th className="border border-slate-600 text-center">🔤 英文药名</th>
                    <th className="border border-slate-600 text-center">☁️ 别名</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-slate-600 text-center">扑热息痛</td>
                    <td className="border border-slate-600 text-center">酚麻美敏混悬液</td>
                    <td className="border border-slate-600 text-center">泰诺</td>
                    <td className="border border-slate-600 text-center">Paracetamo</td>
                    <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                </tr>
                <tr>
                    <td className="border border-slate-600 text-center">布洛芬</td>
                    <td className="border border-slate-600 text-center">布洛芬缓释胶囊</td>
                    <td className="border border-slate-600 text-center">芬必得</td>
                    <td className="border border-slate-600 text-center">Ibuprofen</td>
                    <td className="border border-slate-600 text-center">拔怒风</td>
                </tr>
                <tr>
                    <td className="border border-slate-600 text-center">右美沙芬</td>
                    <td className="border border-slate-600 text-center">氢溴酸右美沙芬口服溶液</td>
                    <td className="border border-slate-600 text-center">联邦克立停</td>
                    <td className="border border-slate-600 text-center">Dextromethorphan</td>
                    <td className="border border-slate-600 text-center">右甲吗喃</td>
                </tr>
                <tr>
                    <td className="border border-slate-600 text-center">扑尔敏</td>
                    <td className="border border-slate-600 text-center">马来酸氯苯那敏</td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">Chlorpheniramine</td>
                    <td className="border border-slate-600 text-center">氯苯那敏</td>
                </tr>
                <tr>
                    <td className="border border-slate-600 text-center">苯海拉明</td>
                    <td className="border border-slate-600 text-center">盐酸苯海拉明片</td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">Diphenhydramine</td>
                    <td className="border border-slate-600 text-center"></td>
                </tr>
                <tr>
                    <td className="border border-slate-600 text-center">氯雷他定</td>
                    <td className="border border-slate-600 text-center">氯雷他定片</td>
                    <td className="border border-slate-600 text-center">息斯敏</td>
                    <td className="border border-slate-600 text-center">Loratadine</td>
                    <td className="border border-slate-600 text-center">克敏能</td>
                </tr>
                <tr>
                    <td className="border border-slate-600 text-center">西替利嗪</td>
                    <td className="border border-slate-600 text-center">盐酸西替利嗪</td>
                    <td className="border border-slate-600 text-center">西可韦</td>
                    <td className="border border-slate-600 text-center">Cetirizine</td>
                    <td className="border border-slate-600 text-center"></td>
                </tr>
                <tr>
                    <td className="border border-slate-600 text-center">赛洛唑啉</td>
                    <td className="border border-slate-600 text-center">盐酸赛洛唑啉鼻用喷雾剂</td>
                    <td className="border border-slate-600 text-center">诺通</td>
                    <td className="border border-slate-600 text-center">Xylometazoline</td>
                    <td className="border border-slate-600 text-center"></td>
                </tr>
                <tr>
                    <td className="border border-slate-600 text-center">羟甲唑啉</td>
                    <td className="border border-slate-600 text-center">盐酸羟甲唑啉喷雾剂</td>
                    <td className="border border-slate-600 text-center"></td>
                    <td className="border border-slate-600 text-center">Oxymetazoline</td>
                    <td className="border border-slate-600 text-center"></td>
                </tr>
                <tr>
                    <td className="border border-slate-600 text-center">伪麻黄碱</td>
                    <td className="border border-slate-600 text-center">复方盐酸伪麻黄碱缓释胶囊</td>
                    <td className="border border-slate-600 text-center">新康泰克</td>
                    <td className="border border-slate-600 text-center">Pseudo-ephedrine</td>
                    <td className="border border-slate-600 text-center">伪麻黄素</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="text-2xl text-center m-4">儿童用药</div>
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
                    <td className="border border-slate-600 text-center">扑热息痛</td>
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
                    <td className="border border-slate-600 text-center">扑热息痛</td>
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
                    <td className="border border-slate-600 text-center">扑尔敏</td>
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
        <div className="text-2xl text-center m-4">成人用药</div>
        <div className="overflow-x-auto m-2">
            <table className="table w-full">
                <thead>
                <tr>
                    <th className="border border-slate-600 text-center">😷 症状</th>
                    <th className="border border-slate-600 text-center">💊 常用药物</th>
                    <th className="border border-slate-600 text-center">🧑 普通成人</th>
                    <th className="border border-slate-600 text-center">🤰 孕妇*</th>
                    <th className="border border-slate-600 text-center">👩‍🍼 哺乳期*</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="border border-slate-600 text-center" rowSpan={ 2 }>发烧</th>
                    <td className="border border-slate-600 text-center">扑热息痛</td>
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
                    <td className="border border-slate-600 text-center">扑热息痛</td>
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
                    <td className="border border-slate-600 text-center">扑尔敏</td>
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
        <div className="text-2xl text-center m-4">病患用药</div>
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
                    <td className="border border-slate-600 text-center">扑热息痛</td>
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
                    <td className="border border-slate-600 text-center">扑热息痛</td>
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
                    <td className="border border-slate-600 text-center">扑尔敏</td>
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
                    ♥️ 带口罩，勤洗手，常通风，少聚集
                </p>
            </div>
            <div>
                <p>
                    © <a href="https://github.com/zcyc">Charles</a> & <a href="https://github.com/jerryshell">Jerry</a>
                </p>
            </div>
        </footer>
    </div>)
}

export default App
