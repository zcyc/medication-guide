import './App.css'

function App() {
    return (
        <div className="App">
            <div className="navbar bg-base-100">
                <h1 className="text-l">
                    💊 家庭用药指南
                </h1>
            </div>
            <div className="text-2xl text-center m-4">药物</div>
            <div className="overflow-x-auto m-2">
                <table className="table w-full table-compact border-separate border-spacing-0 border border-slate-500">
                    <thead>
                    <tr>
                        <th className="border border-slate-600 text-center">通用名称</th>
                        <th className="border border-slate-600 text-center">商品名称</th>
                        <th className="border border-slate-600 text-center">类型</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-slate-600 text-center">对乙酰氨基酚片</td>
                        <td className="border border-slate-600 text-center">泰诺、散利痛、扑热息痛</td>
                        <th className="border border-slate-600 text-center">非甾体抗炎药</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">复方氨酚烷胺片</td>
                        <td className="border border-slate-600 text-center">快克、感康、仁和可立克</td>
                        <th className="border border-slate-600 text-center">非甾体抗炎药</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">布洛芬胶囊</td>
                        <td className="border border-slate-600 text-center">芬必得、美林</td>
                        <th className="border border-slate-600 text-center">非甾体抗炎药</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">氢溴酸右美沙芬口服溶液</td>
                        <td className="border border-slate-600 text-center">艾舒、史达功</td>
                        <th className="border border-slate-600 text-center">中枢性镇咳药</th>

                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">马来酸氯苯那敏片</td>
                        <td className="border border-slate-600 text-center">扑尔敏</td>
                        <th className="border border-slate-600 text-center">第一代抗组胺药</th>

                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">盐酸苯海拉明片</td>
                        <td className="border border-slate-600 text-center">飞赛乐</td>
                        <th className="border border-slate-600 text-center">第一代抗组胺药</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">氯雷他定片</td>
                        <td className="border border-slate-600 text-center">开瑞坦、息斯敏、佳力天</td>
                        <th className="border border-slate-600 text-center">第二代抗组胺药</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">盐酸西替利嗪片</td>
                        <td className="border border-slate-600 text-center">仙特明、西可韦</td>
                        <th className="border border-slate-600 text-center">第二代抗组胺药</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">地氯雷他定片</td>
                        <td className="border border-slate-600 text-center">芙必叮</td>
                        <th className="border border-slate-600 text-center">第三代抗组胺药</th>

                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">盐酸赛洛唑啉喷雾剂</td>
                        <td className="border border-slate-600 text-center">诺通</td>
                        <th className="border border-slate-600 text-center">血管收缩剂</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">盐酸羟甲唑啉喷雾剂</td>
                        <td className="border border-slate-600 text-center">达芬霖</td>
                        <th className="border border-slate-600 text-center">第二代抗组胺药</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-600 text-center">复方盐酸伪麻黄碱胶囊</td>
                        <td className="border border-slate-600 text-center">新康泰克、白加黑、百服宁</td>
                        <th className="border border-slate-600 text-center">拟交感神经药</th>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto m-2">
                <p>*单独使用抗组胺药对单纯的上呼吸道感染（感冒）效果不大。</p>
                <p>*吃药前仔细看说明书，包括：适应症、禁忌症、不良反应、药物冲突、用法用量、注意事项。</p>
                <p>*功能相同、成分相同、作用机制相同的药物不能混服。如：泰诺、布洛芬。</p>
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
                <p>*部分药物有更适合儿童的剂型如：布洛芬混悬液。</p>
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
                    <p>Copyright © 2025 - All right reserved by <a href="https://github.com/zcyc">Charles</a> & <a
                        href="https://github.com/jerryshell">Jerry</a></p>
                </div>
            </footer>
        </div>
    )
}

export default App
