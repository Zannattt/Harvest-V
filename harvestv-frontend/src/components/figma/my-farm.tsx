"use client";
import {T,useLanguage} from "@/lib/language";
import { PhotoUpload, SoilTests } from "@/components/field-controls";
import Link from "next/link";
const assetPathPrefix = "/figma/my-farm";
const imgBackgroundBorderShadow = `${assetPathPrefix}/2ccee.png`;
const imgContainer = `${assetPathPrefix}/2e66f.svg`;
const imgContainer1 = `${assetPathPrefix}/75a42.svg`;
const imgIcon = `${assetPathPrefix}/d3fae.svg`;
const imgContainer2 = `${assetPathPrefix}/78ce3.svg`;
const imgContainer3 = `${assetPathPrefix}/37d49.svg`;
const imgContainer4 = `${assetPathPrefix}/28705.svg`;
const imgContainer5 = `${assetPathPrefix}/f3849.svg`;
const imgMargin = `${assetPathPrefix}/8be80.svg`;
const imgIcon1 = `${assetPathPrefix}/cf258.svg`;
const imgContainer6 = `${assetPathPrefix}/ec6dc.svg`;
const imgButton = `${assetPathPrefix}/9ae83.svg`;
const imgContainer7 = `${assetPathPrefix}/d54dc.svg`;
const imgContainer8 = `${assetPathPrefix}/8dbd8.svg`;
const imgIcon2 = `${assetPathPrefix}/15216.svg`;
const imgContainer9 = `${assetPathPrefix}/202ff.svg`;
const imgContainer10 = `${assetPathPrefix}/d1196.svg`;
const imgIcon3 = `${assetPathPrefix}/e0b87.svg`;
const imgContainer11 = `${assetPathPrefix}/e7598.svg`;
const imgContainer12 = `${assetPathPrefix}/e7131.svg`;
const imgContainer13 = `${assetPathPrefix}/16b15.svg`;
const imgContainer14 = `${assetPathPrefix}/93f84.svg`;
const imgContainer15 = `${assetPathPrefix}/a37d0.svg`;
const imgContainer16 = `${assetPathPrefix}/37a44.svg`;
const imgContainer17 = `${assetPathPrefix}/59e02.svg`;
export default function MyFarmHarvestV() {
    const {t,language}=useLanguage();
    return (<div className="figma-190" data-node-id="95:4404" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 249, 245) 0%, rgb(250, 249, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="My Farm - HarvestV">
      <div className="figma-191" data-node-id="95:4405" data-name="Main">
        <div className="figma-42" data-node-id="95:4406" data-name="Container">
          <div className="figma-192" data-node-id="95:4407" data-name="Section - Primary Page Header Block">
            <div className="figma-193" data-node-id="95:4408" data-name="Container">
              <div className="figma-194" data-node-id="95:4409" data-name="Container">
                <div className="figma-33" data-node-id="95:4410" data-name="Container">
                  <div className="figma-38" data-node-id="95:4411" data-name="Background"/>
                  <div className="figma-195" data-node-id="95:4412">
                    <p className="figma-15"><T text="LAND & SOIL REGISTRATION"/></p>
                  </div>
                </div>
                <div className="figma-196" data-node-id="95:4413" data-name="Heading 1">
                  <div className="figma-197" data-node-id="95:4414">
                    <p className="figma-44"><T text="My Farm & Field Profiles"/></p>
                  </div>
                </div>
                <div className="figma-198" data-node-id="95:4415" data-name="Container">
                  <div className="figma-199" data-node-id="95:4416">
                    <p className="figma-61"><T text="Register plot boundaries, soil characteristics, and irrigation infrastructure to calibrate local crop"/></p>
                    <p className="figma-62"><T text="rotation advisories and soil health indexes."/></p>
                  </div>
                </div>
              </div>
              <div className="figma-200" data-node-id="95:4417" data-name="Container">
                <button type="button" data-action={"Cadastral Export"} className="figma-201" data-node-id="95:4418" data-name="Button">
                  <div className="figma-122" data-node-id="95:4419" data-name="Container">
                    <img alt="" className="figma-7" src={imgContainer}/>
                  </div>
                  <div className="figma-27" data-node-id="95:4421" data-name="Container">
                    <div className="figma-23" data-node-id="95:4422">
                      <p className="figma-19"><T text="Cadastral Export"/></p>
                    </div>
                  </div>
                </button>
                <button type="button" data-action={"Register New Field"} className="figma-202" data-node-id="95:4423" data-name="Button">
                  <div className="figma-26" data-node-id="95:4424" data-name="Container">
                    <img alt="" className="figma-7" src={imgContainer1}/>
                  </div>
                  <div className="figma-27" data-node-id="95:4426" data-name="Container">
                    <div className="figma-203" data-node-id="95:4427">
                      <p className="figma-19"><T text="Register New Field"/></p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="figma-204" data-node-id="95:4428" data-name="Main Content Layout: Asymmetrical Master-Detail Grid">
            <div className="figma-205" data-node-id="95:4429" data-name="Container">
              <div className="figma-206" data-node-id="95:4430" data-name="Section">
                <div className="figma-207" data-node-id="95:4431" data-name="HorizontalBorder">
                  <div className="figma-208">
                    <div className="figma-71" data-node-id="95:4432" data-name="Container">
                      <div className="figma-55">
                        <div className="figma-33" data-node-id="95:4433" data-name="Container">
                          <div className="figma-209" data-node-id="95:4434" data-name="Background">
                            <div className="figma-210" data-node-id="95:4435">
                              <p className="figma-211"><T text="1"/></p>
                            </div>
                          </div>
                          <div className="figma-212" data-node-id="95:4436">
                            <p className="figma-12"><T text="Location"/></p>
                          </div>
                        </div>
                        <div className="figma-199" data-node-id="95:4437">
                          <p className="figma-62"><T text="We use your location to recommend crops suited to your local weather and soil."/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-213" data-node-id="95:4438" data-name="Icon">
                      <img alt="" className="figma-7" src={imgIcon}/>
                    </div>
                  </div>
                </div>
                <div className="figma-127" data-node-id="95:4439" data-name="Container">
                  <div className="figma-214">
                    <button type="button" data-action={"Use my current location"} className="figma-215" data-node-id="95:4440" data-name="Button">
                      <div className="figma-216" data-node-id="95:4441" data-name="Container">
                        <img alt="" className="figma-7" src={imgContainer2}/>
                      </div>
                      <div className="figma-27" data-node-id="95:4443" data-name="Container">
                        <div className="figma-217" data-node-id="95:4444">
                          <p className="figma-19"><T text="Use my current location"/></p>
                        </div>
                      </div>
                    </button>
                    <button type="button" data-action={"Manual entry"} className="figma-218" data-node-id="95:4445" data-name="Button">
                      <div className="figma-219" data-node-id="95:4446" data-name="Container">
                        <img alt="" className="figma-7" src={imgContainer3}/>
                      </div>
                      <div className="figma-71" data-node-id="95:4448" data-name="Container">
                        <div className="figma-72">
                          <div className="figma-23" data-node-id="95:4449">
                            <p className="figma-19"><T text="Manual entry"/></p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="figma-127" data-node-id="95:4450" data-name="Container">
                  <div className="figma-220">
                    <div className="figma-221" data-node-id="95:4451" data-name="Container">
                      <div className="figma-42" data-node-id="95:4452" data-name="Label">
                        <div className="figma-222" data-node-id="95:4453">
                          <p className="figma-36"><T text="Administrative Division"/></p>
                        </div>
                      </div>
                      <input name="division" aria-label={t("division")} defaultValue="Mymensingh" className="figma-223" data-node-id="95:4454" data-name="Input"/>
                    </div>
                    <div className="figma-221" data-node-id="95:4457" data-name="Container">
                      <div className="figma-42" data-node-id="95:4458" data-name="Label">
                        <div className="figma-222" data-node-id="95:4459">
                          <p className="figma-36"><T text="Upazila / Sub-district"/></p>
                        </div>
                      </div>
                      <input name="upazila" aria-label={t("upazila")} defaultValue="Trishal" className="figma-223" data-node-id="95:4460" data-name="Input"/>
                    </div>
                    <div className="figma-221" data-node-id="95:4463" data-name="Container">
                      <div className="figma-42" data-node-id="95:4464" data-name="Label">
                        <div className="figma-222" data-node-id="95:4465">
                          <p className="figma-36"><T text="Mauza / CS Plot Number"/></p>
                        </div>
                      </div>
                      <input name="plot" aria-label={t("plot")} defaultValue="Balipara No. 4, Plot #14" className="figma-223" data-node-id="95:4466" data-name="Input"/>
                    </div>
                  </div>
                </div>
                <div className="figma-127" data-node-id="95:4469" data-name="Container">
                  <div className="figma-55">
                    <div className="figma-42" data-node-id="95:4470" data-name="Label">
                      <div className="figma-222" data-node-id="95:4471">
                        <p className="figma-36"><T text="Plot Map Preview"/></p>
                      </div>
                    </div>
                    <div className="figma-224" data-node-id="95:4472" data-name="Background+Border+Shadow">
                      <div aria-hidden className="figma-225" style={{ backgroundImage: `url("${imgBackgroundBorderShadow}")` }}/>
                      <div className="figma-226" data-node-id="95:4473" data-name="Overlay"/>
                      <div className="figma-227" data-node-id="95:4474" data-name="Background+Shadow+OverlayBlur">
                        <div className="figma-17" data-node-id="95:4475" data-name="Background"/>
                        <div className="figma-228" data-node-id="95:4476">
                          <p className="figma-15"><T text="24.5828° N, 90.3984° E"/></p>
                        </div>
                      </div>
                      <div className="figma-229" data-node-id="95:4477" data-name="Container">
                        <div className="figma-230" data-node-id="95:4478" data-name="Background">
                          <div className="figma-231" data-node-id="95:4479" data-name="Overlay+Shadow"/>
                          <div className="figma-22" data-node-id="95:4480" data-name="Container">
                            <img alt="" className="figma-7" src={imgContainer4}/>
                          </div>
                        </div>
                        <div className="figma-232" data-node-id="95:4482" data-name="Margin">
                          <div className="figma-233" data-node-id="95:4483" data-name="Overlay+OverlayBlur">
                            <div className="figma-234" data-node-id="95:4484">
                              <p className="figma-15"><T text="CS Plot #14"/></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-235" data-node-id="95:4485" data-name="Container">
                        <div className="figma-236" data-node-id="95:4486" data-name="Background+Shadow+OverlayBlur">
                          <div className="figma-237" data-node-id="95:4487">
                            <p className="figma-15"><T text="Perimeter: 312m"/></p>
                          </div>
                        </div>
                        <button type="button" data-action={"Confirm farm location"} className="figma-238" data-node-id="95:4488" data-name="Button">
                          <div className="figma-239" data-node-id="95:4489" data-name="Button:shadow"/>
                          <div className="figma-240" data-node-id="95:4490" data-name="Container">
                            <img alt="" className="figma-7" src={imgContainer5}/>
                          </div>
                          <div className="figma-27" data-node-id="95:4492" data-name="Container">
                            <div className="figma-241" data-node-id="95:4493">
                              <p className="figma-36"><T text="Confirm farm location"/></p>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="figma-242"/>
                    </div>
                  </div>
                </div>
                <div className="figma-243" data-node-id="95:4494" data-name="Overlay">
                  <div className="figma-244">
                    <div className="figma-245" data-node-id="95:4495" data-name="Margin">
                      <img alt="" className="figma-7" src={imgMargin}/>
                    </div>
                    <div className="figma-105" data-node-id="95:4497">
                      <p className="figma-246"><T text="GPS coordinates will not overwrite your manual entries if connection drops."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-206" data-node-id="95:4498" data-name="Section">
                <div className="figma-207" data-node-id="95:4499" data-name="HorizontalBorder">
                  <div className="figma-208">
                    <div className="figma-71" data-node-id="95:4500" data-name="Container">
                      <div className="figma-55">
                        <div className="figma-33" data-node-id="95:4501" data-name="Container">
                          <div className="figma-209" data-node-id="95:4502" data-name="Background">
                            <div className="figma-210" data-node-id="95:4503">
                              <p className="figma-211"><T text="2"/></p>
                            </div>
                          </div>
                          <div className="figma-212" data-node-id="95:4504">
                            <p className="figma-12"><T text="Crops"/></p>
                          </div>
                        </div>
                        <div className="figma-199" data-node-id="95:4505">
                          <p className="figma-62"><T text="Configure current standing crop and previous succession history."/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-247" data-node-id="95:4506" data-name="Icon">
                      <img alt="" className="figma-7" src={imgIcon1}/>
                    </div>
                  </div>
                </div>
                <div className="figma-127" data-node-id="95:4507" data-name="Container">
                  <div className="figma-248">
                    <div className="figma-42" data-node-id="95:4508" data-name="Label">
                      <div className="figma-222" data-node-id="95:4509">
                        <p className="figma-36"><T text="Current Standing Crop"/></p>
                      </div>
                    </div>
                    <div className="figma-249" data-node-id="95:4510" data-name="Background+Border">
                      <div className="figma-71" data-node-id="95:4511" data-name="Container">
                        <div className="figma-250">
                          <div className="figma-251" data-node-id="95:4512" data-name="Background">
                            <div className="figma-252" data-node-id="95:4513" data-name="Container">
                              <img alt="" className="figma-7" src={imgContainer6}/>
                            </div>
                          </div>
                          <div className="figma-253" data-node-id="95:4515" data-name="Container">
                            <div className="figma-42" data-node-id="95:4516" data-name="Heading 3">
                              <div className="figma-254" data-node-id="95:4517">
                                <p className="figma-19"><T text="Boro Rice — BRRI dhan29"/></p>
                              </div>
                            </div>
                            <div className="figma-96" data-node-id="95:4518">
                              <p className="figma-15"><T text="Transplanted: Nov 28, 2024 • Panicle Initiation Stage"/></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" data-action={"Change Crop"} className="figma-71" data-node-id="95:4519" data-name="Button">
                        <div className="figma-255">
                          <div className="figma-256" data-node-id="95:4520">
                            <p className="figma-36"><T text="Change Crop"/></p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="figma-127" data-node-id="95:4521" data-name="Container">
                  <div className="figma-55">
                    <div className="figma-56" data-node-id="95:4522" data-name="Container">
                      <div className="figma-10" data-node-id="95:4523" data-name="Label">
                        <div className="figma-257" data-node-id="95:4524">
                          <p className="figma-36"><T text="Previous Crops"/></p>
                        </div>
                      </div>
                      <div className="figma-10" data-node-id="95:4525" data-name="Container">
                        <div className="figma-96" data-node-id="95:4526">
                          <p className="figma-15"><T text="Last 2 cycles"/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-258" data-node-id="95:4527" data-name="Container">
                      <div className="figma-259" data-node-id="95:4528" data-name="Background">
                        <div className="figma-10" data-node-id="95:4529" data-name="Container">
                          <div className="figma-260" data-node-id="95:4530">
                            <p className="figma-36"><T text="T. Aman (BRRI dhan49)"/></p>
                          </div>
                        </div>
                        <button type="button" data-action={""} className="figma-261" data-node-id="95:4531" data-name="Button">
                          <img alt="" className="figma-7" src={imgButton}/>
                        </button>
                      </div>
                      <div className="figma-259" data-node-id="95:4533" data-name="Background">
                        <div className="figma-10" data-node-id="95:4534" data-name="Container">
                          <div className="figma-260" data-node-id="95:4535">
                            <p className="figma-36"><T text="Tossa Jute (Kharif-1)"/></p>
                          </div>
                        </div>
                        <button type="button" data-action={""} className="figma-261" data-node-id="95:4536" data-name="Button">
                          <img alt="" className="figma-7" src={imgButton}/>
                        </button>
                      </div>
                      <button type="button" data-action={"Add Crop"} className="figma-262" data-node-id="95:4538" data-name="Button">
                        <div className="figma-263" data-node-id="95:4539" data-name="Container">
                          <img alt="" className="figma-7" src={imgContainer7}/>
                        </div>
                        <div className="figma-71" data-node-id="95:4541" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-264" data-node-id="95:4542">
                              <p className="figma-36"><T text="Add Crop"/></p>
                            </div>
                          </div>
                        </div>
                      </button>
                      <button type="button" data-action={"I don't know"} className="figma-265" data-node-id="95:4543" data-name="Button">
                        <div className="figma-240" data-node-id="95:4544" data-name="Container">
                          <img alt="" className="figma-7" src={imgContainer8}/>
                        </div>
                        <div className="figma-71" data-node-id="95:4546" data-name="Container">
                          <div className="figma-72">
                            <div className="figma-266" data-node-id="95:4547">
                              <p className="figma-36"><T text="I don't know"/></p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-206" data-node-id="95:4548" data-name="Section">
                <div className="figma-207" data-node-id="95:4549" data-name="HorizontalBorder">
                  <div className="figma-208">
                    <div className="figma-71" data-node-id="95:4550" data-name="Container">
                      <div className="figma-55">
                        <div className="figma-33" data-node-id="95:4551" data-name="Container">
                          <div className="figma-209" data-node-id="95:4552" data-name="Background">
                            <div className="figma-210" data-node-id="95:4553">
                              <p className="figma-211"><T text="3"/></p>
                            </div>
                          </div>
                          <div className="figma-212" data-node-id="95:4554">
                            <p className="figma-12"><T text="Soil"/></p>
                          </div>
                        </div>
                        <div className="figma-199" data-node-id="95:4555">
                          <p className="figma-62"><T text="Select your primary soil texture for accurate irrigation and fertilizer schedules."/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-267" data-node-id="95:4556" data-name="Icon">
                      <img alt="" className="figma-7" src={imgIcon2}/>
                    </div>
                  </div>
                </div>
                <div className="figma-127" data-node-id="95:4557" data-name="Container">
                  <div className="figma-268">
                    <div className="figma-42" data-node-id="95:4558" data-name="Label">
                      <div className="figma-222" data-node-id="95:4559">
                        <p className="figma-36"><T text="Primary Soil Texture"/></p>
                      </div>
                    </div>
                    <div className="figma-269" data-node-id="95:4560" data-name="Container">
                      <button type="button" data-action={"Silt Loam"} className="figma-270" data-node-id="95:4561" data-name="Button">
                        <div className="figma-68" data-node-id="95:4562" data-name="Container">
                          <img alt="" className="figma-7" src={imgContainer9}/>
                        </div>
                        <div className="figma-27" data-node-id="95:4564" data-name="Container">
                          <div className="figma-217" data-node-id="95:4565">
                            <p className="figma-19"><T text="Silt Loam"/></p>
                          </div>
                        </div>
                      </button>
                      <button type="button" data-action={"Clay Loam"} className="figma-271" data-node-id="95:4566" data-name="Button">
                        <div className="figma-23" data-node-id="95:4567">
                          <p className="figma-19"><T text="Clay Loam"/></p>
                        </div>
                      </button>
                      <button type="button" data-action={"Sandy Loam"} className="figma-272" data-node-id="95:4568" data-name="Button">
                        <div className="figma-23" data-node-id="95:4569">
                          <p className="figma-19"><T text="Sandy Loam"/></p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <SoilTests />
              </div>
              <div className="figma-206" data-node-id="95:4576" data-name="Section">
                <div className="figma-207" data-node-id="95:4577" data-name="HorizontalBorder">
                  <div className="figma-208">
                    <div className="figma-71" data-node-id="95:4578" data-name="Container">
                      <div className="figma-55">
                        <div className="figma-33" data-node-id="95:4579" data-name="Container">
                          <div className="figma-209" data-node-id="95:4580" data-name="Background">
                            <div className="figma-210" data-node-id="95:4581">
                              <p className="figma-211"><T text="4"/></p>
                            </div>
                          </div>
                          <div className="figma-212" data-node-id="95:4582">
                            <p className="figma-12"><T text="Water"/></p>
                          </div>
                        </div>
                        <div className="figma-199" data-node-id="95:4583">
                          <p className="figma-62"><T text="Select your primary irrigation and water supply method."/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-273" data-node-id="95:4584" data-name="Icon">
                      <img alt="" className="figma-7" src={imgIcon3}/>
                    </div>
                  </div>
                </div>
                <div className="figma-127" data-node-id="95:4585" data-name="Container">
                  <div className="figma-274">
                    <div className="figma-275" data-node-id="95:4586" data-name="Label">
                      <div className="figma-276" data-node-id="95:4587" data-name="Label:shadow"/>
                      <label aria-label={t("Deep Tube Well")} className="figma-277" data-node-id="95:4588" data-name="Input"><input type="radio" name="water" value="Deep Tube Well" defaultChecked={true} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}/>
                        <div className="figma-278" data-node-id="95:4589" data-name="Input:checked"/>
                      </label>
                      <div className="figma-10" data-node-id="95:4590" data-name="Container">
                        <div className="figma-254" data-node-id="95:4591">
                          <p className="figma-19"><T text="Deep Tube Well"/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-279" data-node-id="95:4592" data-name="Label">
                      <label aria-label={t("Shallow Tube Well")} className="figma-280" data-node-id="95:4593" data-name="Input"><input type="radio" name="water" value="Shallow Tube Well" defaultChecked={false} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}/></label>
                      <div className="figma-71" data-node-id="95:4594" data-name="Container">
                        <div className="figma-128">
                          <div className="figma-254" data-node-id="95:4595">
                            <p className="figma-19"><T text="Shallow Tube Well"/></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="figma-281" data-node-id="95:4596" data-name="Label">
                      <label aria-label={t("Canal / Pond")} className="figma-280" data-node-id="95:4597" data-name="Input"><input type="radio" name="water" value="Canal / Pond" defaultChecked={false} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}/></label>
                      <div className="figma-71" data-node-id="95:4598" data-name="Container">
                        <div className="figma-128">
                          <div className="figma-254" data-node-id="95:4599">
                            <p className="figma-19"><T text="Canal / Pond"/></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="figma-282" data-node-id="95:4600" data-name="Label">
                      <label aria-label={t("Rainfed")} className="figma-280" data-node-id="95:4601" data-name="Input"><input type="radio" name="water" value="Rainfed" defaultChecked={false} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}/></label>
                      <div className="figma-71" data-node-id="95:4602" data-name="Container">
                        <div className="figma-128">
                          <div className="figma-254" data-node-id="95:4603">
                            <p className="figma-19"><T text="Rainfed"/></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-283" data-node-id="95:4604" data-name="Background+Border">
                <div className="figma-71" data-node-id="95:4605" data-name="Container">
                  <div className="figma-284">
                    <div className="figma-285" data-node-id="95:4606" data-name="Container">
                      <img alt="" className="figma-7" src={imgContainer11}/>
                    </div>
                    <div className="figma-10" data-node-id="95:4608" data-name="Container">
                      <div className="figma-96" data-node-id="95:4609">
                        <p className="figma-15"><T text="Autosaved locally"/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-71" data-node-id="95:4610" data-name="Container">
                  <div className="figma-250">
                    <button type="button" data-action={"Discard changes"} className="figma-286" data-node-id="95:4611" data-name="Button">
                      <div className="figma-23" data-node-id="95:4612">
                        <p className="figma-19"><T text="Discard changes"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Save Farm"} className="figma-287" data-node-id="95:4613" data-name="Button">
                      <div className="figma-288" data-node-id="95:4614" data-name="Button:shadow"/>
                      <div className="figma-68" data-node-id="95:4615" data-name="Container">
                        <img alt="" className="figma-7" src={imgContainer12}/>
                      </div>
                      <div className="figma-27" data-node-id="95:4617" data-name="Container">
                        <div className="figma-217" data-node-id="95:4618">
                          <p className="figma-19"><T text="Save Farm"/></p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-289" data-node-id="95:4619" data-name="Footer">
        <div className="figma-290" data-node-id="95:4620" data-name="Container">
          <div className="figma-291">
            <div className="figma-292" data-node-id="95:4621" data-name="HorizontalBorder">
              <div className="figma-54" data-node-id="95:4622" data-name="Container">
                <div className="figma-293">
                  <div className="figma-103" data-node-id="95:4623" data-name="Container">
                    <div className="figma-294" data-node-id="95:4624" data-name="Background">
                      <div className="figma-295" data-node-id="95:4625" data-name="Container">
                        <img alt="" className="figma-7" src={imgContainer13}/>
                      </div>
                    </div>
                    <div className="figma-10" data-node-id="95:4627" data-name="Container">
                      <div className="figma-212" data-node-id="95:4628">
                        <p className="figma-12"><T text="HarvestV"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="95:4629" data-name="Container">
                    <div className="figma-134" data-node-id="95:4630">
                      <p className="figma-64"><T text="Agro-minimal planning and precision crop"/></p>
                      <p className="figma-64"><T text="rotation for progressive Bangladeshi"/></p>
                      <p className="figma-19"><T text="farmers."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-54" data-node-id="95:4631" data-name="Container">
                <div className="figma-296">
                  <div className="figma-254" data-node-id="95:4632">
                    <p className="figma-19"><T text="Emergency & Support"/></p>
                  </div>
                  <div className="figma-297" data-node-id="95:4633" data-name="Container">
                    <div className="figma-298" data-node-id="95:4634" data-name="Container">
                      <img alt="" className="figma-7" src={imgContainer14}/>
                    </div>
                    <div className="figma-10" data-node-id="95:4636" data-name="Container">
                      <div className="figma-299" data-node-id="95:4637">
                        <p className="figma-12"><T text="16123"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="95:4638" data-name="Container">
                    <div className="figma-187" data-node-id="95:4639">
                      <p className="figma-85"><T text="National Agricultural Extension Call Center (Toll"/></p>
                      <p className="figma-15"><T text="Free)"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-54" data-node-id="95:4640" data-name="Container">
                <div className="figma-300">
                  <div className="figma-254" data-node-id="95:4641">
                    <p className="figma-19"><T text="Research Partners"/></p>
                  </div>
                  <div className="figma-301" data-node-id="95:4642" data-name="Container">
                    <div className="figma-42" data-node-id="95:4643" data-name="Container">
                      <div className="figma-302" data-node-id="95:4644">
                        <p className="figma-64"><T text="BARI (Bangladesh Agricultural Research"/></p>
                        <p className="figma-19"><T text="Institute)"/></p>
                      </div>
                    </div>
                    <div className="figma-42" data-node-id="95:4645" data-name="Container">
                      <div className="figma-302" data-node-id="95:4646">
                        <p className="figma-19"><T text="BRRI (Bangladesh Rice Research Institute)"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="95:4647" data-name="Container">
                    <div className="figma-187" data-node-id="95:4648">
                      <p className="figma-85"><T text="Field agronomy advisory calibrated with national"/></p>
                      <p className="figma-15"><T text="seed standards."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-54" data-node-id="95:4649" data-name="Container">
                <div className="figma-303">
                  <div className="figma-254" data-node-id="95:4650">
                    <p className="figma-19"><T text="Agronomic Governance"/></p>
                  </div>
                  <div className="figma-304" data-node-id="95:4651" data-name="Container">
                    <button type="button" data-action={"Crop Advisory Terms"} className="figma-42" data-node-id="95:4652" data-name="Link">
                      <div className="figma-135" data-node-id="95:4653">
                        <p className="figma-19"><T text="Crop Advisory Terms"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Privacy & Field Data Rights"} className="figma-42" data-node-id="95:4654" data-name="Link">
                      <div className="figma-135" data-node-id="95:4655">
                        <p className="figma-19"><T text="Privacy & Field Data Rights"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Soil Health Guidelines"} className="figma-42" data-node-id="95:4656" data-name="Link">
                      <div className="figma-135" data-node-id="95:4657">
                        <p className="figma-19"><T text="Soil Health Guidelines"/></p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-305" data-node-id="95:4658" data-name="Container">
              <div className="figma-10" data-node-id="95:4659" data-name="Container">
                <div className="figma-96" data-node-id="95:4660">
                  <p className="figma-15"><T text="© 2024 HarvestV Agronomy Systems. Developed under agro-minimal stewardship."/></p>
                </div>
              </div>
              <div className="figma-120" data-node-id="95:4661" data-name="Container">
                <div className="figma-306" data-node-id="95:4662" data-name="Container">
                  <img alt="" className="figma-7" src={imgContainer15}/>
                </div>
                <div className="figma-96" data-node-id="95:4664">
                  <p className="figma-15"><T text="Verified Agronomic Database"/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-307" data-node-id="95:4665" data-name="Header">
        <div className="figma-308" data-node-id="95:4666" data-name="Container">
          <div className="figma-309">
            <button type="button" data-action={"HarvestV"} className="figma-33" data-node-id="95:4667" data-name="Link">
              <div className="figma-310" data-node-id="95:4668" data-name="Background">
                <div className="figma-176" data-node-id="95:4669" data-name="Container">
                  <img alt="" className="figma-7" src={imgContainer16}/>
                </div>
              </div>
              <div className="figma-10" data-node-id="95:4671" data-name="Container">
                <div className="figma-42" data-node-id="95:4672" data-name="Container">
                  <div className="figma-311" data-node-id="95:4673">
                    <p className="figma-12"><T text="HarvestV"/></p>
                  </div>
                </div>
              </div>
            </button>
            <div className="figma-4" data-node-id="95:4676" data-name="Nav">
              <Link href="/" className="figma-312" data-node-id="95:4677" data-name="Link">
                <div className="figma-177" data-node-id="95:4678">
                  <p className="figma-19"><T text="Home"/></p>
                </div>
              </Link>
              <Link href="/dashboard" className="figma-312" data-node-id="95:4679" data-name="Link">
                <div className="figma-177" data-node-id="95:4680">
                  <p className="figma-19"><T text="Dashboard"/></p>
                </div>
              </Link>
              <Link href="/my-farm" className="figma-313" data-node-id="95:4681" data-name="Link">
                <div className="figma-314" data-node-id="95:4682">
                  <p className="figma-62"><T text="My Farm"/></p>
                </div>
              </Link>
              <Link href="/crop-rotation" className="figma-312" data-node-id="95:4683" data-name="Link">
                <div className="figma-177" data-node-id="95:4684">
                  <p className="figma-19"><T text="Crop Rotation"/></p>
                </div>
              </Link>
              <Link href="/information-check" className="figma-312" data-node-id="95:4685" data-name="Link">
                <div className="figma-177" data-node-id="95:4686">
                  <p className="figma-19"><T text="Information Check"/></p>
                </div>
              </Link>
              <Link href="/feedback" className="figma-312" data-node-id="95:4687" data-name="Link">
                <div className="figma-177" data-node-id="95:4688">
                  <p className="figma-19"><T text="Feedback"/></p>
                </div>
              </Link>
            </div>
            <div className="figma-4" data-node-id="95:4689" data-name="Container">
              <div className="figma-315" data-node-id="95:4690" data-name="Background+Border">
                <button type="button" data-action={"EN"} aria-pressed={language === "en"} lang="en" className="figma-154" data-node-id="95:4691" data-name="Button">
                  <div className="figma-155">
                    <div className="figma-156" data-node-id="95:4692">
                      <p className="figma-36"><T text="EN"/></p>
                    </div>
                  </div>
                </button>
                <button type="button" data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn" className="figma-71" data-node-id="95:4693" data-name="Button">
                  <div className="figma-155">
                    <div className="figma-316" data-node-id="95:4694">
                      <p className="figma-36"><T text="বাংলা"/></p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="figma-317" data-node-id="95:4695" data-name="Background+Border">
                <div className="figma-71" data-node-id="95:4696" data-name="Container">
                  <div className="figma-128">
                    <div className="figma-318" data-node-id="95:4697" data-name="Container">
                      <div className="figma-319" data-node-id="95:4698">
                        <p className="figma-36"><T text="Abdur Rashid"/></p>
                      </div>
                    </div>
                    <div className="figma-318" data-node-id="95:4699" data-name="Container">
                      <div className="figma-320" data-node-id="95:4700">
                        <p className="figma-15"><T text="+880 1712-849201"/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-185" data-node-id="95:4701" data-name="Background">
                  <div className="figma-52">
                    <div className="figma-122" data-node-id="95:4702" data-name="Container">
                      <img alt="" className="figma-7" src={imgContainer17}/>
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
