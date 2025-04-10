// 页面元素
const productButtons = document.querySelectorAll('.product-btn');
const divinationBtn = document.getElementById('divination-btn');
const resultSection = document.getElementById('result-section');
const baguaImg = document.querySelector('.bagua-img');
const hexagramName = document.getElementById('hexagram-name');
const hexagramNumber = document.getElementById('hexagram-number');
const hexagramSymbol = document.getElementById('hexagram-symbol');
const marketTrend = document.getElementById('market-trend');
const pricePrediction = document.getElementById('price-prediction');
const supplyDemand = document.getElementById('supply-demand');
const recommendationsElement = document.getElementById('recommendations');

// 全局变量
let selectedElement = null;

// 六十四卦数据
const hexagrams = [
    { number: 1, name: "乾卦", description: "乾为天", nature: "阳" },
    { number: 2, name: "坤卦", description: "坤为地", nature: "阴" },
    { number: 3, name: "屯卦", description: "水雷屯", nature: "阳" },
    { number: 4, name: "蒙卦", description: "山水蒙", nature: "阴" },
    { number: 5, name: "需卦", description: "水天需", nature: "阳" },
    { number: 6, name: "讼卦", description: "天水讼", nature: "阴" },
    { number: 7, name: "师卦", description: "地水师", nature: "阳" },
    { number: 8, name: "比卦", description: "水地比", nature: "阴" },
    { number: 9, name: "小畜卦", description: "风天小畜", nature: "阳" },
    { number: 10, name: "履卦", description: "天泽履", nature: "阴" },
    { number: 11, name: "泰卦", description: "地天泰", nature: "阳" },
    { number: 12, name: "否卦", description: "天地否", nature: "阴" },
    { number: 13, name: "同人卦", description: "天火同人", nature: "阳" },
    { number: 14, name: "大有卦", description: "火天大有", nature: "阴" },
    { number: 15, name: "谦卦", description: "地山谦", nature: "阳" },
    { number: 16, name: "豫卦", description: "雷地豫", nature: "阴" },
    { number: 17, name: "随卦", description: "泽雷随", nature: "阳" },
    { number: 18, name: "蛊卦", description: "山风蛊", nature: "阴" },
    { number: 19, name: "临卦", description: "地泽临", nature: "阳" },
    { number: 20, name: "观卦", description: "风地观", nature: "阴" },
    { number: 21, name: "噬嗑卦", description: "火雷噬嗑", nature: "阳" },
    { number: 22, name: "贲卦", description: "山火贲", nature: "阴" },
    { number: 23, name: "剥卦", description: "山地剥", nature: "阳" },
    { number: 24, name: "复卦", description: "地雷复", nature: "阴" },
    { number: 25, name: "无妄卦", description: "天雷无妄", nature: "阳" },
    { number: 26, name: "大畜卦", description: "山天大畜", nature: "阴" },
    { number: 27, name: "颐卦", description: "山雷颐", nature: "阳" },
    { number: 28, name: "大过卦", description: "泽风大过", nature: "阴" },
    { number: 29, name: "坎卦", description: "坎为水", nature: "阳" },
    { number: 30, name: "离卦", description: "离为火", nature: "阴" },
    { number: 31, name: "咸卦", description: "泽山咸", nature: "阳" },
    { number: 32, name: "恒卦", description: "雷风恒", nature: "阴" },
    { number: 33, name: "遁卦", description: "天山遁", nature: "阳" },
    { number: 34, name: "大壮卦", description: "雷天大壮", nature: "阴" },
    { number: 35, name: "晋卦", description: "火地晋", nature: "阳" },
    { number: 36, name: "明夷卦", description: "地火明夷", nature: "阴" },
    { number: 37, name: "家人卦", description: "风火家人", nature: "阳" },
    { number: 38, name: "睽卦", description: "火泽睽", nature: "阴" },
    { number: 39, name: "蹇卦", description: "水山蹇", nature: "阳" },
    { number: 40, name: "解卦", description: "雷水解", nature: "阴" },
    { number: 41, name: "损卦", description: "山泽损", nature: "阳" },
    { number: 42, name: "益卦", description: "风雷益", nature: "阴" },
    { number: 43, name: "夬卦", description: "泽天夬", nature: "阳" },
    { number: 44, name: "姤卦", description: "天风姤", nature: "阴" },
    { number: 45, name: "萃卦", description: "泽地萃", nature: "阳" },
    { number: 46, name: "升卦", description: "地风升", nature: "阴" },
    { number: 47, name: "困卦", description: "泽水困", nature: "阳" },
    { number: 48, name: "井卦", description: "水风井", nature: "阴" },
    { number: 49, name: "革卦", description: "泽火革", nature: "阳" },
    { number: 50, name: "鼎卦", description: "火风鼎", nature: "阴" },
    { number: 51, name: "震卦", description: "震为雷", nature: "阳" },
    { number: 52, name: "艮卦", description: "艮为山", nature: "阴" },
    { number: 53, name: "渐卦", description: "风山渐", nature: "阳" },
    { number: 54, name: "归妹卦", description: "雷泽归妹", nature: "阴" },
    { number: 55, name: "丰卦", description: "雷火丰", nature: "阳" },
    { number: 56, name: "旅卦", description: "火山旅", nature: "阴" },
    { number: 57, name: "巽卦", description: "巽为风", nature: "阳" },
    { number: 58, name: "兑卦", description: "兑为泽", nature: "阴" },
    { number: 59, name: "涣卦", description: "风水涣", nature: "阳" },
    { number: 60, name: "节卦", description: "水泽节", nature: "阴" },
    { number: 61, name: "中孚卦", description: "风泽中孚", nature: "阳" },
    { number: 62, name: "小过卦", description: "雷山小过", nature: "阴" },
    { number: 63, name: "既济卦", description: "水火既济", nature: "阳" },
    { number: 64, name: "未济卦", description: "火水未济", nature: "阴" }
];

