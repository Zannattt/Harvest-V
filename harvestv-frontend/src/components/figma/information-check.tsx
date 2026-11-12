"use client";
import {T,useLanguage} from "@/lib/language";
import { FarmLocation, FarmDetails } from "@/components/farm-location";
import { FarmContextBar, ActiveFarmLabel, CropStatus, FarmConditions, WeatherDashboard, ClimateHistory } from "@/components/live-dashboard";
import { PhotoUpload, SoilTests } from "@/components/field-controls";
import Link from "next/link";
const assetPathPrefix = "/figma/information-check";
const imgAb6AXuBie7YKgziRs9L0SztSejkxJRaboVdxDbWwSj5HyaMisyPvTaypQmry5Yeht7KDwZm58Jmp75DoyG0HCwbOswoOmVqg9CQpOzaApFm5QCd6AzGliXLgyU2GbnzVCxTw7I1Gbv7XQjNkajUAn7W0IaEJnnDuDjLDq3LnjL9T4Mgi2Rzyl67OkaRpTmAxxRJqDyX7REomvkPx2WwGwEvGrVvTtNfETfVUy3Z6S8O5G = `${assetPathPrefix}/bbe76.png`;
const imgAb6AXuBb7S2ZncPtfMke05RRpug87Q8BqTgo1Ur1El33RlugXiE7LyVbpNvRGyecMa82KZuSpxaeLu74EokxKEiC95Q04J3PRnKd322Zu3BbTq7D5OxAm2QwNhGvHEefOAh1ShlecfMa3DFuEy42Aai7Xtpn5OY75Cp1TuQi7Eo8RN5VDhNjM6UyKl6SeNyxrtpZqnHf82K4OjxSAaxXerosLYsox0Pu2Ht3LnDnIfS = `${assetPathPrefix}/e16b8.png`;
const imgAb6AXuBxq0OyGy3R3G1XIlmYuLxUcia09TSy6HDzt6F0PbeAefhirHyXVguJabUuJY3ADdtRrvi2Yi2M9I9PgsO14LKzwDz9FsZ6Hbp6KaEitN10Wu0AnoLrxU83SEdUsX78CHtkFsYaMmv1QldyvaQ8WNlImf4UyWaCXwZqtkGmGvAehPoPgorwil4SnkYrLb5Vkzi479Rqcy0CanxTyaSkKh86MyeFdU39DHuAQzr = `${assetPathPrefix}/3d9cc.png`;
const imgContainer = `${assetPathPrefix}/a682c.svg`;
const imgContainer1 = `${assetPathPrefix}/c5203.svg`;
const imgContainer2 = `${assetPathPrefix}/27761.svg`;
const imgButton = `${assetPathPrefix}/b7a00.svg`;
const imgButton1 = `${assetPathPrefix}/d5a0d.svg`;
const imgIcon = `${assetPathPrefix}/a86ed.svg`;
const imgContainer3 = `${assetPathPrefix}/2fd63.svg`;
const imgContainer4 = `${assetPathPrefix}/429c9.svg`;
const imgContainer5 = `${assetPathPrefix}/a774f.svg`;
const imgContainer6 = `${assetPathPrefix}/f6be1.svg`;
const imgContainer7 = `${assetPathPrefix}/6e8d8.svg`;
const imgContainer8 = `${assetPathPrefix}/c5de6.svg`;
const imgContainer9 = `${assetPathPrefix}/f1d47.svg`;
const imgContainer10 = `${assetPathPrefix}/d1a57.svg`;
const imgContainer11 = `${assetPathPrefix}/5f0bf.svg`;
const imgContainer12 = `${assetPathPrefix}/16b15.svg`;
const imgContainer13 = `${assetPathPrefix}/93f84.svg`;
const imgContainer14 = `${assetPathPrefix}/a37d0.svg`;
const imgContainer15 = `${assetPathPrefix}/37a44.svg`;
const imgContainer16 = `${assetPathPrefix}/59e02.svg`;
export default function InformationCheckHarvestV() {
    const {t,language}=useLanguage();
    return (<div className="figma-103" data-node-id="95:5078" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 249, 245) 0%, rgb(250, 249, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Information Check - HarvestV">
      <div className="figma-104" data-node-id="95:5079" data-name="Main">
        <div className="figma-189" data-node-id="95:5080" data-name="Section">
          <div className="figma-106" data-node-id="95:5081" data-name="Top Editorial Metadata Row">
            <div className="figma-190" data-node-id="95:5082" data-name="Container">
              <div className="figma-159" data-node-id="95:5083" data-name="Container">
                <div className="figma-191" data-node-id="95:5084" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer}/>
                </div>
                <div className="figma-13" data-node-id="95:5086" data-name="Container">
                  <div className="figma-192" data-node-id="95:5087">
                    <p className="figma-59"><T text="AGRONOMIC ADVISORY VERIFICATION"/></p>
                  </div>
                </div>
              </div>
              <div className="figma-32" data-node-id="95:5088" data-name="Heading 1">
                <div className="figma-112" data-node-id="95:5089">
                  <p className="figma-113"><T text="Check farming advice you received"/></p>
                </div>
              </div>
              <div className="figma-193" data-node-id="95:5090" data-name="Container">
                <div className="figma-194" data-node-id="95:5091">
                  <p className="figma-195"><T text="Verify fertilizer recommendations, pest tips, and rumors against scientific"/></p>
                  <p className="figma-31"><T text="agricultural data."/></p>
                </div>
              </div>
            </div>
            <div className="figma-196" data-node-id="95:5092" data-name="Background">
              <div className="figma-12" data-node-id="95:5093" data-name="Container">
                <div className="figma-197" data-node-id="95:5094" data-name="Background"/>
                <div className="figma-13" data-node-id="95:5095" data-name="Container">
                  <div className="figma-198" data-node-id="95:5096">
                    <p className="figma-8"><T text="REAL-TIME SCIENTIFIC REGISTRY"/></p>
                  </div>
                </div>
              </div>
              <div className="figma-13" data-node-id="95:5097" data-name="Container">
                <div className="figma-199" data-node-id="95:5098">
                  <p className="figma-8"><T text="|"/></p>
                </div>
              </div>
              <div className="figma-13" data-node-id="95:5099" data-name="Container">
                <div className="figma-39" data-node-id="95:5100">
                  <p className="figma-8"><T text="BARI • BRRI • SRDI"/></p>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-200" data-node-id="95:5101" data-name="Verification Query Form Engine">
            <div className="figma-201" data-node-id="95:5102" data-name="Container">
              <div className="figma-202" data-node-id="95:5103" data-name="Background+Border">
                <div className="figma-38" data-node-id="95:5104" data-name="Container">
                  <div className="figma-150">
                    <div className="figma-191" data-node-id="95:5105" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer1}/>
                    </div>
                    <div className="figma-13" data-node-id="95:5107" data-name="Container">
                      <div className="figma-52" data-node-id="95:5108">
                        <p>
                          <span className="figma-15"><T text="Checking for: "/></span>
                          <span className="figma-203"><T text="Shonar Bangla Agro — Plot 4 (Silt Loam, Mymensingh)"/></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" data-action={"Change Plot Context"} className="figma-38" data-node-id="95:5109" data-name="Button">
                  <div className="figma-148">
                    <div className="figma-16" data-node-id="95:5110" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer2}/>
                    </div>
                    <div className="figma-19" data-node-id="95:5112" data-name="Container">
                      <div className="figma-204" data-node-id="95:5113">
                        <p className="figma-59"><T text="Change Plot Context"/></p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="figma-205" data-node-id="95:5114" data-name="Container">
                <div className="figma-206" data-node-id="95:5115" data-name="Label">
                  <div className="figma-13" data-node-id="95:5116" data-name="Container">
                    <div className="figma-163" data-node-id="95:5117">
                      <p className="figma-15"><T text="What farming advice would you like to check?"/></p>
                    </div>
                  </div>
                  <div className="figma-13" data-node-id="95:5118" data-name="Container">
                    <div className="figma-207" data-node-id="95:5119">
                      <p className="figma-8"><T text="*"/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-208" data-node-id="95:5120" data-name="Container">
                  <textarea name="advice" aria-label={t("advice")} placeholder={t("What farming advice would you like to check?")} className="figma-209" data-node-id="95:5121" data-name="Textarea"></textarea>
                  <div className="figma-210" data-node-id="95:5124" data-name="Container">
                    <button type="button" data-action={""} className="figma-211" data-node-id="95:5125" data-name="Button">
                      <img alt="" className="figma-17" src={imgButton}/>
                    </button>
                    <button type="button" data-action={""} className="figma-212" data-node-id="95:5127" data-name="Button">
                      <img alt="" className="figma-17" src={imgButton1}/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="figma-213" data-node-id="95:5129" data-name="Container">
                <div className="figma-214" data-node-id="95:5130" data-name="Container">
                  <div className="figma-215" data-node-id="95:5131" data-name="Label">
                    <div className="figma-216" data-node-id="95:5132">
                      <p className="figma-59"><T text="Source link or video "/></p>
                    </div>
                    <div className="figma-217" data-node-id="95:5133">
                      <p className="figma-8"><T text="(Optional)"/></p>
                    </div>
                  </div>
                  <div className="figma-218" data-node-id="95:5134" data-name="Container">
                    <input name="source" aria-label={t("source")} defaultValue="" className="figma-219" data-node-id="95:5135" data-name="Input"/>
                    <div className="figma-220" data-node-id="95:5138" data-name="Icon">
                      <img alt="" className="figma-17" src={imgIcon}/>
                    </div>
                  </div>
                </div>
                <button type="button" data-action={"Check information"} className="figma-221" data-node-id="95:5139" data-name="Button">
                  <div className="figma-82" data-node-id="95:5140" data-name="Container">
                    <img alt="" className="figma-17" src={imgContainer3}/>
                  </div>
                  <div className="figma-19" data-node-id="95:5142" data-name="Container">
                    <div className="figma-222" data-node-id="95:5143">
                      <p className="figma-15"><T text="Check information"/></p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="figma-223" data-node-id="95:5144" data-name="Active Research Visual Snapshot Strip">
            <div className="figma-224" data-node-id="95:5145" data-name="Visual Card 1: Salinity Stress">
              <div className="figma-225" data-node-id="95:5146" data-name="Background">
                <div className="figma-226" data-node-id="95:5147" data-name="AB6AXuBIE7YKgziRS9L0sztSejkxJRaboVDXDbWwSJ5hya_misyPvTaypQmry5_Yeht7KDwZm58Jmp75doyG0hCwbOswoOmVqg9CQpOzaApFM5QCd6azGliXLgyU2GbnzVCxTw7I1GBV7xQjNkajU-AN7w0iaEJnnDuDjLDq3lnjL9T4MGI2RZYL67OKARpTMAxxRJqDyX7REomvkPX2wwGwEVGrVVTtNfETfVUy3z6S8o5G">
                  <div className="figma-227">
                    <img alt="" className="figma-228" src={imgAb6AXuBie7YKgziRs9L0SztSejkxJRaboVdxDbWwSj5HyaMisyPvTaypQmry5Yeht7KDwZm58Jmp75DoyG0HCwbOswoOmVqg9CQpOzaApFm5QCd6AzGliXLgyU2GbnzVCxTw7I1Gbv7XQjNkajUAn7W0IaEJnnDuDjLDq3LnjL9T4Mgi2Rzyl67OkaRpTmAxxRJqDyX7REomvkPx2WwGwEvGrVvTtNfETfVUy3Z6S8O5G}/>
                  </div>
                </div>
              </div>
              <div className="figma-229" data-node-id="95:5148" data-name="Container">
                <div className="figma-230" data-node-id="95:5149">
                  <p className="figma-8"><T text="ACTIVE WARNING"/></p>
                </div>
                <div className="figma-231" data-node-id="95:5150" data-name="Heading 4">
                  <div className="figma-163" data-node-id="95:5151">
                    <p className="figma-232"><T text="Salt Infiltration in Boro"/></p>
                  </div>
                </div>
                <div className="figma-32" data-node-id="95:5152" data-name="Container">
                  <div className="figma-39" data-node-id="95:5153">
                    <p className="figma-167"><T text="Over 43 reported cases in Mymensingh &"/></p>
                    <p className="figma-8"><T text="Tangail this season."/></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-224" data-node-id="95:5154" data-name="Visual Card 2: Green Manuring">
              <div className="figma-225" data-node-id="95:5155" data-name="Background">
                <div className="figma-226" data-node-id="95:5156" data-name="AB6AXuBb7S2ZncPtfMke05rRpug87q8BqTgo1UR1El33RlugXiE7LY-VBPNvRGyec-ma-82KZuSPXAELu74eokxKEiC95Q04J3pRNKd322ZU3bbTq7D5OxAM2qwNHGvHEefOAh1ShlecfMa3DFuEy42Aai7XTPN5oY75Cp1tuQI7Eo8rN5v-DhNjM6uyKl_6seNYXRTPZqnHf82k4OjxSAaxXerosLYsox0pu2ht3lnDNIfS">
                  <div className="figma-227">
                    <img alt="" className="figma-228" src={imgAb6AXuBb7S2ZncPtfMke05RRpug87Q8BqTgo1Ur1El33RlugXiE7LyVbpNvRGyecMa82KZuSpxaeLu74EokxKEiC95Q04J3PRnKd322Zu3BbTq7D5OxAm2QwNhGvHEefOAh1ShlecfMa3DFuEy42Aai7Xtpn5OY75Cp1TuQi7Eo8RN5VDhNjM6UyKl6SeNyxrtpZqnHf82K4OjxSAaxXerosLYsox0Pu2Ht3LnDnIfS}/>
                  </div>
                </div>
              </div>
              <div className="figma-229" data-node-id="95:5157" data-name="Container">
                <div className="figma-233" data-node-id="95:5158">
                  <p className="figma-8"><T text="PROVEN PRACTICE"/></p>
                </div>
                <div className="figma-231" data-node-id="95:5159" data-name="Heading 4">
                  <div className="figma-163" data-node-id="95:5160">
                    <p className="figma-232"><T text="Mungbean Green Manure"/></p>
                  </div>
                </div>
                <div className="figma-32" data-node-id="95:5161" data-name="Container">
                  <div className="figma-39" data-node-id="95:5162">
                    <p className="figma-167"><T text="Replaces up to 40kg synthetic Urea per hectare"/></p>
                    <p className="figma-8"><T text="safely."/></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-224" data-node-id="95:5163" data-name="Visual Card 3: BPH Pest Monitoring">
              <div className="figma-225" data-node-id="95:5164" data-name="Background">
                <div className="figma-226" data-node-id="95:5165" data-name="AB6AXuBxq0OyGY3R3G1XIlmYuLxUCIA09tSY6hDZT6f0PbeAefhirHyXVguJABUu-jY3aDDTRrvi2Yi2M9I9PgsO14lKzwDZ9FsZ6HBP6kaEitN10WU0ANOLrxU83sEDUsX78cHTKFsYAMmv1qldyvaQ8wNLImf4UyWA-CXwZQTKGmGVAehPOPgorwil4snkYrLb5VKZI479RQCY0canxTyaSk_kh_86myeFdU39-dHuAQzr">
                  <div className="figma-227">
                    <img alt="" className="figma-228" src={imgAb6AXuBxq0OyGy3R3G1XIlmYuLxUcia09TSy6HDzt6F0PbeAefhirHyXVguJabUuJY3ADdtRrvi2Yi2M9I9PgsO14LKzwDz9FsZ6Hbp6KaEitN10Wu0AnoLrxU83SEdUsX78CHtkFsYaMmv1QldyvaQ8WNlImf4UyWaCXwZqtkGmGvAehPoPgorwil4SnkYrLb5Vkzi479Rqcy0CanxTyaSkKh86MyeFdU39DHuAQzr}/>
                  </div>
                </div>
              </div>
              <div className="figma-229" data-node-id="95:5166" data-name="Container">
                <div className="figma-234" data-node-id="95:5167">
                  <p className="figma-8"><T text="UNDER RESEARCH"/></p>
                </div>
                <div className="figma-231" data-node-id="95:5168" data-name="Heading 4">
                  <div className="figma-163" data-node-id="95:5169">
                    <p className="figma-232"><T text="Organic Repellents for BPH"/></p>
                  </div>
                </div>
                <div className="figma-32" data-node-id="95:5170" data-name="Container">
                  <div className="figma-39" data-node-id="95:5171">
                    <p className="figma-167"><T text="Laboratory validation pending at Gazipur"/></p>
                    <p className="figma-8"><T text="Entomology Unit."/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-235" data-node-id="95:5172" data-name="Section Header: Evaluated Evidence Stream">
            <div className="figma-236" data-node-id="95:5173" data-name="Paragraph">
              <div className="figma-237" data-node-id="95:5174">
                <p className="figma-8"><T text="SCIENTIFIC DOSSIER"/></p>
              </div>
              <div className="figma-238" data-node-id="95:5175">
                <p className="figma-10"><T text="Evaluated Field Assertions & Rumors"/></p>
              </div>
            </div>
            <div className="figma-239" data-node-id="95:5176" data-name="Container">
              <div className="figma-13" data-node-id="95:5177" data-name="Container">
                <div className="figma-39" data-node-id="95:5178">
                  <p className="figma-8"><T text="Displaying verified entries calibrated for:"/></p>
                </div>
              </div>
              <div className="figma-13" data-node-id="95:5179" data-name="Container">
                <div className="figma-58" data-node-id="95:5180">
                  <p className="figma-59"><T text="Aman & Boro Crop Cycles"/></p>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-240" data-node-id="95:5181" data-name="Case Verification Cards Container">
            <div className="figma-241" data-node-id="95:5182" data-name="Article - RESULT 1: CONTRADICTED">
              <div className="figma-24" data-node-id="95:5183" data-name="Container">
                <div className="figma-242">
                  <div className="figma-243" data-node-id="95:5184" data-name="Container">
                    <div className="figma-244" data-node-id="95:5185" data-name="Background">
                      <div className="figma-245" data-node-id="95:5186" data-name="Container">
                        <img alt="" className="figma-17" src={imgContainer4}/>
                      </div>
                      <div className="figma-13" data-node-id="95:5188" data-name="Container">
                        <div className="figma-246" data-node-id="95:5189">
                          <p className="figma-59"><T text="Contradicted by Scientific Evidence"/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-13" data-node-id="95:5190" data-name="Container">
                      <div className="figma-247" data-node-id="95:5191">
                        <p className="figma-59"><T text="-22% grain fill risk"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-248" data-node-id="95:5192" data-name="Container">
                    <div className="figma-110" data-node-id="95:5193">
                      <p className="figma-8"><T text="CLAIM"/></p>
                    </div>
                    <div className="figma-249" data-node-id="95:5194" data-name="Container">
                      <div className="figma-250" data-node-id="95:5195">
                        <p className="figma-251"><T text="“Applying common table salt (NaCl) in standing water prevents stem rot in Boro rice.”"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-252" data-node-id="95:5196" data-name="Background+Border">
                    <div className="figma-24" data-node-id="95:5197" data-name="Container">
                      <div className="figma-25">
                        <div className="figma-253" data-node-id="95:5198">
                          <p className="figma-254"><T text="Salt increases soil salinity and induces root osmotic shock within 72 hours, hindering grain development rather than controlling stem rot fungi."/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-91" data-node-id="95:5199" data-name="HorizontalBorder">
                      <div className="figma-255">
                        <div className="figma-38" data-node-id="95:5200" data-name="Container">
                          <div className="figma-150">
                            <div className="figma-16" data-node-id="95:5201" data-name="Container">
                              <img alt="" className="figma-17" src={imgContainer5}/>
                            </div>
                            <div className="figma-13" data-node-id="95:5203" data-name="Container">
                              <div className="figma-256" data-node-id="95:5204">
                                <p>
                                  <span className="figma-15"><T text="Next step:"/></span>
                                  <span className="figma-257"><T text=" Apply 12-15 kg MOP (potassium) at early panicle stage instead."/></span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a href="tel:16123" className="figma-38" data-node-id="95:5205" data-name="Link">
                          <div className="figma-148">
                            <div className="figma-16" data-node-id="95:5206" data-name="Container">
                              <img alt="" className="figma-17" src={imgContainer6}/>
                            </div>
                            <div className="figma-13" data-node-id="95:5208" data-name="Container">
                              <div className="figma-258" data-node-id="95:5209">
                                <p className="figma-59"><T text="Connect Trishal SAAO"/></p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <button type="button" data-sources="true" className="figma-159" data-node-id="95:5210" data-name="Details → Slot → Summary">
                    <div className="figma-259" data-node-id="95:5211" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer7}/>
                    </div>
                    <div className="figma-13" data-node-id="95:5213" data-name="Container">
                      <div className="figma-260" data-node-id="95:5214">
                        <p className="figma-59"><T text="View sources"/></p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="figma-261" data-node-id="95:5215" data-name="Article - RESULT 2: SUPPORTED">
              <div className="figma-24" data-node-id="95:5216" data-name="Container">
                <div className="figma-242">
                  <div className="figma-243" data-node-id="95:5217" data-name="Container">
                    <div className="figma-262" data-node-id="95:5218" data-name="Background">
                      <div className="figma-245" data-node-id="95:5219" data-name="Container">
                        <img alt="" className="figma-17" src={imgContainer8}/>
                      </div>
                      <div className="figma-13" data-node-id="95:5221" data-name="Container">
                        <div className="figma-263" data-node-id="95:5222">
                          <p className="figma-59"><T text="Supported by Research"/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-13" data-node-id="95:5223" data-name="Container">
                      <div className="figma-264" data-node-id="95:5224">
                        <p className="figma-59"><T text="Saves 25–30% urea"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-248" data-node-id="95:5225" data-name="Container">
                    <div className="figma-110" data-node-id="95:5226">
                      <p className="figma-8"><T text="CLAIM"/></p>
                    </div>
                    <div className="figma-249" data-node-id="95:5227" data-name="Container">
                      <div className="figma-250" data-node-id="95:5228">
                        <p className="figma-251"><T text="“Incorporating green mungbean stover into the soil before T. Aman transplanting reduces urea top-dressing.”"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-265" data-node-id="95:5229" data-name="Background+Border">
                    <div className="figma-24" data-node-id="95:5230" data-name="Container">
                      <div className="figma-266">
                        <div className="figma-253" data-node-id="95:5231">
                          <p className="figma-267"><T text="Green biomass from BARI Mung-6 decomposes rapidly in warm monsoon soil, providing 35–40 kg natural organic nitrogen per hectare safely without yield"/></p>
                          <p className="figma-254"><T text="loss."/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-91" data-node-id="95:5232" data-name="HorizontalBorder">
                      <div className="figma-255">
                        <div className="figma-38" data-node-id="95:5233" data-name="Container">
                          <div className="figma-150">
                            <div className="figma-16" data-node-id="95:5234" data-name="Container">
                              <img alt="" className="figma-17" src={imgContainer5}/>
                            </div>
                            <div className="figma-13" data-node-id="95:5236" data-name="Container">
                              <div className="figma-256" data-node-id="95:5237">
                                <p>
                                  <span className="figma-15"><T text="Next step:"/></span>
                                  <span className="figma-257"><T text=" Incorporate biomass 7–10 days prior to final puddling for optimal nitrogen release."/></span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="figma-268" data-node-id="95:5238" data-name="Background">
                          <div className="figma-269">
                            <div className="figma-40" data-node-id="95:5239">
                              <p className="figma-8"><T text="Verified for AEZ-9 & AEZ-11"/></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" data-sources="true" className="figma-159" data-node-id="95:5240" data-name="Details → Slot → Summary">
                    <div className="figma-259" data-node-id="95:5241" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer7}/>
                    </div>
                    <div className="figma-13" data-node-id="95:5243" data-name="Container">
                      <div className="figma-260" data-node-id="95:5244">
                        <p className="figma-59"><T text="View sources"/></p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="figma-270" data-node-id="95:5245" data-name="Article - RESULT 3: INSUFFICIENT EVIDENCE">
              <div className="figma-24" data-node-id="95:5246" data-name="Container">
                <div className="figma-242">
                  <div className="figma-243" data-node-id="95:5247" data-name="Container">
                    <div className="figma-271" data-node-id="95:5248" data-name="Background">
                      <div className="figma-245" data-node-id="95:5249" data-name="Container">
                        <img alt="" className="figma-17" src={imgContainer9}/>
                      </div>
                      <div className="figma-13" data-node-id="95:5251" data-name="Container">
                        <div className="figma-272" data-node-id="95:5252">
                          <p className="figma-59"><T text="Insufficient Evidence"/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-13" data-node-id="95:5253" data-name="Container">
                      <div className="figma-273" data-node-id="95:5254">
                        <p className="figma-59"><T text="< 8% deterrence observed"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-248" data-node-id="95:5255" data-name="Container">
                    <div className="figma-110" data-node-id="95:5256">
                      <p className="figma-8"><T text="CLAIM"/></p>
                    </div>
                    <div className="figma-249" data-node-id="95:5257" data-name="Container">
                      <div className="figma-250" data-node-id="95:5258">
                        <p className="figma-251"><T text="“Spraying fermented molasses and wood ash solution repels brown planthopper (BPH) effectively.”"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-265" data-node-id="95:5259" data-name="Background+Border">
                    <div className="figma-24" data-node-id="95:5260" data-name="Container">
                      <div className="figma-266">
                        <div className="figma-253" data-node-id="95:5261">
                          <p className="figma-267"><T text="Controlled field trials show negligible efficacy against moderate to heavy BPH pressure. Residual leaf sugars may also accelerate secondary Sooty Mold"/></p>
                          <p>
                            <span className="figma-254"><T text="("/></span>
                            <span className="figma-274"><T text="Capnodium sp."/></span>
                            <span className="figma-254"><T text=")."/></span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-91" data-node-id="95:5262" data-name="HorizontalBorder">
                      <div className="figma-255">
                        <div className="figma-38" data-node-id="95:5263" data-name="Container">
                          <div className="figma-150">
                            <div className="figma-16" data-node-id="95:5264" data-name="Container">
                              <img alt="" className="figma-17" src={imgContainer5}/>
                            </div>
                            <div className="figma-13" data-node-id="95:5266" data-name="Container">
                              <div className="figma-256" data-node-id="95:5267">
                                <p>
                                  <span className="figma-15"><T text="Next step:"/></span>
                                  <span className="figma-257"><T text=" Install light traps and contact Extension Hotline 16123 for approved bio-pesticide protocols."/></span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a href="tel:16123" className="figma-268" data-node-id="95:5268" data-name="Link">
                          <div className="figma-275">
                            <div className="figma-16" data-node-id="95:5269" data-name="Container">
                              <img alt="" className="figma-17" src={imgContainer10}/>
                            </div>
                            <div className="figma-13" data-node-id="95:5271" data-name="Container">
                              <div className="figma-58" data-node-id="95:5272">
                                <p className="figma-59"><T text="Call Hotline 16123"/></p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <button type="button" data-sources="true" className="figma-159" data-node-id="95:5273" data-name="Details → Slot → Summary">
                    <div className="figma-259" data-node-id="95:5274" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer7}/>
                    </div>
                    <div className="figma-13" data-node-id="95:5276" data-name="Container">
                      <div className="figma-260" data-node-id="95:5277">
                        <p className="figma-59"><T text="View sources"/></p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-276" data-node-id="95:5278" data-name="Editorial Knowledge Base Summary / Submit Prompt Footer">
            <div className="figma-48" data-node-id="95:5279" data-name="Container">
              <div className="figma-277" data-node-id="95:5280" data-name="Overlay">
                <div className="figma-278" data-node-id="95:5281" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer11}/>
                </div>
              </div>
              <div className="figma-279" data-node-id="95:5283" data-name="Container">
                <div className="figma-32" data-node-id="95:5284" data-name="Heading 3">
                  <div className="figma-131" data-node-id="95:5285">
                    <p className="figma-31"><T text="Can't find the claim you encountered?"/></p>
                  </div>
                </div>
                <div className="figma-32" data-node-id="95:5286" data-name="Container">
                  <div className="figma-280" data-node-id="95:5287">
                    <p className="figma-15"><T text="Submit any audio recording, flyer photo, or dealer advice. Our agronomy team evaluates unlisted claims in 24 hours."/></p>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" data-action={"Submit for Fast Evaluation"} className="figma-281" data-node-id="95:5288" data-name="Button">
              <div className="figma-282" data-node-id="95:5289">
                <p className="figma-15"><T text="Submit for Fast Evaluation"/></p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="figma-154" data-node-id="95:5290" data-name="Footer">
        <div className="figma-155" data-node-id="95:5291" data-name="Container">
          <div className="figma-156">
            <div className="figma-157" data-node-id="95:5292" data-name="HorizontalBorder">
              <div className="figma-97" data-node-id="95:5293" data-name="Container">
                <div className="figma-158">
                  <div className="figma-159" data-node-id="95:5294" data-name="Container">
                    <div className="figma-160" data-node-id="95:5295" data-name="Background">
                      <div className="figma-161" data-node-id="95:5296" data-name="Container">
                        <img alt="" className="figma-17" src={imgContainer12}/>
                      </div>
                    </div>
                    <div className="figma-13" data-node-id="95:5298" data-name="Container">
                      <div className="figma-131" data-node-id="95:5299">
                        <p className="figma-31"><T text="HarvestV"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="95:5300" data-name="Container">
                    <div className="figma-33" data-node-id="95:5301">
                      <p className="figma-35"><T text="Agro-minimal planning and precision crop"/></p>
                      <p className="figma-35"><T text="rotation for progressive Bangladeshi"/></p>
                      <p className="figma-15"><T text="farmers."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-97" data-node-id="95:5302" data-name="Container">
                <div className="figma-162">
                  <div className="figma-163" data-node-id="95:5303">
                    <p className="figma-15"><T text="Emergency & Support"/></p>
                  </div>
                  <div className="figma-164" data-node-id="95:5304" data-name="Container">
                    <div className="figma-165" data-node-id="95:5305" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer13}/>
                    </div>
                    <div className="figma-13" data-node-id="95:5307" data-name="Container">
                      <div className="figma-166" data-node-id="95:5308">
                        <p className="figma-31"><T text="16123"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="95:5309" data-name="Container">
                    <div className="figma-99" data-node-id="95:5310">
                      <p className="figma-167"><T text="National Agricultural Extension Call Center (Toll"/></p>
                      <p className="figma-8"><T text="Free)"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-97" data-node-id="95:5311" data-name="Container">
                <div className="figma-168">
                  <div className="figma-163" data-node-id="95:5312">
                    <p className="figma-15"><T text="Research Partners"/></p>
                  </div>
                  <div className="figma-169" data-node-id="95:5313" data-name="Container">
                    <div className="figma-32" data-node-id="95:5314" data-name="Container">
                      <div className="figma-170" data-node-id="95:5315">
                        <p className="figma-35"><T text="BARI (Bangladesh Agricultural Research"/></p>
                        <p className="figma-15"><T text="Institute)"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="95:5316" data-name="Container">
                      <div className="figma-170" data-node-id="95:5317">
                        <p className="figma-15"><T text="BRRI (Bangladesh Rice Research Institute)"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="95:5318" data-name="Container">
                    <div className="figma-99" data-node-id="95:5319">
                      <p className="figma-167"><T text="Field agronomy advisory calibrated with national"/></p>
                      <p className="figma-8"><T text="seed standards."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-97" data-node-id="95:5320" data-name="Container">
                <div className="figma-171">
                  <div className="figma-163" data-node-id="95:5321">
                    <p className="figma-15"><T text="Agronomic Governance"/></p>
                  </div>
                  <div className="figma-172" data-node-id="95:5322" data-name="Container">
                    <button type="button" data-action={"Crop Advisory Terms"} className="figma-32" data-node-id="95:5323" data-name="Link">
                      <div className="figma-34" data-node-id="95:5324">
                        <p className="figma-15"><T text="Crop Advisory Terms"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Privacy & Field Data Rights"} className="figma-32" data-node-id="95:5325" data-name="Link">
                      <div className="figma-34" data-node-id="95:5326">
                        <p className="figma-15"><T text="Privacy & Field Data Rights"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Soil Health Guidelines"} className="figma-32" data-node-id="95:5327" data-name="Link">
                      <div className="figma-34" data-node-id="95:5328">
                        <p className="figma-15"><T text="Soil Health Guidelines"/></p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-173" data-node-id="95:5329" data-name="Container">
              <div className="figma-13" data-node-id="95:5330" data-name="Container">
                <div className="figma-39" data-node-id="95:5331">
                  <p className="figma-8"><T text="© 2024 HarvestV Agronomy Systems. Developed under agro-minimal stewardship."/></p>
                </div>
              </div>
              <div className="figma-12" data-node-id="95:5332" data-name="Container">
                <div className="figma-174" data-node-id="95:5333" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer14}/>
                </div>
                <div className="figma-39" data-node-id="95:5335">
                  <p className="figma-8"><T text="Verified Agronomic Database"/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-175" data-node-id="95:5336" data-name="Header">
        <div className="figma-176" data-node-id="95:5337" data-name="Container">
          <div className="figma-177">
            <button type="button" data-action={"HarvestV"} className="figma-108" data-node-id="95:5338" data-name="Link">
              <div className="figma-178" data-node-id="95:5339" data-name="Background">
                <div className="figma-86" data-node-id="95:5340" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer15}/>
                </div>
              </div>
              <div className="figma-13" data-node-id="95:5342" data-name="Container">
                <div className="figma-32" data-node-id="95:5343" data-name="Container">
                  <div className="figma-179" data-node-id="95:5344">
                    <p className="figma-31"><T text="HarvestV"/></p>
                  </div>
                </div>
              </div>
            </button>
            <div className="figma-48" data-node-id="95:5347" data-name="Nav">
              <Link href="/" className="figma-180" data-node-id="95:5348" data-name="Link">
                <div className="figma-87" data-node-id="95:5349">
                  <p className="figma-15"><T text="Home"/></p>
                </div>
              </Link>
              <Link href="/dashboard" className="figma-180" data-node-id="95:5350" data-name="Link">
                <div className="figma-87" data-node-id="95:5351">
                  <p className="figma-15"><T text="Dashboard"/></p>
                </div>
              </Link>
              <Link href="/my-farm" className="figma-180" data-node-id="95:5352" data-name="Link">
                <div className="figma-87" data-node-id="95:5353">
                  <p className="figma-15"><T text="My Farm"/></p>
                </div>
              </Link>
              <Link href="/crop-rotation" className="figma-180" data-node-id="95:5354" data-name="Link">
                <div className="figma-87" data-node-id="95:5355">
                  <p className="figma-15"><T text="Crop Rotation"/></p>
                </div>
              </Link>
              <Link href="/information-check" className="figma-181" data-node-id="95:5356" data-name="Link">
                <div className="figma-182" data-node-id="95:5357">
                  <p className="figma-84"><T text="Information Check"/></p>
                </div>
              </Link>
              <Link href="/feedback" className="figma-180" data-node-id="95:5358" data-name="Link">
                <div className="figma-87" data-node-id="95:5359">
                  <p className="figma-15"><T text="Feedback"/></p>
                </div>
              </Link>
            </div>
            <div className="figma-48" data-node-id="95:5360" data-name="Container">
              <div className="figma-183" data-node-id="95:5361" data-name="Background+Border">
                <button type="button" data-action={"EN"} aria-pressed={language === "en"} lang="en" className="figma-62" data-node-id="95:5362" data-name="Button">
                  <div className="figma-63">
                    <div className="figma-64" data-node-id="95:5363">
                      <p className="figma-59"><T text="EN"/></p>
                    </div>
                  </div>
                </button>
                <button type="button" data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn" className="figma-38" data-node-id="95:5364" data-name="Button">
                  <div className="figma-63">
                    <div className="figma-184" data-node-id="95:5365">
                      <p className="figma-59"><T text="বাংলা"/></p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="figma-185" data-node-id="95:5366" data-name="Background+Border">
                <div className="figma-38" data-node-id="95:5367" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-186" data-node-id="95:5368" data-name="Container">
                      <div className="figma-187" data-node-id="95:5369">
                        <p className="figma-59"><T text="Abdur Rashid"/></p>
                      </div>
                    </div>
                    <div className="figma-186" data-node-id="95:5370" data-name="Container">
                      <div className="figma-188" data-node-id="95:5371">
                        <p className="figma-8"><T text="+880 1712-849201"/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-95" data-node-id="95:5372" data-name="Background">
                  <div className="figma-96">
                    <div className="figma-16" data-node-id="95:5373" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer16}/>
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
