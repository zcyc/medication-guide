import './App.css'

function App() {
    return (
        <div className="App">
            <div className="navbar bg-base-100">
                <h1 className="text-l">
                    🦠 新型冠状病毒病症状 & 💊 症状缓解药物
                </h1>
            </div>
            <div className="text-2xl text-center m-4">症状参考</div>
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
            <div className="overflow-x-auto m-2">
                <p>*根据个人体质，症状会有所不同，大部份人一周之内好转。</p>
                <p>*轻症可以居家治疗，对症用药缓解症状。</p>
            </div>
            <div className="text-2xl text-center m-4">药单</div>
            <div className="overflow-x-auto m-2">
                <table className="table w-full table-compact border-separate border-spacing-0 border border-slate-500">
                    <thead>
                    <tr>
                        <th className="border border-slate-600 text-center">🛍 通用名</th>
                        <th className="border border-slate-600 text-center">® 商品名</th>
                        <th className="border border-slate-600 text-center">☁️ 别名</th>
                        <th className="border border-slate-600 text-center">🪞 类型</th>
                        <th className="border border-slate-600 text-center">🔤 英文名称</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-slate-600 text-center">对乙酰氨基酚片</td>
                        <td className="border border-slate-600 text-center">泰诺、散利痛</td>
                        <td className="border border-slate-600 text-center">扑热息痛</td>
                        <th className="border border-slate-600 text-center">非甾体抗炎药</th>
                        <td className="border border-slate-600 text-center">Acetaminophen、Paracetamol</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">复方氨酚烷胺片</td>
                        <td className="border border-slate-600 text-center">快克、感康、仁和可立克</td>
                        <td className="border border-slate-600 text-center">感冒药</td>
                        <th className="border border-slate-600 text-center">非甾体抗炎药</th>
                        <td className="border border-slate-600 text-center">Acetaminophen、Paracetamol</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">布洛芬缓释胶囊</td>
                        <td className="border border-slate-600 text-center">芬必得、美林</td>
                        <td className="border border-slate-600 text-center">拔怒风</td>
                        <th className="border border-slate-600 text-center">非甾体抗炎药</th>
                        <td className="border border-slate-600 text-center">Ibuprofen</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">氢溴酸右美沙芬口服溶液</td>
                        <td className="border border-slate-600 text-center">艾舒、史达功、白云山</td>
                        <td className="border border-slate-600 text-center">右甲吗喃</td>
                        <th className="border border-slate-600 text-center">中枢性镇咳药</th>
                        <td className="border border-slate-600 text-center">Dextromethorphan</td>

                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">马来酸氯苯那敏</td>
                        <td className="border border-slate-600 text-center">维福佳、南国</td>
                        <td className="border border-slate-600 text-center">扑尔敏、氯菲安明、氯菲尼拉明</td>
                        <th className="border border-slate-600 text-center">第一代抗组胺药</th>
                        <td className="border border-slate-600 text-center">Chlorpheniramine</td>

                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">盐酸苯海拉明片</td>
                        <td className="border border-slate-600 text-center">帝益、中南、飞赛乐</td>
                        <td className="border border-slate-600 text-center"></td>
                        <th className="border border-slate-600 text-center">第一代抗组胺药</th>
                        <td className="border border-slate-600 text-center">Diphenhydramine</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">氯雷他定片</td>
                        <td className="border border-slate-600 text-center">开瑞坦、息斯敏</td>
                        <td className="border border-slate-600 text-center">开瑞坦、克敏能、佳力天、乐敏锭</td>
                        <th className="border border-slate-600 text-center">第二代抗组胺药</th>
                        <td className="border border-slate-600 text-center">Loratadine</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">盐酸西替利嗪片</td>
                        <td className="border border-slate-600 text-center">仙特明、西可韦</td>
                        <td className="border border-slate-600 text-center">去敏定、司特宁、仙特明、协帝</td>
                        <th className="border border-slate-600 text-center">第二代抗组胺药</th>
                        <td className="border border-slate-600 text-center">Cetirizine</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">地氯雷他定干混悬剂</td>
                        <td className="border border-slate-600 text-center">芙必叮</td>
                        <td className="border border-slate-600 text-center">先灵葆雅、美时</td>
                        <th className="border border-slate-600 text-center">第三代抗组胺药</th>
                        <td className="border border-slate-600 text-center">Desloratadine</td>

                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">盐酸赛洛唑啉鼻用喷雾剂</td>
                        <td className="border border-slate-600 text-center">诺通、新康泰克</td>
                        <td className="border border-slate-600 text-center"></td>
                        <th className="border border-slate-600 text-center">化学物质</th>
                        <td className="border border-slate-600 text-center">Xylometazoline</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">盐酸羟甲唑啉喷雾剂</td>
                        <td className="border border-slate-600 text-center">达芬霖、仁和、民生</td>
                        <td className="border border-slate-600 text-center"></td>
                        <th className="border border-slate-600 text-center">第二代抗组胺药</th>
                        <td className="border border-slate-600 text-center">Oxymetazoline</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">复方盐酸伪麻黄碱缓释胶囊</td>
                        <td className="border border-slate-600 text-center">新康泰克、白加黑、百服宁</td>
                        <td className="border border-slate-600 text-center">伪麻黄素</td>
                        <th className="border border-slate-600 text-center">拟交感神经药</th>
                        <td className="border border-slate-600 text-center">Pseudo-ephedrine</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto m-2">
                <p>*单独使用抗组胺药对单纯的上呼吸道感染（如：感冒）效果不大。</p>
                <p>*吃药前仔细看说明书，包括：适应症、禁忌症、不良反应、药物冲突、用法用量、注意事项。</p>
                <p>*功能相同、成分相同、作用机制相同的药物不能混服。如：感冒药、退烧药、镇痛药。</p>
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
                        <td className="border border-slate-600 text-center">❌ 不建议用</td>
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
                        <td className="border border-slate-600 text-center" colSpan={3} rowSpan={8}>❌ 不建议用</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        <td className="border border-slate-600 text-center" rowSpan={8}>🥼 慎用，遵医嘱</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={4}>流鼻涕*</th>
                        <td className="border border-slate-600 text-center">氯苯那敏</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">苯海拉明</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">氯雷他定</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">西替利嗪</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={3}>鼻塞*</th>
                        <td className="border border-slate-600 text-center">赛洛唑啉</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">羟甲唑啉</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">伪麻黄碱</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
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
                <p>**儿童的剂量和成人不同，记得看说明书。</p>
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
                        <td className="border border-slate-600 text-center">孕晚期风险高，早/中期遵医嘱</td>
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
                        <td className="border border-slate-600 text-center">孕晚期风险高，早/中期遵医嘱</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">干咳</th>
                        <td className="border border-slate-600 text-center">右美沙芬</td>
                        <td className="border border-slate-600 text-center">仅限剧烈咳嗷影响生活时，不超过7天</td>
                        <td className="border border-slate-600 text-center" rowSpan={3}>🥼 慎用，遵医嘱</td>
                        <td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={4}>流鼻涕*</th>
                        <td className="border border-slate-600 text-center">氯苯那敏</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                        <td className="border border-slate-600 text-center">❌ 不建议用</td>
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">苯海拉明</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                        <td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>
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
                        <td className="border border-slate-600 text-center" rowSpan={3}>❌ 不建议用</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>🥼 慎用，遵医嘱</td>
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">羟甲唑啉</td>
                        {/*<td className="border border-slate-600 text-center">不超过3天</td>*/}
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">伪麻黄碱</td>
                        <td className="border border-slate-600 text-center">✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">❌ 不建议用</td>*/}
                        <td className="border border-slate-600 text-center">❌ 不建议用</td>
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
                <p>**怀孕或哺乳期感冒用药需要权衡利弊，本表仅供参考，建议遵医嘱和药师。</p>
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
                        <td className="border border-slate-600 text-center" rowSpan={12}>🥼 慎用，遵医嘱</td>
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">发烧</th>*/}
                        <td className="border border-slate-600 text-center">布洛芬</td>
                        <td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={2}>喉咙痛</th>
                        <td className="border border-slate-600 text-center">对乙酰氨基酚</td>
                        <td className="border border-slate-600 text-center">✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">喉咙痛</th>*/}
                        <td className="border border-slate-600 text-center">布洛芬</td>
                        <td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center">干咳</th>
                        <td className="border border-slate-600 text-center">右美沙芬</td>
                        <td className="border border-slate-600 text-center" colSpan={2}>仅限剧烈咳嗷影响生活时，不超过7天
                        </td>
                        {/*<td className="border border-slate-600 text-center">仅限剧烈咳嗷影响生活时，不超过7天</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={4}>流鼻涕*</th>
                        <td className="border border-slate-600 text-center">氯苯那敏</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>🥼 慎用，遵医嘱</td>
                        <td className="border border-slate-600 text-center" rowSpan={4}>✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">苯海拉明</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">氯雷他定</td>
                        <td className="border border-slate-600 text-center" rowSpan={2}>✅ 可以使用</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">流鼻涕*</th>*/}
                        <td className="border border-slate-600 text-center">西替利嗪</td>
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">✅ 可以使用</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        <th className="border border-slate-600 text-center" rowSpan={3}>鼻塞*</th>
                        <td className="border border-slate-600 text-center">赛洛唑啉</td>
                        <td className="border border-slate-600 text-center" rowSpan={3} colSpan={2}>🥼 慎用，遵医嘱
                        </td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">羟甲唑啉</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                    </tr>
                    <tr>
                        {/*<th className="border border-slate-600 text-center">鼻塞*</th>*/}
                        <td className="border border-slate-600 text-center">伪麻黄碱</td>
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
                        {/*<td className="border border-slate-600 text-center">🥼 慎用，遵医嘱</td>*/}
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
                <p>**其他基础疾病（如：心脏病、肠胃道疾病、甲状腺疾病、神经系统疾病）阅读说明书或遵医嘱和药师。</p>
            </div>
            <div className="text-2xl text-center m-4">常见问题</div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">1、哪些情况应该去医院？</h3>
                <li>持续发热超过 24 小时/体温反复超过 39°C/症状好转后又出现发热；</li>
                <li>基础病加重不受控制；</li>
                <li>婴幼儿出现嗜睡、拒食、持续腹泻、呕吐；</li>
                <li>孕妇出现头痛、头晕、心慌、憋气或阴道出血、流液、胎动异常；</li>
                <li>头痛、耳痛、鼻窦痛痛、严重的喉咙痛；</li>
                <li>喘息、呼吸急促/困难、口唇发紫；</li>
                <li>鼻塞/流涕/咳嗽超过 10 天且没有改善；</li>
                <li>连续用药 3 天没有改善；</li>
                <li>症状持续 7 天没有改善；</li>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">2、高烧多少度吃退烧药？</h3>
                <p>体温 38.5 以上再吃退烧药，38.5 及以下可以采用温水擦拭、退热贴等物理降温手段。</p>
                <p>儿童不能使用物理降温手段。不管成人还是儿童，不能使用冰水和酒精降温。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">3、药可以混着吃吗？</h3>
                <p>含有同一成分的药不能混着吃，比如泰诺和快克都含有对乙酰氨基酚，不能一起吃。</p>
                <p>不同成分的药一起吃建议问医生和药师。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">4、为什么表中没有中成药？</h3>
                <p>因为精力有限。注意中成药和西药不要一起吃。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">5、BF7 和 BA5 的区别？</h3>
                <p>BA5 更温和。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">6、短时间内会重复感染吗？</h3>
                <p>不管是不是同一种毒株，短时间都不会重复感染。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">7、新冠会加重基础病吗？</h3>
                <p>会，尤其是老年人的基础病。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">8、哪些人群容易感染新冠？</h3>
                <p>目前流行的毒株传染性极强，所有人都容易感染。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">9、哪些人群症状会比较严重？</h3>
                <p>老人和未接种疫苗的人，尤其是未接种疫苗的老人。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">10、临时核酸采集点取消了到哪做核酸？</h3>
                <p>医院的发热门诊和核酸检测窗口。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">11、自测阳性需要上报吗？</h3>
                <p>需要，上报基层医疗卫生机构。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">12、怕去医院传染，怎么买处方药？</h3>
                <p>在医疗机构的互联网诊疗平台可以开处方，然后凭处方到第三方购买处方药。</p>
            </div>
            <div className="overflow-x-auto m-2">
                <h3 className="font-bold">13、多少岁可以打疫苗？</h3>
                <p>3周岁以上。</p>
            </div>
            <div className="text-2xl text-center m-4">说明</div>
            <div className="overflow-x-auto m-2">
                <li>该去医院就去，不要耽误病情。</li>
                <li>多种药混服一定要遵医嘱。</li>
                <li>吃药不能预防新冠。</li>
                <li>不要囤药，够用就行。留给需要的人。</li>
                <li>药有保质期，检查之前买的药是否过期。</li>
                <li>买一支温度计，怀疑发烧就测体温，不要随意吃药。</li>
                <li>买一盒核酸抗原，怀疑感染就自测，去混查容易感染。</li>
                <li>孕妇、哺乳期妇女、有基础病的人群建议咨询医生。</li>
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