// 五行相生相克关系
const wuxingRelations = {
    "金": { generates: "水", restrains: "木" },
    "木": { generates: "火", restrains: "土" },
    "水": { generates: "木", restrains: "火" },
    "火": { generates: "土", restrains: "金" },
    "土": { generates: "金", restrains: "水" }
};

// 农产品市场预测数据库
const marketPredictions = {
    rising: [
        "天行有常，市场似有向上之象，贵人相助，有望迎来新机",
        "卦象显示，需求星辰渐明，有望迎来贵客临门",
        "阳气上升，市场之力蓄势待发，恐有变数",
        "上卦临门，渠道或将开阔，东南方向有贵人",
        "春夏之交，市场蕴含生机，然需谨防小人暗藏"
    ],
    stable: [
        "天地交泰，市场趋于平稳，吉凶相抵，宜守不宜进",
        "坤象显现，安稳为宜，急进恐有损失",
        "中正之道，不偏不倚，静待时机，方显商机",
        "平稳之象，莫贪莫急，顺其自然，自有收获",
        "太极相持，无过无不及，中庸之道是上策"
    ],
    falling: [
        "阴云渐起，市场恐有波折，宜避锋芒，待机而动",
        "下卦现象，行事当谨慎，恐有暗礁潜伏",
        "秋意渐浓，市场或趋保守，防备为上",
        "西北方向有阻，销路受限，需另辟蹊径",
        "寒气袭来，变数增多，藏器待时，以静制动"
    ]
};

