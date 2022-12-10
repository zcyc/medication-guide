import './App.css'

function App() {
    return (
        <div className="App">
            <div className="navbar bg-base-100">
                <h1 className="text-l">
                    🦠 新型冠状病毒病症状 & 💊 症状缓解药物
                </h1>
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
                <table className="table w-full table-compact border-separate border border-slate-500">
                    <thead>
                    <tr>
                        <th className="border border-slate-600 text-center">🕗 时间</th>
                        <th className="border border-slate-600 text-center">😷 发烧</th>
                        <th className="border border-slate-600 text-center">😷 上呼吸道痛</th>
                        <th className="border border-slate-600 text-center">😷 身体酸痛</th>
                        <th className="border border-slate-600 text-center">😷 失眠 & 精神不振</th>
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
                        <td className="border border-slate-600 text-center">身体微微发热</td>
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
                        <td className="border border-slate-600 text-center" rowSpan={4}>味觉减退</td>
                        <td className="border border-slate-600 text-center" rowSpan={4}>阳性</td>
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
                        {/*<td className="border border-slate-600 text-center">味觉减退</td>*/}
                        {/*<td className="border border-slate-600 text-center">阳性</td>*/}
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
                        {/*<td className="border border-slate-600 text-center">味觉减退</td>*/}
                        {/*<td className="border border-slate-600 text-center">阳性</td>*/}
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
                        {/*<td className="border border-slate-600 text-center">味觉减退</td>*/}
                        {/*<td className="border border-slate-600 text-center">阳性</td>*/}
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
                <table className="table w-full table-compact border-separate border-spacing-0 border border-slate-500">
                    <thead>
                    <tr>
                        <th className="border border-slate-600 text-center">💊 名称</th>
                        <th className="border border-slate-600 text-center">🪞 类型</th>
                        <th className="border border-slate-600 text-center">🛍 商品名</th>
                        <th className="border border-slate-600 text-center">® 品牌</th>
                        <th className="border border-slate-600 text-center">🔤 英文药名</th>
                        <th className="border border-slate-600 text-center">☁️ 别名</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th className="border border-slate-600 text-center">对乙酰氨基酚</th>
                        <th className="border border-slate-600 text-center">化学物质</th>
                        <td className="border border-slate-600 text-center">酚麻美敏混悬液</td>
                        <td className="border border-slate-600 text-center">泰诺、快克、散利痛、感康、仁和可立克</td>
                        <td className="border border-slate-600 text-center">Acetaminophen、Paracetamol</td>
                        <td className="border border-slate-600 text-center">扑热息痛</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">布洛芬</th>
                        <th className="border border-slate-600 text-center">非甾体抗炎药</th>
                        <td className="border border-slate-600 text-center">布洛芬缓释胶囊</td>
                        <td className="border border-slate-600 text-center">芬必得、美林</td>
                        <td className="border border-slate-600 text-center">Ibuprofen</td>
                        <td className="border border-slate-600 text-center">拔怒风</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">右美沙芬</th>
                        <th className="border border-slate-600 text-center">中枢性镇咳药</th>
                        <td className="border border-slate-600 text-center">氢溴酸右美沙芬口服溶液</td>
                        <td className="border border-slate-600 text-center">艾舒、史达功、白云山</td>
                        <td className="border border-slate-600 text-center">Dextromethorphan</td>
                        <td className="border border-slate-600 text-center">右甲吗喃</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">氯苯那敏</th>
                        <th className="border border-slate-600 text-center">第一代抗组胺药</th>
                        <td className="border border-slate-600 text-center">马来酸氯苯那敏</td>
                        <td className="border border-slate-600 text-center">维福佳、南国</td>
                        <td className="border border-slate-600 text-center">Chlorpheniramine</td>
                        <td className="border border-slate-600 text-center">扑尔敏、氯菲安明、氯菲尼拉明</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">苯海拉明</th>
                        <th className="border border-slate-600 text-center">第一代抗组胺药</th>
                        <td className="border border-slate-600 text-center">盐酸苯海拉明片</td>
                        <td className="border border-slate-600 text-center">帝益、中南、飞赛乐</td>
                        <td className="border border-slate-600 text-center">Diphenhydramine</td>
                        <td className="border border-slate-600 text-center"></td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">氯雷他定</th>
                        <th className="border border-slate-600 text-center">第二代抗组胺药</th>
                        <td className="border border-slate-600 text-center">氯雷他定片</td>
                        <td className="border border-slate-600 text-center">开瑞坦、息斯敏</td>
                        <td className="border border-slate-600 text-center">Loratadine</td>
                        <td className="border border-slate-600 text-center">开瑞坦、克敏能、佳力天、乐敏锭</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">西替利嗪</th>
                        <th className="border border-slate-600 text-center">第二代抗组胺药</th>
                        <td className="border border-slate-600 text-center">盐酸西替利嗪</td>
                        <td className="border border-slate-600 text-center">仙特明、西可韦</td>
                        <td className="border border-slate-600 text-center">Cetirizine</td>
                        <td className="border border-slate-600 text-center">去敏定、司特宁、仙特明、协帝</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">地氯雷他定</th>
                        <th className="border border-slate-600 text-center">第三代抗组胺药</th>
                        <td className="border border-slate-600 text-center">地氯雷他定干混悬剂</td>
                        <td className="border border-slate-600 text-center">芙必叮</td>
                        <td className="border border-slate-600 text-center">Desloratadine</td>
                        <td className="border border-slate-600 text-center">先灵葆雅、美时</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">赛洛唑啉</th>
                        <th className="border border-slate-600 text-center">化学物质</th>
                        <td className="border border-slate-600 text-center">盐酸赛洛唑啉鼻用喷雾剂</td>
                        <td className="border border-slate-600 text-center">诺通、新康泰克</td>
                        <td className="border border-slate-600 text-center">Xylometazoline</td>
                        <td className="border border-slate-600 text-center"></td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">羟甲唑啉</th>
                        <th className="border border-slate-600 text-center">第二代抗组胺药</th>
                        <td className="border border-slate-600 text-center">盐酸羟甲唑啉喷雾剂</td>
                        <td className="border border-slate-600 text-center">达芬霖、仁和、民生</td>
                        <td className="border border-slate-600 text-center">Oxymetazoline</td>
                        <td className="border border-slate-600 text-center"></td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">伪麻黄碱</th>
                        <th className="border border-slate-600 text-center">拟交感神经药</th>
                        <td className="border border-slate-600 text-center">复方盐酸伪麻黄碱缓释胶囊</td>
                        <td className="border border-slate-600 text-center">新康泰克、白加黑、百服宁</td>
                        <td className="border border-slate-600 text-center">Pseudo-ephedrine</td>
                        <td className="border border-slate-600 text-center">伪麻黄素</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-2xl text-center m-4">儿童用药</div>
            <div className="overflow-x-auto m-2">
                <table className="table w-full table-compact border-separate border-spacing-0 border border-slate-500">
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
                        <th className="border border-slate-600 text-center" rowSpan={2}>发烧</th>
                        <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>🏥 及时就医</td>
                        <td className="border border-slate-600 text-center">✅ 可以使用</td>
                        <td className="border border-slate-600 text-center" rowSpan={4} colSpan={2}>✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">发烧</th>*/}
                        <td className="border border-slate-600 text-center">布洛芬</td>
                        {/*<td className="border border-slate-600 text-center">🏥 及时就医</td>*/}
                        <td className="border border-slate-600 text-center">❌ 不推荐</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={2}>喉咙痛</th>
                        <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}
                            colSpan={2}>孩子可能还不会表达喉咙痛
                        </td>
                        {/*<td className="border border-slate-600 text-center">孩子可能还不会表达喉咙痛</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">喉咙痛</th>*/}
                        <td className="border border-slate-600 text-center">布洛芬</td>
                        {/*<td className="border border-slate-600 text-center">孩子可能还不会表达喉咙痛</td>*/}
                        {/*<td className="border border-slate-600 text-center">孩子可能还不会表达喉咙痛</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">干咳</th>
                        <td className="border border-slate-600 text-center">右美沙芬</td>
                        <td className="border border-slate-600 text-center" colSpan={3} rowSpan={8}>❌ 不推荐</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        <td className="border border-slate-600 text-center" rowSpan={8}>🥼 慎用，须咨询医生</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={4}>流鼻涕*</th>
                        <td className="border border-slate-600 text-center">氯苯那敏</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">苯海拉明</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">氯雷他定</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">西替利嗪</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={3}>鼻塞*</th>
                        <td className="border border-slate-600 text-center">赛洛唑啉</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">羟甲唑啉</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">伪麻黄碱</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">咳痰</th>
                        <td className="border border-slate-600 text-center"
                            colSpan={5}>呼吸道感染导致的咳痰症状，通常不建议使用药物祛痰。但如有大量脓痰，
                            堵塞较严重，咳痰超过2周症状未改善或有其他异常，建议前往医院就诊。
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto m-2">
                <p>*鼻塞流鼻涕建议：低龄儿童使用生理盐水鼻喷剂/生理盐水滴鼻剂/吸鼻器；能配合的儿童使用洗鼻壶和洗鼻盐。</p>
            </div>
            <div className="text-2xl text-center m-4">成人用药</div>
            <div className="overflow-x-auto m-2">
                <table className="table w-full table-compact border-separate border-spacing-0 border border-slate-500">
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
                        <th className="border border-slate-600 text-center" rowSpan={2}>发烧</th>
                        <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                        <td className="border border-slate-600 text-center" rowSpan={4}>✅ 可以使用</td>
                        <td className="border border-slate-600 text-center">✅ 可以使用</td>
                        <td className="border border-slate-600 text-center" rowSpan={4}>✅ 可以使用</td>
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">发烧</th>*/}
                        <td className="border border-slate-600 text-center">布洛芬</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        <td className="border border-slate-600 text-center">孕晚期风险高，早/中期咨询医生</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={2}>喉咙痛</th>
                        <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        <td className="border border-slate-600 text-center">✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">喉咙痛</th>*/}
                        <td className="border border-slate-600 text-center">布洛芬</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        <td className="border border-slate-600 text-center">孕晚期风险高，早/中期咨询医生</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">干咳</th>
                        <td className="border border-slate-600 text-center">右美沙芬</td>
                        <td className="border border-slate-600 text-center">仅限剧烈咳嗷影响生活时，不超过7天</td>
                        <td className="border border-slate-600 text-center" rowSpan={3}>🥼 慎用，须咨询医生</td>
                        <td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={4}>流鼻涕*</th>
                        <td className="border border-slate-600 text-center">氯苯那敏</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                        <td className="border border-slate-600 text-center">❌ 不推荐</td>
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">苯海拉明</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                        <td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">氯雷他定</td>
                        <td className="border border-slate-600 text-center" rowSpan={2} colSpan={3}>✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">西替利嗪</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={3}>鼻塞*</th>
                        <td className="border border-slate-600 text-center">赛洛唑啉</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>不超过3天</td>
                        <td className="border border-slate-600 text-center" rowSpan={3}>❌ 不推荐</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>🥼 慎用，须咨询医生</td>
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">羟甲唑啉</td>
                        {/*<td className="border border-slate-600 text-center">不超过3天</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">伪麻黄碱</td>
                        <td className="border border-slate-600 text-center">✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不推荐</td>*/}
                        <td className="border border-slate-600 text-center">❌ 不推荐</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">咳痰</th>
                        <td className="border border-slate-600 text-center"
                            colSpan={5}>呼吸道感染导致的咳痰症状，通常不建议使用药物祛痰。但如有大量脓痰，
                            堵塞较严重，咳痰超过2周症状未改善或有其他异常，建议前往医院就诊。
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto m-2">
                <p>*鼻塞流鼻涕建议先使用洗鼻壶和洗鼻盐。</p>
                <p>**怀孕或哺乳期感冒用药需要权衡利弊，本表仅供参考，建议咨询医生和药师。</p>
            </div>
            <div className="text-2xl text-center m-4">病患用药</div>
            <div className="overflow-x-auto m-2">
                <table className="table w-full table-compact border-separate border-spacing-0 border border-slate-500">
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
                        <th className="border border-slate-600 text-center" rowSpan={2}>发烧</th>
                        <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                        <td className="border border-slate-600 text-center">✅ 可以使用</td>
                        <td className="border border-slate-600 text-center" rowSpan={4}>✅ 可以使用</td>
                        <td className="border border-slate-600 text-center" rowSpan={12}>🥼 慎用，须咨询医生</td>
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">发烧</th>*/}
                        <td className="border border-slate-600 text-center">布洛芬</td>
                        <td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={2}>喉咙痛</th>
                        <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                        <td className="border border-slate-600 text-center">✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">喉咙痛</th>*/}
                        <td className="border border-slate-600 text-center">布洛芬</td>
                        <td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">干咳</th>
                        <td className="border border-slate-600 text-center">右美沙芬</td>
                        <td className="border border-slate-600 text-center" colSpan={2}>仅限剧烈咳嗷影响生活时，不超过7天
                        </td>
                        {/*<td className="border border-slate-600 text-center">仅限剧烈咳嗷影响生活时，不超过7天</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={4}>流鼻涕*</th>
                        <td className="border border-slate-600 text-center">氯苯那敏</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>🥼 慎用，须咨询医生</td>
                        <td className="border border-slate-600 text-center" rowSpan={4}>✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">苯海拉明</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">氯雷他定</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">西替利嗪</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={3}>鼻塞*</th>
                        <td className="border border-slate-600 text-center">赛洛唑啉</td>
                        <td className="border border-slate-600 text-center" rowSpan={3} colSpan={2}>🥼 慎用，须咨询医生
                        </td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">羟甲唑啉</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">伪麻黄碱</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，须咨询医生</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">咳痰</th>
                        <td className="border border-slate-600 text-center"
                            colSpan={5}>呼吸道感染导致的咳痰症状，通常不建议使用药物祛痰。但如有大量脓痰，
                            堵塞较严重，咳痰超过2周症状未改善或有其他异常，建议前往医院就诊。
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto m-2">
                <p>*鼻塞流鼻涕建议使用洗鼻壶和洗鼻盐。</p>
                <p>**其他基础疾病（如：心脏病、肠胃道疾病、甲状腺疾病、神经系统疾病）阅读说明书或咨询医生和药师。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <p>说明：</p>
                <p>1.该去医院去医院，该问医生问医生。</p>
                <p>2.多种药一起吃一定要问医生。</p>
                <p>3.奥密克戎毒性小，可自愈。吃药是为了缓解症状。</p>
                <p>4.不要囤药，够用就行。留给需要的人。</p>
                <p>5.药有保质期，检查之前买的药是否过期。</p>
                <p>6.买个温度计，怀疑发烧就测体温，不要随意吃药。</p>
                <p>7.吃药前看说明书，重点看注意事项和用药禁忌。</p>
                <p>8.单独使用抗组胺药（如：苯海拉明、西替利嗪）对单纯的上呼吸道感染（如：感冒、咽炎、扁桃体炎）效果不大。</p>
            </div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    带口罩，勤洗手，常通风，少聚集
                </div>
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover" href="https://github.com/zcyc/COVID-19-medication-guidelines"
                       target="_blank">😁 查看源码</a>
                    <a className="link link-hover" href="https://github.com/zcyc/COVID-19-medication-guidelines/issues"
                       target="_blank">🤔 反馈错误</a>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by <a href="https://github.com/zcyc">Charles</a> & <a
                        href="https://github.com/jerryshell">Jerry</a></p>
                </div>
            </footer>
        </div>
    )
}

export default App
