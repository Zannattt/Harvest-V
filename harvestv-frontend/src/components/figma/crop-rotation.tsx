"use client";
import {T,useLanguage} from "@/lib/language";
import { PhotoUpload, SoilTests } from "@/components/field-controls";
import Link from "next/link";
const assetPathPrefix = "/figma/crop-rotation";
const imgSvg = `${assetPathPrefix}/e653f.svg`;
const imgSvg1 = `${assetPathPrefix}/93e39.svg`;
const imgSvg2 = `${assetPathPrefix}/07807.svg`;
const imgSvg3 = `${assetPathPrefix}/d6ffc.svg`;
const imgSvg4 = `${assetPathPrefix}/795a3.svg`;
const imgSvg5 = `${assetPathPrefix}/f816f.svg`;
const imgSvg6 = `${assetPathPrefix}/bdf1d.svg`;
const imgSvg7 = `${assetPathPrefix}/7c641.svg`;
const imgSvg8 = `${assetPathPrefix}/43f91.svg`;
const imgSvg9 = `${assetPathPrefix}/256c0.svg`;
const imgSvg10 = `${assetPathPrefix}/98728.svg`;
const imgSvg11 = `${assetPathPrefix}/afbd4.svg`;
const imgSvg12 = `${assetPathPrefix}/cc6e5.svg`;
const imgSvg13 = `${assetPathPrefix}/5a8f9.svg`;
const imgSvg14 = `${assetPathPrefix}/5856e.svg`;
const imgSvg15 = `${assetPathPrefix}/90b41.svg`;
const imgSvg16 = `${assetPathPrefix}/88c15.svg`;
const imgSvg17 = `${assetPathPrefix}/ac7f9.svg`;
const imgSvg18 = `${assetPathPrefix}/fce32.svg`;
const imgSvg19 = `${assetPathPrefix}/9753e.svg`;
const imgSvg20 = `${assetPathPrefix}/13ac1.svg`;
const imgSvg21 = `${assetPathPrefix}/5571c.svg`;
const imgSvg22 = `${assetPathPrefix}/bede0.svg`;
const imgSvg23 = `${assetPathPrefix}/70e2e.svg`;
const imgSvg24 = `${assetPathPrefix}/3d299.svg`;
const imgSvg25 = `${assetPathPrefix}/fd420.svg`;
const imgContainer = `${assetPathPrefix}/ef492.svg`;
const imgContainer1 = `${assetPathPrefix}/04aa5.svg`;
export default function CropRotation() {
    const {t,language}=useLanguage();
    return (<div className="figma-407" data-node-id="126:976" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 245, 239) 0%, rgb(247, 245, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Crop-Rotation">
      <div className="figma-408" data-node-id="126:977" data-name="Section - SubStepperHeader">
        <div className="figma-290" data-node-id="126:978" data-name="Container">
          <div className="figma-409">
            <div className="figma-410" data-node-id="126:979" data-name="Steps Indicator">
              <div className="figma-410" data-node-id="126:980" data-name="Container">
                <div className="figma-252" data-node-id="126:981" data-name="SVG">
                  <img alt="" className="figma-7" src={imgSvg}/>
                </div>
                <div className="figma-411" data-node-id="126:983" data-name="Margin">
                  <div className="figma-412" data-node-id="126:984">
                    <p className="figma-36"><T text="Step 1: Farm Selected"/></p>
                  </div>
                </div>
              </div>
              <div className="figma-413" data-node-id="126:985" data-name="Margin">
                <div className="figma-414" data-node-id="126:986">
                  <p className="figma-36"><T text="•"/></p>
                </div>
              </div>
              <div className="figma-413" data-node-id="126:987" data-name="Margin">
                <div className="figma-415" data-node-id="126:988" data-name="Background+Border">
                  <div className="figma-416" data-node-id="126:989" data-name="Border">
                    <div className="figma-417">
                      <div className="figma-418" data-node-id="126:990" data-name="Background"/>
                    </div>
                  </div>
                  <div className="figma-71" data-node-id="126:991" data-name="Margin">
                    <div className="figma-419">
                      <div className="figma-420" data-node-id="126:992">
                        <p className="figma-36"><T text="Step 2: Choose Your 3-Season Plan"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-421" data-node-id="126:993" data-name="Current Selected Plot Meta">
              <div className="figma-422" data-node-id="126:994" data-name="SVG">
                <img alt="" className="figma-7" src={imgSvg1}/>
              </div>
              <div className="figma-423" data-node-id="126:997" data-name="Margin">
                <div className="figma-424" data-node-id="126:998">
                  <p className="figma-36"><T text="Shonar Bangla Agro • Plot 4"/></p>
                </div>
              </div>
              <div className="figma-423" data-node-id="126:999" data-name="Margin">
                <div className="figma-425" data-node-id="126:1000">
                  <p className="figma-36"><T text="(1.5 Bigha, Silt Loam)"/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-426" data-node-id="126:1001" data-name="MainContentContainer">
        <div className="figma-427" data-node-id="126:1002" data-name="Section - Page Title & AEZ Badge">
          <div className="figma-428" data-node-id="126:1003" data-name="Background">
            <div className="figma-122" data-node-id="126:1004" data-name="SVG">
              <img alt="" className="figma-7" src={imgSvg2}/>
            </div>
            <div className="figma-411" data-node-id="126:1006" data-name="Margin">
              <div className="figma-429" data-node-id="126:1007">
                <p className="figma-430"><T text="AEZ-9 OLD BRAHMAPUTRA FLOODPLAIN"/></p>
              </div>
            </div>
          </div>
          <div className="figma-42" data-node-id="126:1008" data-name="Heading 1">
            <div className="figma-431" data-node-id="126:1009">
              <p className="figma-432"><T text="Recommended Crop Rotations for Your Plot"/></p>
            </div>
          </div>
          <div className="figma-433" data-node-id="126:1010" data-name="Container">
            <div className="figma-434" data-node-id="126:1011">
              <p className="figma-62"><T text="Pick the plan that fits your seasonal goals and water availability."/></p>
            </div>
          </div>
        </div>
        <div className="figma-435" data-node-id="126:1012" data-name="Section - PlanCardsGrid">
          <div className="figma-436" data-node-id="126:1013" data-name="Plan 1 (Recommended / Selected)">
            <div className="figma-437" data-node-id="126:1014" data-name="Plan 1 (Recommended / Selected):shadow"/>
            <div className="figma-127" data-node-id="126:1015" data-name="Container">
              <div className="figma-438">
                <div className="figma-56" data-node-id="126:1016" data-name="Header Badges">
                  <div className="figma-439" data-node-id="126:1017" data-name="Background">
                    <div className="figma-422" data-node-id="126:1018" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg3}/>
                    </div>
                    <div className="figma-411" data-node-id="126:1020" data-name="Margin">
                      <div className="figma-440" data-node-id="126:1021">
                        <p className="figma-36"><T text="Recommended • Low Water"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-441" data-node-id="126:1022" data-name="Background+Border">
                    <div className="figma-422" data-node-id="126:1023" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg4}/>
                    </div>
                    <div className="figma-71" data-node-id="126:1025" data-name="Margin">
                      <div className="figma-442">
                        <div className="figma-443" data-node-id="126:1026">
                          <p className="figma-36"><T text="98% Soil Match"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-444" data-node-id="126:1027" data-name="Heading 2 - Title & Subtitle">
                  <div className="figma-445" data-node-id="126:1028">
                    <p className="figma-118"><T text="Plan 1: High Yield & Soil Restore"/></p>
                  </div>
                </div>
                <div className="figma-446" data-node-id="126:1029" data-name="Container">
                  <div className="figma-447" data-node-id="126:1030">
                    <p className="figma-64"><T text="Mungbean enriches soil nitrogen naturally for the next rice crop, cutting chemical"/></p>
                    <p className="figma-19"><T text="fertilizer costs."/></p>
                  </div>
                </div>
                <div className="figma-448" data-node-id="126:1031" data-name="3-Season Timeline Box">
                  <div className="figma-127" data-node-id="126:1032" data-name="Container">
                    <div className="figma-449">
                      <div className="figma-410" data-node-id="126:1033" data-name="Container">
                        <div className="figma-422" data-node-id="126:1034" data-name="SVG">
                          <img alt="" className="figma-7" src={imgSvg5}/>
                        </div>
                        <div className="figma-450" data-node-id="126:1036" data-name="Margin">
                          <div className="figma-451" data-node-id="126:1037">
                            <p className="figma-430"><T text="3-SEASON TIMELINE"/></p>
                          </div>
                        </div>
                      </div>
                      <div className="figma-452" data-node-id="126:1038" data-name="Background">
                        <div className="figma-453" data-node-id="126:1039">
                          <p className="figma-454"><T text="SEQUENTIAL SOWING"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="figma-127" data-node-id="126:1040" data-name="Crop Items Sequence">
                    <div className="figma-455">
                      <div className="figma-456" data-node-id="126:1041" data-name="Robi">
                        <div className="figma-127" data-node-id="126:1042" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-457" data-node-id="126:1043">
                              <p className="figma-454"><T text="ROBI"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-127" data-node-id="126:1044" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-458" data-node-id="126:1045">
                              <p className="figma-19"><T text="Mustard"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-71" data-node-id="126:1046" data-name="Container">
                          <div className="figma-459">
                            <div className="figma-460" data-node-id="126:1047" data-name="SVG">
                              <img alt="" className="figma-7" src={imgSvg6}/>
                            </div>
                            <div className="figma-461" data-node-id="126:1049" data-name="Margin">
                              <div className="figma-462" data-node-id="126:1050" data-name="Container">
                                <div className="figma-463" data-node-id="126:1051">
                                  <p className="figma-430"><T text="75-80 days"/></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-464" data-node-id="126:1052" data-name="Kharif-1">
                        <div className="figma-465" data-node-id="126:1053" data-name="Kharif-1:shadow"/>
                        <div className="figma-127" data-node-id="126:1054" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-466" data-node-id="126:1055">
                              <p className="figma-454"><T text="KHARIF-1"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-127" data-node-id="126:1056" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-467" data-node-id="126:1057">
                              <p className="figma-19"><T text="Mungbean"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-71" data-node-id="126:1058" data-name="Container">
                          <div className="figma-459">
                            <div className="figma-460" data-node-id="126:1059" data-name="SVG">
                              <img alt="" className="figma-7" src={imgSvg7}/>
                            </div>
                            <div className="figma-468" data-node-id="126:1061" data-name="Margin">
                              <div className="figma-462" data-node-id="126:1062" data-name="Container">
                                <div className="figma-469" data-node-id="126:1063">
                                  <p className="figma-430"><T text="65-70 days"/></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-456" data-node-id="126:1064" data-name="Kharif-2">
                        <div className="figma-127" data-node-id="126:1065" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-457" data-node-id="126:1066">
                              <p className="figma-454"><T text="KHARIF-2"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-127" data-node-id="126:1067" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-458" data-node-id="126:1068">
                              <p className="figma-19"><T text="T. Aman Rice"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-71" data-node-id="126:1069" data-name="Container">
                          <div className="figma-459">
                            <div className="figma-460" data-node-id="126:1070" data-name="SVG">
                              <img alt="" className="figma-7" src={imgSvg6}/>
                            </div>
                            <div className="figma-470" data-node-id="126:1072" data-name="Margin">
                              <div className="figma-462" data-node-id="126:1073" data-name="Container">
                                <div className="figma-463" data-node-id="126:1074">
                                  <p className="figma-430"><T text="115 days"/></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-471" data-node-id="126:1075" data-name="Metrics Row">
                  <div className="figma-472" data-node-id="126:1076" data-name="Container">
                    <div className="figma-473" data-node-id="126:1077" data-name="Container">
                      <div className="figma-122" data-node-id="126:1078" data-name="SVG">
                        <img alt="" className="figma-7" src={imgSvg8}/>
                      </div>
                      <div className="figma-450" data-node-id="126:1080" data-name="Margin">
                        <div className="figma-27" data-node-id="126:1081" data-name="Container">
                          <div className="figma-474" data-node-id="126:1082">
                            <p className="figma-454"><T text="UREA SAVED"/></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="figma-475" data-node-id="126:1083" data-name="Container">
                      <div className="figma-476" data-node-id="126:1084">
                        <p className="figma-118"><T text="-30%"/></p>
                      </div>
                    </div>
                    <div className="figma-477" data-node-id="126:1085">
                      <p className="figma-430"><T text="+38 kg N"/></p>
                    </div>
                  </div>
                  <div className="figma-478" data-node-id="126:1086" data-name="VerticalBorder">
                    <div className="figma-127" data-node-id="126:1087" data-name="Container">
                      <div className="figma-52">
                        <div className="figma-122" data-node-id="126:1088" data-name="SVG">
                          <img alt="" className="figma-7" src={imgSvg9}/>
                        </div>
                        <div className="figma-450" data-node-id="126:1090" data-name="Margin">
                          <div className="figma-27" data-node-id="126:1091" data-name="Container">
                            <div className="figma-474" data-node-id="126:1092">
                              <p className="figma-454"><T text="WATER NEEDED"/></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="figma-127" data-node-id="126:1093" data-name="Container">
                      <div className="figma-72">
                        <div className="figma-479" data-node-id="126:1094">
                          <p className="figma-118"><T text="Low"/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-480" data-node-id="126:1095">
                      <p className="figma-430"><T text="2 irrigations"/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-127" data-node-id="126:1096" data-name="Action & Footer Note">
              <div className="figma-481">
                <button type="button" data-action={"Save This Plan"} className="figma-482" data-node-id="126:1097" data-name="Button">
                  <div className="figma-483" data-node-id="126:1098" data-name="Button:shadow"/>
                  <div className="figma-252" data-node-id="126:1099" data-name="SVG">
                    <img alt="" className="figma-7" src={imgSvg10}/>
                  </div>
                  <div className="figma-423" data-node-id="126:1101" data-name="Margin">
                    <div className="figma-27" data-node-id="126:1102" data-name="Container">
                      <div className="figma-484" data-node-id="126:1103">
                        <p className="figma-19"><T text="Save This Plan"/></p>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="figma-473" data-node-id="126:1104" data-name="Container">
                  <div className="figma-422" data-node-id="126:1105" data-name="SVG">
                    <img alt="" className="figma-7" src={imgSvg11}/>
                  </div>
                  <div className="figma-485" data-node-id="126:1107" data-name="Margin">
                    <div className="figma-486" data-node-id="126:1108" data-name="Container">
                      <div className="figma-487" data-node-id="126:1109">
                        <p className="figma-430"><T text="Schedules sowing alerts & weather advisory directly to your SMS."/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-488" data-node-id="126:1110" data-name="Plan 2 (Cash Crop & Market Focus)">
            <div className="figma-127" data-node-id="126:1111" data-name="Container">
              <div className="figma-438">
                <div className="figma-56" data-node-id="126:1112" data-name="Header Badges">
                  <div className="figma-489" data-node-id="126:1113" data-name="Background">
                    <div className="figma-422" data-node-id="126:1114" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg12}/>
                    </div>
                    <div className="figma-411" data-node-id="126:1116" data-name="Margin">
                      <div className="figma-440" data-node-id="126:1117">
                        <p className="figma-36"><T text="Higher Profit • Higher Water"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-490" data-node-id="126:1118" data-name="Background">
                    <div className="figma-422" data-node-id="126:1119" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg13}/>
                    </div>
                    <div className="figma-450" data-node-id="126:1121" data-name="Margin">
                      <div className="figma-491" data-node-id="126:1122">
                        <p className="figma-36"><T text="High Turnover"/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-444" data-node-id="126:1123" data-name="Heading 2 - Title & Subtitle">
                  <div className="figma-445" data-node-id="126:1124">
                    <p className="figma-118"><T text="Plan 2: Cash Crop & Market Focus"/></p>
                  </div>
                </div>
                <div className="figma-446" data-node-id="126:1125" data-name="Container">
                  <div className="figma-447" data-node-id="126:1126">
                    <p className="figma-19"><T text="Best if you have direct access to irrigation pump and cold storage facility."/></p>
                  </div>
                </div>
                <div className="figma-448" data-node-id="126:1127" data-name="3-Season Timeline Box">
                  <div className="figma-127" data-node-id="126:1128" data-name="Container">
                    <div className="figma-449">
                      <div className="figma-410" data-node-id="126:1129" data-name="Container">
                        <div className="figma-422" data-node-id="126:1130" data-name="SVG">
                          <img alt="" className="figma-7" src={imgSvg5}/>
                        </div>
                        <div className="figma-450" data-node-id="126:1132" data-name="Margin">
                          <div className="figma-451" data-node-id="126:1133">
                            <p className="figma-430"><T text="3-SEASON TIMELINE"/></p>
                          </div>
                        </div>
                      </div>
                      <div className="figma-452" data-node-id="126:1134" data-name="Background">
                        <div className="figma-453" data-node-id="126:1135">
                          <p className="figma-454"><T text="SEQUENTIAL SOWING"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="figma-127" data-node-id="126:1136" data-name="Crop Items Sequence">
                    <div className="figma-455">
                      <div className="figma-456" data-node-id="126:1137" data-name="Robi">
                        <div className="figma-127" data-node-id="126:1138" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-457" data-node-id="126:1139">
                              <p className="figma-454"><T text="ROBI"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-127" data-node-id="126:1140" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-458" data-node-id="126:1141">
                              <p className="figma-19"><T text="Potato"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-71" data-node-id="126:1142" data-name="Container">
                          <div className="figma-459">
                            <div className="figma-460" data-node-id="126:1143" data-name="SVG">
                              <img alt="" className="figma-7" src={imgSvg6}/>
                            </div>
                            <div className="figma-492" data-node-id="126:1145" data-name="Margin">
                              <div className="figma-462" data-node-id="126:1146" data-name="Container">
                                <div className="figma-463" data-node-id="126:1147">
                                  <p className="figma-430"><T text="90-95 days"/></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-456" data-node-id="126:1148" data-name="Kharif-1">
                        <div className="figma-127" data-node-id="126:1149" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-457" data-node-id="126:1150">
                              <p className="figma-454"><T text="KHARIF-1"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-127" data-node-id="126:1151" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-458" data-node-id="126:1152">
                              <p className="figma-19"><T text="Hybrid Maize"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-71" data-node-id="126:1153" data-name="Container">
                          <div className="figma-459">
                            <div className="figma-460" data-node-id="126:1154" data-name="SVG">
                              <img alt="" className="figma-7" src={imgSvg6}/>
                            </div>
                            <div className="figma-493" data-node-id="126:1156" data-name="Margin">
                              <div className="figma-462" data-node-id="126:1157" data-name="Container">
                                <div className="figma-463" data-node-id="126:1158">
                                  <p className="figma-430"><T text="105 days"/></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-456" data-node-id="126:1159" data-name="Kharif-2">
                        <div className="figma-127" data-node-id="126:1160" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-457" data-node-id="126:1161">
                              <p className="figma-454"><T text="KHARIF-2"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-127" data-node-id="126:1162" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-458" data-node-id="126:1163">
                              <p className="figma-19"><T text="Short-Aman"/></p>
                            </div>
                          </div>
                        </div>
                        <div className="figma-71" data-node-id="126:1164" data-name="Container">
                          <div className="figma-459">
                            <div className="figma-460" data-node-id="126:1165" data-name="SVG">
                              <img alt="" className="figma-7" src={imgSvg6}/>
                            </div>
                            <div className="figma-494" data-node-id="126:1167" data-name="Margin">
                              <div className="figma-462" data-node-id="126:1168" data-name="Container">
                                <div className="figma-463" data-node-id="126:1169">
                                  <p className="figma-430"><T text="100 days"/></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-495" data-node-id="126:1170" data-name="Metrics Row">
                  <div className="figma-473" data-node-id="126:1171" data-name="Container">
                    <div className="figma-122" data-node-id="126:1172" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg14}/>
                    </div>
                    <div className="figma-450" data-node-id="126:1174" data-name="Margin">
                      <div className="figma-27" data-node-id="126:1175" data-name="Container">
                        <div className="figma-474" data-node-id="126:1176">
                          <p className="figma-454"><T text="WATER NEEDED"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="figma-475" data-node-id="126:1177" data-name="Container">
                    <div className="figma-496" data-node-id="126:1178">
                      <p className="figma-118"><T text="High"/></p>
                    </div>
                  </div>
                  <div className="figma-480" data-node-id="126:1179">
                    <p className="figma-430"><T text="5-6 irrigations"/></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-127" data-node-id="126:1180" data-name="Action & Footer Note">
              <div className="figma-481">
                <button type="button" data-action={"Select This Plan"} className="figma-497" data-node-id="126:1181" data-name="Button">
                  <div className="figma-252" data-node-id="126:1182" data-name="SVG">
                    <img alt="" className="figma-7" src={imgSvg15}/>
                  </div>
                  <div className="figma-71" data-node-id="126:1184" data-name="Margin">
                    <div className="figma-498">
                      <div className="figma-27" data-node-id="126:1185" data-name="Container">
                        <div className="figma-499" data-node-id="126:1186">
                          <p className="figma-19"><T text="Select This Plan"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="figma-473" data-node-id="126:1187" data-name="Container">
                  <div className="figma-422" data-node-id="126:1188" data-name="SVG">
                    <img alt="" className="figma-7" src={imgSvg16}/>
                  </div>
                  <div className="figma-500" data-node-id="126:1190" data-name="Margin">
                    <div className="figma-486" data-node-id="126:1191" data-name="Container">
                      <div className="figma-487" data-node-id="126:1192">
                        <p className="figma-430"><T text="Requires deep tube well irrigation access."/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="figma-501" data-node-id="126:1193" data-name="Section - QuickPlanComparisonTable">
          <div className="figma-502" data-node-id="126:1194" data-name="Table Header & Basis Switch">
            <div className="figma-503">
              <div className="figma-71" data-node-id="126:1195" data-name="Container">
                <div className="figma-504">
                  <div className="figma-42" data-node-id="126:1196" data-name="Heading 3">
                    <div className="figma-505" data-node-id="126:1197">
                      <p className="figma-12"><T text="Quick Plan Comparison"/></p>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="126:1198" data-name="Container">
                    <div className="figma-506" data-node-id="126:1199">
                      <p className="figma-19"><T text="4 key factors to decide which sequence works best for your field."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-507" data-node-id="126:1200" data-name="Button - 1 Acre Basis Pill">
                <div className="figma-508">
                  <div className="figma-71" data-node-id="126:1201" data-name="Container">
                    <div className="figma-72">
                      <div className="figma-509" data-node-id="126:1202">
                        <p className="figma-36"><T text="1 Acre Basis"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-510" data-node-id="126:1203" data-name="Margin">
                    <div className="figma-498">
                      <div className="figma-511" data-node-id="126:1204" data-name="Background"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-127" data-node-id="126:1205" data-name="Responsive Table View → Table">
            <div className="figma-512">
              <div className="figma-513" data-node-id="126:1206" data-name="Header → Row">
                <div className="figma-514" data-node-id="126:1207" data-name="Cell">
                  <div className="figma-515">
                    <div className="figma-516" data-node-id="126:1208">
                      <p className="figma-19"><T text="FACTOR"/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-517" data-node-id="126:1209" data-name="Cell">
                  <div className="figma-515">
                    <div className="figma-518" data-node-id="126:1210">
                      <p className="figma-19"><T text="PLAN 1 (RECOMMENDED)"/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-519" data-node-id="126:1211" data-name="Cell">
                  <div className="figma-515">
                    <div className="figma-520" data-node-id="126:1212">
                      <p className="figma-19"><T text="PLAN 2 (CASH FOCUS)"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-42" data-node-id="126:1213" data-name="Body">
                <div className="figma-521" data-node-id="126:1214" data-name="Row 1: Season Sowing">
                  <div className="figma-522" data-node-id="126:1215" data-name="Data">
                    <div className="figma-252" data-node-id="126:1216" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg17}/>
                    </div>
                    <div className="figma-423" data-node-id="126:1218" data-name="Margin">
                      <div className="figma-523" data-node-id="126:1219">
                        <p className="figma-19"><T text="Season Sowing"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-524" data-node-id="126:1220" data-name="Data">
                    <div className="figma-525" data-node-id="126:1221">
                      <p>
                        <span className="figma-19"><T text="Mustard "/></span>
                        <span className="figma-526"><T text="→"/></span>
                        <span className="figma-19"><T text=" Mungbean "/></span>
                        <span className="figma-526"><T text="→"/></span>
                        <span className="figma-19"><T text=" T. Aman"/></span>
                      </p>
                    </div>
                  </div>
                  <div className="figma-527" data-node-id="126:1222" data-name="Data">
                    <div className="figma-528" data-node-id="126:1223">
                      <p>
                        <span className="figma-19"><T text="Potato "/></span>
                        <span className="figma-529"><T text="→"/></span>
                        <span className="figma-19"><T text=" Maize "/></span>
                        <span className="figma-529"><T text="→"/></span>
                        <span className="figma-19"><T text=" Aman"/></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="figma-530" data-node-id="126:1224" data-name="Row 2: Water Requirement">
                  <div className="figma-514" data-node-id="126:1225" data-name="Data">
                    <div className="figma-531">
                      <div className="figma-252" data-node-id="126:1226" data-name="SVG">
                        <img alt="" className="figma-7" src={imgSvg18}/>
                      </div>
                      <div className="figma-423" data-node-id="126:1228" data-name="Margin">
                        <div className="figma-523" data-node-id="126:1229">
                          <p className="figma-19"><T text="Water Requirement"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="figma-517" data-node-id="126:1230" data-name="Data">
                    <div className="figma-532">
                      <div className="figma-533" data-node-id="126:1231">
                        <p className="figma-19"><T text="Low "/></p>
                      </div>
                      <div className="figma-534" data-node-id="126:1232">
                        <p className="figma-36"><T text="(2 light irrigations)"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-519" data-node-id="126:1233" data-name="Data">
                    <div className="figma-535">
                      <div className="figma-536" data-node-id="126:1234">
                        <p className="figma-19"><T text="High "/></p>
                      </div>
                      <div className="figma-537" data-node-id="126:1235">
                        <p className="figma-36"><T text="(5–6 deep tube well irrigations)"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="figma-538" data-node-id="126:1236" data-name="ExtensionFeedbackSection">
          <div className="figma-127" data-node-id="126:1237" data-name="Container">
            <div className="figma-449">
              <div className="figma-539" data-node-id="126:1238" data-name="Container">
                <div className="figma-540" data-node-id="126:1239" data-name="Container">
                  <div className="figma-541" data-node-id="126:1240">
                    <p className="figma-430"><T text="EXTENSION FEEDBACK"/></p>
                  </div>
                </div>
                <div className="figma-542" data-node-id="126:1241" data-name="Heading 4">
                  <div className="figma-543" data-node-id="126:1242">
                    <p className="figma-12"><T text="Is this recommendation helpful for your field?"/></p>
                  </div>
                </div>
              </div>
              <div className="figma-544" data-node-id="126:1243" data-name="Yes / Adjustment Toggle Buttons">
                <button type="button" data-action={"Yes, helpful"} className="figma-545" data-node-id="126:1244" data-name="Button">
                  <div className="figma-252" data-node-id="126:1245" data-name="SVG">
                    <img alt="" className="figma-7" src={imgSvg19}/>
                  </div>
                  <div className="figma-71" data-node-id="126:1247" data-name="Margin">
                    <div className="figma-419">
                      <div className="figma-27" data-node-id="126:1248" data-name="Container">
                        <div className="figma-546" data-node-id="126:1249">
                          <p className="figma-36"><T text="Yes, helpful"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="figma-423" data-node-id="126:1250" data-name="Button:margin">
                  <button type="button" data-action={"Needs adjustment"} className="figma-545" data-node-id="126:1251" data-name="Button">
                    <div className="figma-252" data-node-id="126:1252" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg20}/>
                    </div>
                    <div className="figma-71" data-node-id="126:1254" data-name="Margin">
                      <div className="figma-419">
                        <div className="figma-27" data-node-id="126:1255" data-name="Container">
                          <div className="figma-546" data-node-id="126:1256">
                            <p className="figma-36"><T text="Needs adjustment"/></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <textarea name="note" aria-label={t("note")} placeholder={t("Optional note: seed availability, tube well water level\u2026")} className="figma-547" data-node-id="126:1257" data-name="Optional Note Textarea → Textarea"></textarea>
          <div className="figma-127" data-node-id="126:1260" data-name="Officer Note Info & Submit CTA">
            <div className="figma-548">
              <div className="figma-410" data-node-id="126:1261" data-name="Container">
                <div className="figma-252" data-node-id="126:1262" data-name="SVG">
                  <img alt="" className="figma-7" src={imgSvg21}/>
                </div>
                <div className="figma-411" data-node-id="126:1264" data-name="Margin">
                  <div className="figma-549" data-node-id="126:1265">
                    <p className="figma-36"><T text="Informs your Upazila Agricultural Officer (UAO)."/></p>
                  </div>
                </div>
              </div>
              <button type="button" data-action={"Submit Note"} className="figma-550" data-node-id="126:1266" data-name="Button">
                <div className="figma-483" data-node-id="126:1267" data-name="Button:shadow"/>
                <div className="figma-422" data-node-id="126:1268" data-name="SVG">
                  <img alt="" className="figma-7" src={imgSvg22}/>
                </div>
                <div className="figma-423" data-node-id="126:1270" data-name="Margin">
                  <div className="figma-27" data-node-id="126:1271" data-name="Container">
                    <div className="figma-551" data-node-id="126:1272">
                      <p className="figma-36"><T text="Submit Note"/></p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-552" data-node-id="126:1273" data-name="MainFooter:margin">
        <div className="figma-553" data-node-id="126:1274" data-name="MainFooter">
          <div className="figma-290" data-node-id="126:1275" data-name="Container">
            <div className="figma-554">
              <div className="figma-555" data-node-id="126:1276" data-name="4 Columns Footer Content">
                <div className="figma-556" data-node-id="126:1277" data-name="Brand Info">
                  <div className="figma-348" data-node-id="126:1278" data-name="Container">
                    <div className="figma-557" data-node-id="126:1279" data-name="Background">
                      <div className="figma-252" data-node-id="126:1280" data-name="SVG">
                        <img alt="" className="figma-7" src={imgSvg23}/>
                      </div>
                    </div>
                    <div className="figma-423" data-node-id="126:1282" data-name="Margin">
                      <div className="figma-558" data-node-id="126:1283">
                        <p className="figma-12"><T text="HarvestV"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="126:1284" data-name="Container">
                    <div className="figma-559" data-node-id="126:1285">
                      <p className="figma-560"><T text="Agro-minimal planning and precision crop"/></p>
                      <p className="figma-561"><T text="rotation for progressive Bangladeshi farmers."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-562" data-node-id="126:1286" data-name="Emergency & Support Helpline">
                  <div className="figma-42" data-node-id="126:1287" data-name="Heading 5">
                    <div className="figma-563" data-node-id="126:1288">
                      <p className="figma-19"><T text="Emergency & Support"/></p>
                    </div>
                  </div>
                  <div className="figma-564" data-node-id="126:1289" data-name="Container">
                    <div className="figma-213" data-node-id="126:1290" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg24}/>
                    </div>
                    <div className="figma-423" data-node-id="126:1292" data-name="Margin">
                      <div className="figma-565" data-node-id="126:1293">
                        <p className="figma-118"><T text="16123"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="126:1294" data-name="Container">
                    <div className="figma-566" data-node-id="126:1295">
                      <p className="figma-36"><T text="National Agricultural Extension Call Center (Toll Free)"/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-221" data-node-id="126:1296" data-name="Research Partners">
                  <div className="figma-42" data-node-id="126:1297" data-name="Heading 5">
                    <div className="figma-563" data-node-id="126:1298">
                      <p className="figma-19"><T text="Research Partners"/></p>
                    </div>
                  </div>
                  <div className="figma-196" data-node-id="126:1299" data-name="Container">
                    <div className="figma-567" data-node-id="126:1300">
                      <p className="figma-36"><T text="BARI (Bangladesh Agricultural Research Institute)"/></p>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="126:1301" data-name="Container">
                    <div className="figma-567" data-node-id="126:1302">
                      <p className="figma-36"><T text="BRRI (Bangladesh Rice Research Institute)"/></p>
                    </div>
                  </div>
                  <div className="figma-568" data-node-id="126:1303" data-name="Container">
                    <div className="figma-569" data-node-id="126:1304">
                      <p className="figma-570"><T text="Field agronomy advisory calibrated with national seed"/></p>
                      <p className="figma-571"><T text="standards."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-572" data-node-id="126:1305" data-name="Agronomic Governance Links">
                  <div className="figma-42" data-node-id="126:1306" data-name="Heading 5">
                    <div className="figma-563" data-node-id="126:1307">
                      <p className="figma-19"><T text="Agronomic Governance"/></p>
                    </div>
                  </div>
                  <div className="figma-304" data-node-id="126:1308" data-name="List">
                    <div className="figma-42" data-node-id="126:1309" data-name="Item">
                      <div className="figma-573" data-node-id="126:1310">
                        <p className="figma-574"><T text="Crop Advisory Terms"/></p>
                      </div>
                    </div>
                    <div className="figma-42" data-node-id="126:1311" data-name="Item">
                      <div className="figma-573" data-node-id="126:1312">
                        <p className="figma-574"><T text="Privacy & Field Data Rights"/></p>
                      </div>
                    </div>
                    <div className="figma-42" data-node-id="126:1313" data-name="Item">
                      <div className="figma-573" data-node-id="126:1314">
                        <p className="figma-574"><T text="Soil Health Guidelines"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-575" data-node-id="126:1315" data-name="Bottom Copyright & Verification Badge">
                <div className="figma-71" data-node-id="126:1316" data-name="Container">
                  <div className="figma-128">
                    <div className="figma-576" data-node-id="126:1317">
                      <p className="figma-36"><T text="© 2024 HarvestV Agronomy Systems. Developed under agro-minimal stewardship."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-577" data-node-id="126:1318" data-name="Background">
                  <div className="figma-578">
                    <div className="figma-252" data-node-id="126:1319" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg25}/>
                    </div>
                    <div className="figma-411" data-node-id="126:1321" data-name="Margin">
                      <div className="figma-579" data-node-id="126:1322">
                        <p className="figma-36"><T text="Verified Agronomic Database"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-580" data-node-id="117:7234" data-name="Header">
        <div className="figma-71" data-node-id="117:7235" data-name="Container">
          <div className="figma-149">
            <button type="button" data-action={"HarvestV"} className="figma-33" data-node-id="117:7236" data-name="Link">
              <div className="figma-581" data-node-id="117:7237" data-name="Background">
                <div className="figma-582" data-node-id="117:7238" data-name="Container">
                  <img alt="" className="figma-7" src={imgContainer}/>
                </div>
              </div>
              <div className="figma-10" data-node-id="117:7240" data-name="Container">
                <div className="figma-42" data-node-id="117:7241" data-name="Container">
                  <div className="figma-311" data-node-id="117:7242">
                    <p className="figma-12"><T text="HarvestV"/></p>
                  </div>
                </div>
              </div>
            </button>
            <div className="figma-583" data-node-id="117:7243" data-name="Background+Border">
              <div className="figma-584" data-node-id="117:7244" data-name="Container">
                <img alt="" className="figma-7" src={imgContainer1}/>
              </div>
              <div className="figma-71" data-node-id="117:7246" data-name="Container">
                <div className="figma-128">
                  <div className="figma-585" data-node-id="117:7247">
                    <p className="figma-36"><T text="Mymensingh • Plot 4"/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="figma-71" data-node-id="117:7248" data-name="Nav">
          <div className="figma-586">
            <Link href="/" className="figma-587" data-node-id="117:7249" data-name="Link">
              <div className="figma-588" data-node-id="117:7250">
                <p className="figma-19"><T text="Home"/></p>
              </div>
            </Link>
            <Link href="/my-farm" className="figma-587" data-node-id="117:7251" data-name="Link">
              <div className="figma-588" data-node-id="117:7252">
                <p className="figma-19"><T text="My Farm"/></p>
              </div>
            </Link>
            <Link href="/crop-rotation" className="figma-589" data-node-id="117:7253" data-name="Link">
              <div className="figma-590" data-node-id="117:7254">
                <p className="figma-19"><T text="Crop Rotation"/></p>
              </div>
            </Link>
            <Link href="/information-check" className="figma-587" data-node-id="117:7255" data-name="Link">
              <div className="figma-588" data-node-id="117:7256">
                <p className="figma-19"><T text="Information Check"/></p>
              </div>
            </Link>
            <Link href="/feedback" className="figma-587" data-node-id="117:7257" data-name="Link">
              <div className="figma-588" data-node-id="117:7258">
                <p className="figma-19"><T text="Feedback"/></p>
              </div>
            </Link>
          </div>
        </div>
        <div className="figma-71" data-node-id="117:7259" data-name="Container">
          <div className="figma-591">
            <div className="figma-592" data-node-id="117:7260" data-name="Background+Border">
              <button type="button" data-action={"EN"} aria-pressed={language === "en"} lang="en" className="figma-593" data-node-id="117:7261" data-name="Button">
                <div className="figma-594">
                  <div className="figma-595" data-node-id="117:7262">
                    <p className="figma-36"><T text="EN"/></p>
                  </div>
                </div>
              </button>
              <button type="button" data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn" className="figma-596" data-node-id="117:7263" data-name="Button">
                <div className="figma-594">
                  <div className="figma-597" data-node-id="117:7264">
                    <p className="figma-36"><T text="বাংলা"/></p>
                  </div>
                </div>
              </button>
            </div>
            <div className="figma-598" data-node-id="117:7265" data-name="VerticalBorder">
              <div className="figma-599" data-node-id="117:7266" data-name="Background+Shadow">
                <div className="figma-600">
                  <div className="figma-601" data-node-id="117:7267">
                    <p className="figma-36"><T text="AR"/></p>
                  </div>
                </div>
              </div>
              <div className="figma-71" data-node-id="117:7268" data-name="Container">
                <div className="figma-128">
                  <div className="figma-42" data-node-id="117:7269" data-name="Container">
                    <div className="figma-602" data-node-id="117:7270">
                      <p className="figma-36"><T text="Abdur Rashid"/></p>
                    </div>
                  </div>
                  <div className="figma-196" data-node-id="117:7271" data-name="Margin">
                    <div className="figma-42" data-node-id="117:7272" data-name="Container">
                      <div className="figma-603" data-node-id="117:7273">
                        <p className="figma-604"><T text="Farmer"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