const pricePredictions = {
    rising: [
        "金木交辉，价位或有上行之势，然不可过分执着",
        "火旺之象，价格隐现上升之机，需顺势而为",
        "阳气渐长，市场因素暗藏变数，价格或有波动",
        "天时地利，价格或呈上升之势，切勿贪多",
        "春雷乍动，成本渐增，价格或有所应",
    ],
    stable: [
        "五行调和，价格似有稳定之象，可安心经营",
        "平衡之势，价格起伏不大，宜持守平常心",
        "中和之气，市场定价平稳，宜静观其变",
        "无极之象，价格波澜不惊，可从容应对",
        "阴阳相济，小幅波动在所难免，总体平和"
    ],
    falling: [
        "金气渐弱，价格恐承压下行，需谨慎应对",
        "水势过盛，供应可能充足，价格或受影响",
        "市场竞争如火如荼，价格恐有所应",
        "需求之火渐弱，价格或有所反映",
        "秋收之时，价格或随季节变化而调整"
    ]
};

const supplyDemandPredictions = {
    excess: [
        "水满则溢，库存积累，或需寻觅新的销路",
        "物阜民丰，产出丰沛，需找寻平衡之道",
        "仓廪实而知礼节，供应充足，藏之有道",
        "五谷丰登，市场供应充裕，需注意储存之法",
        "天降甘霖，货源不绝，或可择机而动"
    ],
    balanced: [
        "阴阳相济，供需之势大体平衡，宜顺其自然",
        "和合之象，生产与消费相得益彰",
        "中庸之道，库存处于合理水位，无忧无虑",
        "天人合一，供应链运行平稳，可安心经营",
        "循环往复，生产与市场趋于和谐"
    ],
    shortage: [
        "水少难载舟，供应或有紧张，需未雨绸缪",
        "需求之火旺盛，或有供不应求之势",
        "山重水复，生产或受限制，需另觅良方",
        "库存若隐若现，供应链压力渐增",
        "时节变化无常，供应或有波折，需提前准备"
    ]
};

const recommendationsData = {
    favorable: {
        "金": [
            "谷物类产品或迎贵人，宜适时出手，勿过分贪婪",
            "开拓之象已现，或可寻觅新的销路，东南方向大吉",
            "天时地利人和，宜与人合作，共谋大业",
            "有积聚之象，宜适量增加库存，为未来预留空间",
            "金生水，宜与金融机构联系，或有意外之喜"
        ],
        "木": [
            "果蔬之象渐明，宜选吉日出售，春夏之交尤为有利",
            "电商之路大开，宜借助科技之力扩展销路",
            "创新之道大吉，宜开发新品种，前路光明",
            "品牌之象已现，宜注重形象建设，利于长远",
            "物流之道大顺，宜寻找稳定合作伙伴，共赢共利"
        ],
        "水": [
            "水产之象大显，宜在适当时机出手，切忌犹豫不决",
            "冷链之道大顺，宜注重保鲜技术，确保品质",
            "加工之路大开，宜延长产业链，增加附加值",
            "客户之象已现，宜建立稳定关系，长期受益",
            "差异化之道大吉，宜寻找自身特色，避开红海"
        ],
        "火": [
            "畜牧之象大显，宜在合适时机出手，切忌优柔寡断",
            "品质之道大顺，宜注重认证与检测，赢得信任",
            "直销之路大开，宜缩短销售链条，增加利润",
            "线上之象已现，宜拓展网络销售，开辟新路",
            "餐饮合作之道大吉，宜寻找稳定伙伴，共创双赢"
        ],
        "土": [
            "根茎之象大显，宜在吉日出售，切忌急功近利",
            "仓储之道大顺，宜注重保鲜设施，确保品质",
            "特色产品之路大开，宜开发独特品种，避开竞争",
            "供应链之象已现，宜建立稳定关系，长期受益",
            "乡村旅游之道大吉，宜结合观光农业，开辟新路"
        ]
    },
    unfavorable: {
        "金": [
            "谷物采购之象不佳，宜谨慎行事，待机而动",
            "扩张之路多阻，宜静待时机，切勿盲目前行",
            "长期合约之象不明，宜短期操作，避免长期束缚",
            "库存压力渐增，宜适当减少，防止资金压力",
            "高价销售恐有阻滞，宜平价为主，稳定为上"
        ],
        "木": [
            "果蔬储存之象不佳，宜适时出售，避免损耗",
            "新品种投资需谨慎，宜小规模试验，避免风险",
            "种植扩张之路多阻，宜守成为主，等待时机",
            "长途运输之象不明，宜就近销售，确保新鲜",
            "追求产量或有隐忧，宜质量为本，稳步发展"
        ],
        "水": [
            "水产养殖之象不佳，宜小规模为主，谨慎投入",
            "大规模投资需谨慎，宜分散风险，避免集中",
            "新市场开拓之路多阻，宜稳固现有渠道，循序渐进",
            "加工环节宜简化，寻求效率，节约成本",
            "价格竞争或有暗礁，宜避开锋芒，寻找差异"
        ],
        "火": [
            "畜牧扩张之象不佳，宜稳健发展，避免冒进",
            "饲料采购需谨慎，宜寻找性价比，避免高价",
            "库存增加或有风险，宜适时出售，保持灵活",
            "销售中间环节宜减少，直接对接，增加效率",
            "宣传推广需谨慎，宜实事求是，避免过度承诺"
        ],
        "土": [
            "根茎种植之象不佳，宜控制规模，等待时机",
            "长期储存或有风险，宜及时销售，保证周转",
            "加工设备投资需谨慎，宜租赁为主，避免沉没成本",
            "销售半径宜缩小，就近供应，降低成本",
            "价格维持需谨慎，宜随行就市，保持灵活"
        ]
    }
};

