<template>
    <div class="box">
        <el-container>
            <el-header class="name">
                Aventador
            </el-header>
            <el-main class="body">
                <div class="firstfloor">
                    <div class="parameter">Aventador参数</div><br><br>
                        <el-row>
                            <el-col :span="6">
                                <div class="color1">品牌：兰博基尼</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="color1">生产厂商：Aventador</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="color1">引擎类型：6.5L V12引擎（700马力起）</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="color1">最高速度：350km/h</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <div class="color1">车型尺寸： 4.780米×2.030米×1.136米</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="color1">车身重量： 1575千克</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="color1">轴    距：2700毫米</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="color1">加速时间：2.8秒（0-100km/h）</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <div class="color1">油    耗： 17.2升/百公里</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="color1">油箱容积： 90升</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="color1">标准座位数：2</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="color1">座位材质：真皮</div>
                            </el-col>
                        </el-row>
                </div>
                <div>
                    <div class="design clearfix">设计简介</div><br><br>
                    <el-card class="box-card">
                        <div>
                            <span class="text">
                                Aventador LP700-4是兰博基尼旗下的一款旗舰超级跑车，作为Murcielago的换代车型，
                                在2011年日内瓦车展上正式亮相。低矮的车身、剪刀门、遍布车身四周的巨大进气口以及玻璃下一览无余的V12发动机，
                                依旧是为人熟知的兰博基尼风格。
                                兰博基尼的传统是用斗牛的名字来命名新车，该款旗舰车型的名字Aventador（埃文塔多）同样来源于一头公牛，
                                并且是西班牙斗牛界最勇猛的斗牛之一。该车敞篷版本于2013年2月进入中国，售738.88万元。
                                此后，兰博基尼又陆续发布了Aventador LP720-4的硬顶版及敞篷版车型。
                                这是继兰博基尼雷文顿Reventon以来兰博基尼公司的又一部新一代旗舰车型。
                            </span>
                        </div>
                    </el-card>
                </div>
                <div>
                    <div class="design clearfix">车型设计</div><br><br>
                    <el-card class="box-card">
                        <div>
                            <div class="dsn">
                                在2011年日内瓦车展上，兰博基尼推出马力达到700匹全新旗舰——Aventador（音译为“艾文塔多”），
                                作为Murcielago的换代车型，Aventador的外观依然嚣张跋扈。锋利的多面几何形车身延续兰博基尼一贯的犀利风格，
                                可以看出Aventador在车身外观设计方面，大量借鉴了之前推出的兰博基尼限量版碳纤维跑车——Reventon。
                                <div class="myimg">
                                    <img src="../img/1.jpg" alt="">
                                </div>
                                兰博基尼的传统是用斗牛的名字来命名新车，之前一直有媒体推测称这款跑车可能会以Jota这个名称量产。兰博基尼将新款旗舰车型命名为Aventador，
                                名称来源于一头公牛，并且是是西班牙斗牛界最勇猛的斗牛之一。这头名叫Aventador的公牛于1993年10月在萨拉戈萨斗牛场首次出战，
                                凭借骁勇非凡的表现赢得了“Trofeo de la Pena La Madronera”奖项。
                            </div>
                            <div class="dsn">
                                车身尺寸方面，Aventador长宽高分别为4780/2030/1136mm，轴距为2700mm。轮胎规格上，前轮为255/35 R19，后轮为335/30 R20。该车重量为1575kg，
                                前后43：57的配重比。制动系统上，前轮为6活塞卡钳搭配400×38mm的碳纤维增强陶瓷刹车片，后轮则为4活塞卡钳搭配380×38mm碳纤维增强陶瓷刹车片。
                                该车的一大突出特色就是全车大量采用了碳纤维强化材料（CFRP）技术，尤其是全碳纤维复合材料单壳体车身。这款兰博基尼旗舰款超级跑车颇具未来风格，
                                车舱完全以碳纤维制造而成，并配以硬壳式结构。其承载结构则为“单壳体”设计，在构造上可作为单一部件发挥作用，从而充分利用碳纤维强化材料的超强刚度。
                            </div>
                        </div>
                    </el-card>
                </div>
                <div>
                    <div class="design clearfix">外观设计</div><br><br>
                    <el-card class="box-card">
                        <div class="dsn">
                            兰博基尼Aventador LP700-4（敞篷车）的一大新特征就是使用了之前在新一代兰博基尼Reventon上已经应用的“Y”型LED日间行车灯，
                            这一设计也将成为兰博基尼最新的家族特征。而尾灯同样使用了三组“Y”字造型的LED发光源，与车头互相呼应。
                            新车前脸的多边形设计冲击感极强，明显比上代大牛更加凶猛和暴力。
                        </div>
                        <div class="dsn">
                            车身侧面造型延续了兰博基尼一如既往的力量感与锋利线条，剪刀门作为“大牛”的经典特征毫无悬念的得以保留,但与其他兰博基尼不同的是剪刀门是斜上方开的。巨大的进气格栅在面积上明显大于上代车型，这也是为了给发动机提供更多的空气以及更好的进行冷却。不管是前大灯还是进气口或者是尾部设计都明显加入了许多Reventon的设计元素，整车的六边形设计风格显而易见，充满了科幻感，将新“大牛”的嚣张气焰提升到一个新的高度。这台展车配备的黑色莲花形轮毂同样是兰博基尼的经典款式，可以说Aventador将品牌传统特征和最新设计潮流进行了完美的融合。
                        </div>
                        <div class="dsn">
                            Aventador的内饰与外观同样充满了犀利而科幻的风格，大量真线条六边形设计与金属构成了战斗机仓般充满战斗气息的驾驶氛围。LED彩色仪表板更为新车增添了一份科技感，而内饰的一大不同是不在使用与奥迪几乎一模一样的中控台设计，这也是长期为“牛”迷所诟病的一点。

                        </div>
                    </el-card>
                </div>
            </el-main>
        </el-container>
    </div>
</template>




<style scoped >
.myimg{
    position: relative;
    top:-30px;
    float:right;
    display: block;
}
.dsn{
    word-wrap: break-word;
    float: left;
}
.text{
    text-align: left !important;
}
.clearfix::before,.clearfix::after{
    display: table;
    content: ""
}
.box-card{
    display: block;
    /* width: 60% */
}
.firstfloor{
    margin-bottom: 20px;
}
.design{
    font-size: 24px;
    float: left;
}
.name{
    font-size: 24px;
}
.color1{
    /* background: #409EFF; */
    float: left;
}
.parameter{
    float: left;
    font-size: 24px;
}
.box{
    background-color: #F5F5F5;
}
.body{
    /* width: 80%; */
    float:center;
}
</style>