// 事件监听
// 农产品类别选择
productButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除之前的选择
        productButtons.forEach(btn => btn.classList.remove('active'));
        // 添加当前选择
        button.classList.add('active');
        // 保存选择的五行属性
        selectedElement = button.getAttribute('data-element');
    });
});

// 开始占卜
divinationBtn.addEventListener('click', () => {
    try {
        console.log("开始占卜被点击");
        if (!selectedElement) {
            alert('请先选择农产品类别');
            return;
        }

        // 输出调试信息
        console.log("选择的五行属性:", selectedElement);
        console.log("八卦图元素:", baguaImg);

        // 旋转八卦图
        baguaImg.classList.add('spinning');
        console.log("添加spinning类");

        // 3秒后显示结果
        setTimeout(() => {
            try {
                console.log("旋转结束");
                baguaImg.classList.remove('spinning');
                performDivination();
            } catch (error) {
                console.error("显示结果时发生错误:", error);
                alert("显示结果时发生错误，请查看控制台");
            }
        }, 3000);
    } catch (error) {
        console.error("点击事件处理发生错误:", error);
        alert("发生错误，请查看控制台");
    }
});

// 执行占卜预测
function performDivination() {
    // 传统周易卜卦方式：生成六个爻位
    const lines = [];
    const changingLines = []; // 记录动爻位置

    // 摇卦六次，每次决定一爻
    for (let i = 0; i < 6; i++) {
        // 传统上用三枚铜钱模拟，每次可能出现6、7、8、9四种数字
        // 6(老阴-○): 三枚铜钱都是背面
        // 7(少阳-—): 两枚正面一枚背面
        // 8(少阴-⚋): 两枚背面一枚正面
        // 9(老阳-●): 三枚铜钱都是正面
        const coinResult = simulateThreeCoins();

        // 根据结果确定爻的性质（阴爻还是阳爻，是否是动爻）
        switch (coinResult) {
            case 6: // 老阴，阴爻且是动爻，变为阳
                lines.push("0");
                changingLines.push(i);
                break;
            case 7: // 少阳，阳爻不变
                lines.push("1");
                break;
            case 8: // 少阴，阴爻不变
                lines.push("0");
                break;
            case 9: // 老阳，阳爻且是动爻，变为阴
                lines.push("1");
                changingLines.push(i);
                break;
        }
    }

    // 由下往上组合六爻，得出本卦
    const binaryString = lines.join('');
    const hexagramIndex = parseInt(binaryString, 2);
    const originalHexagram = hexagrams[hexagramIndex] || hexagrams[0];

    // 生成互卦（取本卦的二、三、四爻作为互卦的下三爻，取三、四、五爻作为互卦的上三爻）
    const overlappingHexagram = generateOverlappingHexagram(lines);

    // 如果有动爻，生成变卦
    let changedHexagram = null;
    if (changingLines.length > 0) {
        const changedLines = [...lines];
        changingLines.forEach(position => {
            // 动爻阴变阳，阳变阴
            changedLines[position] = changedLines[position] === "0" ? "1" : "0";
        });
        const changedBinaryString = changedLines.join('');
        const changedHexagramIndex = parseInt(changedBinaryString, 2);
        changedHexagram = hexagrams[changedHexagramIndex] || hexagrams[0];
    }

    // 显示卦象信息（本卦、互卦、变卦）
    let hexagramTitle = originalHexagram.name;
    let hexagramDesc = `第${originalHexagram.number}卦 ${originalHexagram.description}`;

    if (overlappingHexagram) {
        hexagramTitle += ` 互 ${overlappingHexagram.name}`;
        hexagramDesc += ` 互 ${overlappingHexagram.description}`;
    }

    if (changedHexagram) {
        hexagramTitle += ` 变 ${changedHexagram.name}`;
        hexagramDesc += ` 之 ${changedHexagram.description}`;
    }

    hexagramName.textContent = hexagramTitle;
    hexagramNumber.textContent = hexagramDesc;

    // 在页面上生成三个卦象图形（本卦、互卦、变卦）
    // 首先清空现有图形
    hexagramSymbol.innerHTML = '';

    // 创建本卦显示区域
    const originalHexDiv = document.createElement('div');
    originalHexDiv.className = 'hexagram-block';
    const originalTitle = document.createElement('div');
    originalTitle.className = 'hexagram-block-title';
    originalTitle.textContent = '本卦';
    originalHexDiv.appendChild(originalTitle);
    hexagramSymbol.appendChild(originalHexDiv);

    // 生成本卦图形
    generateHexagramLines(lines, changingLines, originalHexDiv);

    // 创建互卦显示区域（如果有）
    if (overlappingHexagram) {
        const overlapHexDiv = document.createElement('div');
        overlapHexDiv.className = 'hexagram-block';
        const overlapTitle = document.createElement('div');
        overlapTitle.className = 'hexagram-block-title';
        overlapTitle.textContent = '互卦';
        overlapHexDiv.appendChild(overlapTitle);
        hexagramSymbol.appendChild(overlapHexDiv);

        // 解析互卦的六爻
        const overlapLines = parseInt(overlappingHexagram.number - 1).toString(2).padStart(6, '0').split('').map(bit => bit === '1' ? "1" : "0");

        // 生成互卦图形
        generateHexagramLines(overlapLines, [], overlapHexDiv);
    }

    // 创建变卦显示区域（如果有）
    if (changedHexagram) {
        const changedHexDiv = document.createElement('div');
        changedHexDiv.className = 'hexagram-block';
        const changedTitle = document.createElement('div');
        changedTitle.className = 'hexagram-block-title';
        changedTitle.textContent = '变卦';
        changedHexDiv.appendChild(changedTitle);
        hexagramSymbol.appendChild(changedHexDiv);

        // 生成变卦的六爻
        const changedLines = [...lines];
        changingLines.forEach(position => {
            changedLines[position] = changedLines[position] === "0" ? "1" : "0";
        });

        // 生成变卦图形
        generateHexagramLines(changedLines, [], changedHexDiv);
    }

    // 根据五行和卦象生成预测结果
    generatePrediction(originalHexagram, overlappingHexagram, changedHexagram, changingLines);

    // 显示结果区域
    resultSection.classList.remove('hidden');
}

// 模拟传统的三枚铜钱卜卦
function simulateThreeCoins() {
    // 模拟投掷三枚铜钱，正面为3，背面为2
    const coins = [
        Math.random() > 0.5 ? 3 : 2,
        Math.random() > 0.5 ? 3 : 2,
        Math.random() > 0.5 ? 3 : 2
    ];

    // 计算总和：6(老阴)、7(少阳)、8(少阴)、9(老阳)
    const sum = coins.reduce((total, coin) => total + coin, 0);
    return sum;
}

// 生成互卦
function generateOverlappingHexagram(lines) {
    // 互卦的六个爻：下卦取本卦的二三四爻，上卦取本卦的三四五爻
    const overlappingLines = [
        lines[1], // 二爻
        lines[2], // 三爻
        lines[3], // 四爻
        lines[2], // 三爻
        lines[3], // 四爻
        lines[4], // 五爻
    ];

    const binaryString = overlappingLines.join('');
    const hexagramIndex = parseInt(binaryString, 2);
    return hexagrams[hexagramIndex] || hexagrams[0];
}

// 生成卦象线条
function generateHexagramLines(lines, changingLines, parentElement) {
    // 从下到上创建六行爻象（传统周易从下往上数爻）
    for (let i = 5; i >= 0; i--) {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'hexagram-line';

        const isChanging = changingLines.includes(i);

        if (lines[i] === "1") {
            // 阳爻 - 一条完整的线
            const yangLine = document.createElement('div');
            yangLine.className = isChanging ? 'yang-line changing' : 'yang-line';
            lineDiv.appendChild(yangLine);

            // 如果是动爻，添加动爻标记
            if (isChanging) {
                const changeMark = document.createElement('div');
                changeMark.className = 'change-mark';
                changeMark.textContent = '○'; // 老阳动爻标记
                lineDiv.appendChild(changeMark);
            }
        } else {
            // 阴爻 - 两条断开的线
            const yinLine1 = document.createElement('div');
            yinLine1.className = isChanging ? 'yin-line changing' : 'yin-line';
            const yinLine2 = document.createElement('div');
            yinLine2.className = isChanging ? 'yin-line changing' : 'yin-line';
            lineDiv.appendChild(yinLine1);
            lineDiv.appendChild(yinLine2);

            // 如果是动爻，添加动爻标记
            if (isChanging) {
                const changeMark = document.createElement('div');
                changeMark.className = 'change-mark';
                changeMark.textContent = '×'; // 老阴动爻标记
                lineDiv.appendChild(changeMark);
            }
        }

        // 添加爻位标记
        const positionMark = document.createElement('div');
        positionMark.className = 'position-mark';
        positionMark.textContent = `${i + 1}`; // 爻位（初爻、二爻...上爻）
        lineDiv.appendChild(positionMark);

        parentElement.appendChild(lineDiv);
    }
}

// 生成预测结果
function generatePrediction(originalHexagram, overlappingHexagram, changedHexagram, changingLines) {
    // 确定卦象的基本性质
    const hexagramNature = originalHexagram.nature;

    // 考虑互卦性质对预测的影响
    const overlappingNature = overlappingHexagram ? overlappingHexagram.nature : null;

    // 根据卦象性质和当前时间，确定吉凶
    const now = new Date();
    const hour = now.getHours();
    const dayOfWeek = now.getDay();

    // 时间因素：子午卯酉为四正时，传统认为这些时辰卜卦更准
    const isFavorableTime = (hour >= 23 || hour < 1) || // 子时 (23:00-1:00)
        (hour >= 11 && hour < 13) || // 午时 (11:00-13:00)
        (hour >= 5 && hour < 7) ||   // 卯时 (5:00-7:00)
        (hour >= 17 && hour < 19);   // 酉时 (17:00-19:00)

    // 日期因素：传统上一三五日卜问财事吉，二四六日卜问事业吉
    const isFavorableDay = (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5);

    // 确定动爻的数量和位置，传统解卦很看重动爻
    const changingCount = changingLines.length;

    // 确定趋势
    let trendType;
    if (hexagramNature === "阳" && (isFavorableTime || isFavorableDay)) {
        trendType = "rising";
    } else if (hexagramNature === "阴" && (!isFavorableTime && !isFavorableDay)) {
        trendType = "falling";
    } else {
        trendType = "stable";
    }

    // 互卦影响趋势
    if (overlappingNature && overlappingNature !== hexagramNature) {
        // 本卦与互卦性质相反，表示内外不一，趋势可能波动
        trendType = Math.random() > 0.5 ? trendType : (trendType === "rising" ? "falling" : "rising");
    }

    // 根据动爻数量调整趋势
    if (changingCount >= 3) {
        // 传统上认为动爻太多，卦象不稳定
        trendType = Math.random() > 0.5 ? "rising" : "falling";
    } else if (changingCount === 0) {
        // 无动爻，卦象稳定
        trendType = "stable";
    }

    // 价格走向根据趋势和变卦确定
    let priceType;
    if (changedHexagram) {
        // 有变卦时，对比本卦与变卦的性质
        if (originalHexagram.nature === "阳" && changedHexagram.nature === "阴") {
            priceType = "falling";
        } else if (originalHexagram.nature === "阴" && changedHexagram.nature === "阳") {
            priceType = "rising";
        } else {
            priceType = trendType; // 否则跟随整体趋势
        }
    } else {
        priceType = trendType; // 无变卦时，价格走向与整体趋势一致
    }

    // 供需关系受动爻位置影响
    let supplyType;
    if (changingLines.includes(0) || changingLines.includes(1)) {
        // 初爻、二爻动，传统上与基础供应相关
        supplyType = hexagramNature === "阳" ? "excess" : "shortage";
    } else if (changingLines.includes(4) || changingLines.includes(5)) {
        // 五爻、上爻动，传统上与市场需求相关
        supplyType = hexagramNature === "阳" ? "shortage" : "excess";
    } else {
        // 中间爻位动或无动爻，供需较为平衡
        supplyType = "balanced";
    }

    // 运用五行相生相克原理确定五行关系
    const relationToSelected = getWuxingRelation(originalHexagram.number, selectedElement, changingLines);

    // 填充预测结果，增加卦象特征
    const hexagramFeature = getHexagramFeature(originalHexagram.number);

    // 如果有互卦，添加互卦特征
    let featureText = hexagramFeature;
    if (overlappingHexagram) {
        const overlappingFeature = getHexagramFeature(overlappingHexagram.number);
        featureText += `，互见${overlappingFeature.substring(0, overlappingFeature.indexOf("象征"))}`;
    }

    marketTrend.textContent = featureText + "，" + marketPredictions[trendType][Math.floor(Math.random() * marketPredictions[trendType].length)];
    pricePrediction.textContent = pricePredictions[priceType][Math.floor(Math.random() * pricePredictions[priceType].length)];
    supplyDemand.textContent = supplyDemandPredictions[supplyType][Math.floor(Math.random() * supplyDemandPredictions[supplyType].length)];

    // 填充宜忌建议，结合动爻位置
    const recType = relationToSelected === "favorable" ? "favorable" : "unfavorable";
    let recommendation = recommendationsData[recType][selectedElement][Math.floor(Math.random() * recommendationsData[recType][selectedElement].length)];

    // 如果有动爻，增加动爻解读
    if (changingLines.length > 0) {
        const positions = changingLines.map(p => ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"][p]);
        recommendation += `，${positions.join("、")}有变，`;

        if (changingLines.includes(4)) { // 五爻为贵人爻
            recommendation += "贵人将至，";
        }

        if (changingLines.includes(2) || changingLines.includes(3)) { // 三爻四爻为事业爻
            recommendation += "或有变数，慎思而行。";
        } else {
            recommendation += "静观其变，顺势而为。";
        }
    }

    recommendationsElement.textContent = recommendation;
}

// 获取卦象特征描述
function getHexagramFeature(hexagramNumber) {
    const features = [
        "乾卦象征天行健，君子以自强不息",
        "坤卦象征地势坤，君子以厚德载物",
        "屯卦象征初难以动",
        "蒙卦象征启蒙渐悟",
        "需卦象征守正待时",
        "讼卦象征慎争戒讼",
        "师卦象征谨慎治事",
        "比卦象征亲比辅佐",
        "小畜卦象征涵养待时",
        "履卦象征谨言慎行",
        "泰卦象征天地交泰",
        "否卦象征天地不交",
        "同人卦象征与人同道",
        "大有卦象征厚德载物",
        "谦卦象征内敛自持",
        "豫卦象征顺势而为",
        "随卦象征随时变通",
        "蛊卦象征振革除弊",
        "临卦象征观察制宜",
        "观卦象征观象体道",
        "噬嗑卦象征刚柔相济",
        "贲卦象征文明修饰",
        "剥卦象征顺势而变",
        "复卦象征寓进于退",
        "无妄卦象征顺乎自然",
        "大畜卦象征厚积薄发",
        "颐卦象征慎言养性",
        "大过卦象征慎重图行",
        "坎卦象征行险用险",
        "离卦象征顺导明化",
        "咸卦象征感应相合",
        "恒卦象征恒久不变",
        "遁卦象征遁世修身",
        "大壮卦象征壮勿妄为",
        "晋卦象征循序渐进",
        "明夷卦象征晦而不失",
        "家人卦象征居家理事",
        "睽卦象征异中求同",
        "蹇卦象征行险知止",
        "解卦象征柔道致治",
        "损卦象征损下益上",
        "益卦象征损上益下",
        "夬卦象征决而能和",
        "姤卦象征柔遇刚强",
        "萃卦象征荟萃聚集",
        "升卦象征柔顺发展",
        "困卦象征守正待时",
        "井卦象征修复济世",
        "革卦象征顺天应人",
        "鼎卦象征承旧创新",
        "震卦象征奋发图强",
        "艮卦象征适可而止",
        "渐卦象征渐进稳健",
        "归妹卦象征待时而动",
        "丰卦象征盛极必衰",
        "旅卦象征谦逊行事",
        "巽卦象征谦和致远",
        "兑卦象征和悦致美",
        "涣卦象征柔道致和",
        "节卦象征节度适中",
        "中孚卦象征诚信立世",
        "小过卦象征谨慎行事",
        "既济卦象征盛极将衰",
        "未济卦象征知止不殆"
    ];

    // 确保卦象编号在有效范围内
    const index = (hexagramNumber >= 1 && hexagramNumber <= 64) ? hexagramNumber - 1 : 0;
    return features[index];
}

// 获取五行与卦象的关系，考虑动爻
function getWuxingRelation(hexagramNumber, element, changingLines) {
    // 基本关系判断
    const isEven = hexagramNumber % 2 === 0;
    let relation;

    if (element === "土") {
        // 土为中性，与卦象的关系受动爻影响更大
        relation = Math.random() > 0.5 ? "favorable" : "unfavorable";
    } else if ((isEven && (element === "金" || element === "水")) ||
        (!isEven && (element === "火" || element === "木"))) {
        relation = "favorable";
    } else {
        relation = "unfavorable";
    }

    // 动爻会影响关系
    if (changingLines.length > 0) {
        // 动爻在奇位(初、三、五)与阳性五行(火、木)相生，在偶位(二、四、上)与阴性五行(金、水)相生
        const oddPositionsChanging = changingLines.filter(p => p % 2 === 0).length > 0;
        const evenPositionsChanging = changingLines.filter(p => p % 2 === 1).length > 0;

        if ((oddPositionsChanging && (element === "火" || element === "木")) ||
            (evenPositionsChanging && (element === "金" || element === "水"))) {
            // 动爻位置与五行性质相合，增强关系倾向
            return relation;
        } else if (changingLines.length >= 3) {
            // 多个动爻且位置与五行性质不合，可能导致关系反转
            return relation === "favorable" ? "unfavorable" : "favorable";
        }
    }

    return relation;
} 