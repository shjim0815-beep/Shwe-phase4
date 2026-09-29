const wells = {
  "SHD-Q": {
    field:"SHWE", color:"#2bd9c5", status:"BOP repair", statusClass:"critical", report:"ST2 DDR Day 38", ddrDate:"28 Sep 2026",
    subtitle:"ST2 reached section TD. Completion readiness is gated by BOP annular repair.",
    operation:"Upper / lower annular element change-out preparation",
    operationNote:"Fault finding showed both annular elements require replacement. LMRP was split and moved to the maintenance stand.",
    md:3556.0, tvd:2967.6, planMd:3555.6, planTvd:2967.1, water:124.0, hole:"8½″", mud:"9.90 ppg", casing:"9⅝″ @ 3,509.6 m", progress:100,
    npt:801.25, unplanned:7.5, bluewhale:460.0, nptNote:"Official TP recorder through 02 Sep; latest DDR reports 16 h T-time.",
    nextSteps:[
      ["01","Remove upper and lower annular assemblies","Change elements and cap seals; inspect sealing surfaces."],
      ["02","Reassemble and test LMRP","Complete function / pressure acceptance before BOP splash."],
      ["03","Close top-drive load-path inspection","Reassemble port and starboard TDX with traceable sign-off."]
    ],
    decisions:["Confirm annular spares and cap seals are on board before strip-down.","Protect the 04 Oct BOP splash estimate with a test-and-repair contingency window.","Reconcile current T-time with the 02 Sep party-attributed NPT cut-off."],
    trajectory:[[0,0,0,0,0],[250.4,250.4,-.1,.1,205.5],[463.2,463.2,-.1,.5,281.1],[676.4,676.4,-.6,.4,215.7],[880.9,880.4,9.7,8.9,147.9],[1198.3,1178.7,111.5,30.2,148.2],[1519.8,1431.9,308.7,40.5,150.9],[1834.7,1669.8,514.9,40.5,147.8],[2071.5,1850.3,668.1,37.5,151.6],[2391.4,2097.2,871.3,41.2,149.3],[2669.5,2306.7,1054.2,40.8,149.3],[2947.8,2517.2,1236.3,41.8,149.1],[3265.7,2756.7,1445.2,41.2,150.0],[3539.2,2955.4,1633.0,45.0,149.4]],
    casingShoes:[{n:"20″",md:721.4,tvd:721.4},{n:"13⅜″",md:2026.5,tvd:1816.0},{n:"9⅝″",md:3509.6,tvd:2934.4}],
    timeDepth:{plan:[[0,0],[6,730],[18,2032],[35,3555.6]],actual:[[0,0],[4,242],[7,727],[120,727],[145,2032],[175,3516],[218,3556]],npt:[[145,2032],[176,3516],[218,3556]],elapsed:218,variance:"+183 d vs continuous P50",productive:"48.0 d",stop:"33.4 d TP + suspension"},
    bha:{current:"Run 1200 · 8½ in HS",length:"~182 m",parts:[["8½ PDC","0.3 m"],["Directional","9.0 m"],["MWD/LWD","18.0 m"],["Jars","9.5 m"],["HWDP","145 m"]],runs:[
      ["R1200","8½″ HS","PDC","Reservoir / production section","TD 3,556 m"],["R1100","12¼″ iCruise RLL","PDC","ST2 kick-off and drill-ahead","TD 3,516 m"],["R1000","12¼″ iCruise","PDC","ST2 cement plug / sidetrack","Kick-off"],["R900","12¼″ RSS","PDC","ST1 drill-ahead","Fish avoidance"],["R500","17½″ RSS","PDC","Intermediate hole","TD 2,032 m"]]},
    params:{ROP:[0,5,9,"m/h"],RPM:[70,120,121,"rpm"],WOB:[10,15,15,"klbf"],FLOW:[400,600,604,"gpm"],SPP:[2200,4470,4670,"psi"],ECD:[12.8,12.8,12.8,"ppg"]},
    issues:[
      {level:"OPEN",hours:"16 h",unit:"latest DDR",title:"Upper / lower BOP annular failed acceptance",desc:"Fault-finding pressure tests showed both annular elements require replacement, stopping BOP readiness work.",cause:"Annular element sealing integrity below acceptance; final failure mechanism to be confirmed during strip-down.",response:"Split LMRP, remove both annular assemblies, replace elements / cap seals and repeat pressure/function tests.",lesson:"Stage annular elements and seal kits before critical path; trend test leakage and cycle count to trigger pre-emptive change-out."},
      {level:"MAJOR",hours:"2 ST",unit:"sidetracks",title:"BHA lost in 12¼ in pilot hole",desc:"Geo-Pilot communication and standpipe pressure were lost at 2,051 m. Two fishing runs were unsuccessful and the well required two sidetracks.",cause:"Downhole tool / connection failure left part of the Geo-Pilot and PDC bit in hole; cuttings complicated overshot recovery.",response:"Set cement plugs, time-drilled ST1 and ST2, confirmed separation and re-entered the target.",lesson:"Pre-plan fishing decision limits, keep sidetrack BHA and cement volumes ready, and preserve directional separation evidence in real time."},
      {level:"REPEAT",hours:"38.75 h",unit:"casing delay",title:"TDX alignment blocked casing running",desc:"CRTI stabbing was interrupted by TDX shaft alignment and hoist-wire tensioning problems during 9⅝ in casing operations.",cause:"Top-drive alignment / calibration drift damaged packer rubbers and prevented reliable tool stabbing.",response:"Corrected alignment, recalibrated hoist-wire tensioning and replaced damaged rubber elements.",lesson:"Perform alignment acceptance under representative suspended load before casing day and capture baseline readings after maintenance."}
    ],
    parties:["Bluewhale 460.0 h","Halliburton DD/MWD/LWD 157.0 h","Unassigned 95.75 h","POSCO 61.25 h","Weatherford TRS 19.5 h"],
    sources:["SHD-Q ST2 DDR Day 38 20260928.pdf","SHD-QST2 Surveys.csv","POSCO_BW1_SHD-Q_R1200 - 8.50 Drilling Parameters.xlsx","SHD-QST2 Run 1200 8.50in HS FINAL.pdf"]
  },
  "MSD-A": {
    field:"MYA", color:"#55aaff", status:"Suspended", statusClass:"complete", report:"Main Hole DDR Day 07", ddrDate:"09 Feb 2026",
    subtitle:"Top-hole batch completed; 20 in casing cemented and well secured for later return.",
    operation:"Well suspended after 20 in casing cement job", operationNote:"MRLD was energized, landing / inner strings recovered, well displaced to inhibited seawater, corrosion cap installed and rig departed for MHD-A.",
    md:1418.0,tvd:1418.0,planMd:3453.0,planTvd:3331.0,water:792.9,hole:"36″",mud:"8.60 ppg",casing:"20″ @ 1,412.4 m",progress:41,
    npt:4.25,unplanned:0,bluewhale:0,nptNote:"All booked TP attributed to COSL-Fugro; no U/TU in the 02 Sep summary.",
    nextSteps:[["01","Preserve suspension barrier","Maintain corrosion-cap / wellhead integrity and record inhibited-water condition."],["02","Prepare re-entry package","Confirm next 13⅜ in casing depth, BOP plan and remaining lower-hole programme."],["03","Validate batch-transfer close-out","Carry lessons and prepared fluids / BHA into the next well sequence."]],
    decisions:["Treat the suspension as planned batch sequencing, not a drilling failure.","Close the 4.25 h COSL-Fugro event with a specific root-cause category.","Verify wellhead and inhibited-fluid condition before re-entry."],
    trajectory:[[820.2,820.2,0,0,0],[921.8,921.8,-.4,.5,26.9],[954.8,954.8,-.6,.2,63.1],[994.6,994.6,-.8,.3,59.8],[1034.4,1034.4,-1,.3,92.3],[1074.3,1074.3,-1.3,.6,87],[1114.2,1114.2,-1.6,.6,61.1],[1193.7,1193.7,-2.4,.6,78.9],[1233.4,1233.4,-2.8,.5,74.7],[1273.2,1273.2,-3.1,.5,77],[1313,1312.9,-3.4,.6,85.3],[1352.7,1352.6,-3.7,.6,91],[1392.4,1392.3,-4,.6,102],[1406.3,1406.3,-4.1,.6,109]],
    casingShoes:[{n:"36″",md:910.6,tvd:910.6},{n:"20″",md:1412.4,tvd:1412.4}],
    timeDepth:{plan:[[0,0],[2,920],[5,1418],[12,2105],[30,3453]],actual:[[0,0],[1.5,820],[3,1114],[5.4,1418],[6.5,1418]],npt:[[3.5,1200]],elapsed:6.5,variance:"top-hole scope only",productive:"15.6 d campaign total",stop:"4.25 h TP"},
    bha:{current:"Run 200 · 26 in Drill Ahead",length:"Top-hole assembly",parts:[["26 PDC","0.4 m"],["Near-bit stab","4.0 m"],["MWD","9.0 m"],["Jars","8.0 m"],["HWDP","90 m"]],runs:[["R200","26″ drill-ahead","PDC","36 in hole / top-hole","TD 1,418 m"],["R100","26 × 36″ jetting","Jetting shoe","36 in conductor","Set 910.6 m"]]},
    params:{ROP:[10.8,27.8,50,"m/h"],RPM:[20,60,60,"rpm"],WOB:[2,12,23,"klbf"],FLOW:[600,1102,1117,"gpm"],SPP:[900,2479,2604,"psi"]},
    issues:[{level:"CLOSED",hours:"4.25 h",unit:"booked TP",title:"Survey / service interruption",desc:"The campaign NPT summary attributes all booked MSD-A TP to COSL-Fugro. The exact mechanism needs event-register confirmation.",cause:"Service-side interruption in the top-hole batch; detailed cause is not explicit in the summary workbook.",response:"Completed 26 in section, cemented 20 in casing, secured the well and moved the rig without additional U/TU.",lesson:"Require every low-duration NPT event to carry equipment, failure mode and corrective action before daily close-out."}],
    parties:["COSL-Fugro 4.25 h","Bluewhale 0 h","Unplanned 0 h"],
    sources:["MSD-A Main Hole DDR Day 07 20260209.pdf","MSD-A Surveys.csv","MSD-A Run200 26in HS Drilling Parameters.xlsx","MSD-A Run 200 26in Drill Ahead BHA_Final.pdf"]
  },
  "MHD-A": {
    field:"MAHAR", color:"#a98cff", status:"Suspended / TA", statusClass:"complete", report:"Main Hole DDR Day 42", ddrDate:"21 Jun 2026",
    subtitle:"Temporary abandonment complete; rig handed over to SHD-Q at 12:00 on 21 Jun.",
    operation:"BOP recovered and well report suspended",operationNote:"BOP and riser were pulled, termination joint laid out, stack jetted and secured. MHD-A reporting ended at noon and SHD-Q resumed.",
    md:2984,tvd:2286.3,planMd:3482,planTvd:2374,water:1043.4,hole:"17½″",mud:"8.60 ppg",casing:"13⅜″ @ 2,972.3 m",progress:86,
    npt:80.5,unplanned:114.25,bluewhale:63.25,nptNote:"TP 80.5 h + U 114.25 h + TU 1.5 h in the 02 Sep summary.",
    nextSteps:[["01","Maintain TA barrier status","Retain pressure-test, plug and suspension-string evidence for re-entry."],["02","Close hole-trouble root cause","Capture the 2,674 m loss / reamer non-collapse sequence and revised BHA basis."],["03","Verify re-entry equipment","Hydra-Tong, mud pump and riser-handling faults require close-out before mobilization."]],
    decisions:["The well stopped 498 m short of planned MD; re-entry scope must be re-baselined.","Separate 58.25 h hole-trouble U from equipment-attributed TP.","Carry reamer-nozzle / collapse verification into the next enlargement BHA QA checklist."],
    trajectory:[[1070.7,1070.7,0,0,0],[1270.8,1270.8,.7,.6,128.9],[1364.1,1364.1,2.8,2.1,138.2],[1469.4,1469.2,8.2,4.6,143.4],[1593.8,1592.1,25.4,14.8,140.8],[1752.7,1738.5,85.4,30.8,157.4],[1911.8,1862.7,183.9,46.2,151.5],[2031,1935.8,277.8,58.5,154.2],[2147.8,1989.5,381.3,66.6,152.3],[2306.8,2051.5,527.8,69.4,151.6],[2465.8,2106.7,676.9,69.9,151.6],[2664.6,2175.7,863.3,69.8,151.9],[2823.3,2230.6,1012.2,69.6,151.9],[2974.2,2282.7,1153.8,69.5,150.5]],
    casingShoes:[{n:"20″",md:1504,tvd:1504},{n:"16″",md:2066.5,tvd:1936},{n:"13⅜″",md:2972.3,tvd:2282.1}],
    timeDepth:{plan:[[0,0],[5,1161],[12,1504],[20,2066],[28,2674],[36,3482]],actual:[[0,0],[3,1161],[9,1504],[100,1504],[115,2066],[132,2674],[139,2984]],npt:[[132,2674],[139,2984]],elapsed:139,variance:"-498 m to planned TD",productive:"31.6 d",stop:"80.5 h TP + 114.25 h U"},
    bha:{current:"Run 1000 · 14¾ in FDC-XBAT",length:"Directional drill-ahead",parts:[["14¾ PDC","0.5 m"],["Geo-Pilot","9.1 m"],["XBAT / MWD","18.5 m"],["Jars","9.5 m"],["HWDP","145 m"]],runs:[["R1000","14¾″ FDC-XBAT-RLL","PDC","Drill-ahead after reamer removal","TD 2,984 m"],["R900","14¾ × 17½″ GP-XR1400","PDC + reamer","Enlarged hole","To 2,674 m"],["R800","14¾″ clean-out","PDC","Clean out / condition","Intermediate"],["R600","17½ × 20″ GP-XR1600","PDC + reamer","Intermediate section","To 2,066 m"],["R300","26″ drill-ahead","PDC","Top hole","To 1,504 m"]]},
    params:{ROP:[13.3,19.5,28.2,"m/h"],RPM:[100,170,170,"rpm"],WOB:[6,15,20,"klbf"],FLOW:[1187,1207,1259,"gpm"],SPP:[4000,4263,4520,"psi"],ECD:[10,10,10.1,"ppg"]},
    issues:[
      {level:"MAJOR",hours:"58.25 h",unit:"unplanned",title:"Losses and reamer non-collapse at 2,674 m",desc:"Standpipe pressure rose, returns were lost and the underreamer would not collapse at the shoe. Backreaming / pump-out and a full BHA reconfiguration followed.",cause:"Downhole restriction / reamer collapse problem with clay loading and 565 bbl losses during recovery.",response:"Backreamed and pumped out, removed the reamer, configured a 14¾ in drill-ahead BHA and re-entered after circulation checks.",lesson:"Verify reamer collapse indication and nozzle condition before run; define loss-response flow limits and a no-reamer contingency BHA."},
      {level:"EQUIP",hours:"63.25 h",unit:"Bluewhale",title:"Rig equipment interruptions",desc:"Mud pump, Hydra-Tong, ACS and riser-handling faults accumulated through drilling and TA work.",cause:"Repeat hydraulic / sensor / mechanical reliability issues on critical handling equipment.",response:"Switched to manual tongs where needed, repaired pump / fittings and manually overrode handling locks.",lesson:"Track repeat-failure families across wells and set a campaign-level reliability owner, not only event-by-event repair."}
    ],
    parties:["Bluewhale 63.25 h","Unassigned TP 16.75 h","POSCO 1.0 h","Oilstates 0.5 h","Weatherford TRS 0.5 h"],
    sources:["MHD-A Main Hole DDR Day 42 20260621.pdf","MHD-A Surveys.csv","MHD-A Run1000 14.75in Drilling Parameters.xlsx","MHD-A Run1000 FDC-XBAT BHA_FINAL.pdf"]
  },
  "MHD-B": {
    field:"MAHAR",color:"#ffb95a",status:"Suspended / TA",statusClass:"complete",report:"Main Hole DDR Day 83",ddrDate:"20 May 2026",
    subtitle:"12¼ × 13½ in section reached 2,995 m; liner / suspension sequence completed.",
    operation:"Temporary abandonment complete",operationNote:"Final programme included expandable liner work, cement / suspension activities and BOP / riser recovery before the well was left secured.",
    md:2995,tvd:2287.1,planMd:2995,planTvd:2287.1,water:1043.4,hole:"12¼ × 13½″",mud:"9.9 ppg",casing:"10¾″ liner @ 2,995 m",progress:100,
    npt:838.75,unplanned:97.75,bluewhale:545.5,nptNote:"Largest booked NPT exposure in the four-well scope; Bluewhale 65% of TP.",
    nextSteps:[["01","Preserve TA and liner records","Retain expansion, cement, plug and barrier acceptance evidence."],["02","Close chiller reliability actions","Verify evaporator replacement and redundancy before later re-entry work."],["03","Update expandable-liner contingency","Capture cone-release and expansion troubleshooting sequence with Expro."]],
    decisions:["Campaign lesson owner required for the long chiller / BOP reliability stop.","Separate rig downtime from liner-service NPT in close-out economics.","Confirm TA barrier monitoring frequency and re-entry readiness package."],
    trajectory:[[1070.7,1070.7,0,0,0],[1227.9,1227.9,.6,.3,315.4],[1347.1,1347,3.5,3.4,308.4],[1505.9,1504.2,25.4,13.6,315.9],[1644.7,1635.9,68.2,23.1,319.9],[1803.9,1773,148.1,37.8,310.5],[1963.4,1886.4,259.7,49.8,311.2],[2160.9,1989.7,427.2,66.9,311.4],[2320.7,2047,576.3,69.2,312.7],[2479.2,2103.5,724.5,69,312.6],[2637.6,2160.1,872.3,69.3,313.4],[2742.2,2197.2,970.2,69.4,312.4],[2901.1,2253.7,1118.6,69.2,312.4],[2995,2287.1,1206.4,69.4,312.6]],
    casingShoes:[{n:"20″",md:1624,tvd:1620},{n:"16″",md:2010,tvd:1915.5},{n:"13⅜″",md:2740.5,tvd:2197},{n:"10¾″",md:2995,tvd:2287.1}],
    timeDepth:{plan:[[0,0],[5,1161],[14,1624],[28,2010],[38,2740],[44,2995]],actual:[[0,0],[3,1161],[20,1624],[35,2010],[53,2740],[68,2995],[83,2995]],npt:[[10,1624],[24,1624],[57,2740],[75,2995]],elapsed:83,variance:"+39 d vs P50",productive:"44.0 d",stop:"838.75 h TP + 97.75 h U"},
    bha:{current:"Run 900 · 12¼ × 13½ GP-XR1200",length:"Directional enlargement",parts:[["12¼ PDC","0.4 m"],["13½ Reamer","8.0 m"],["Geo-Pilot","9.0 m"],["MWD/PWD","20 m"],["HWDP","145 m"]],runs:[["R1000","12¼″ clean-out","PDC","Post-section clean out","TD 2,995 m"],["R900","12¼ × 13½″ GP-XR1200","PDC + reamer","Final hole section","TD 2,995 m"],["R700","14¾ × 17½″ RHE","PDC + reamer","Rathole elimination","2,740 m"],["R600","14¾ × 17½″ GP-XR1400","PDC + reamer","Intermediate drill-ahead","2,740 m"],["R400","17½ × 20″ GP-XR1600","PDC + reamer","Intermediate section","2,010 m"],["R200","26″ drill-ahead","PDC","Top hole","1,624 m"]]},
    params:{ROP:[6.8,18.5,60,"m/h"],RPM:[60,100,140,"rpm"],WOB:[2,10,15,"klbf"],FLOW:[800,1155,1155,"gpm"],SPP:[2050,3859.5,3950,"psi"],ECD:[9.9,10.3,10.4,"ppg"]},
    issues:[
      {level:"MAJOR",hours:"359 h",unit:"rig repair",title:"Chiller / evaporator outage",desc:"The well remained static while chiller #3 evaporator and associated pipework / electrical systems were removed, rebuilt and recommissioned.",cause:"Loss of cooling capacity created a long rig-repair critical path during evaluation / liner preparations.",response:"Replaced evaporator components, rebuilt water / electrical systems and resumed liner work after functional checks.",lesson:"Maintain condition-monitoring and a defined redundancy / swap plan for campaign-critical HVAC and cooling assets."},
      {level:"MAJOR",hours:"251.5 h",unit:"Expro",title:"Expandable liner / cone release difficulty",desc:"Expro and liner-hanger work accumulated significant TP, including the expansion cone not releasing after the liner reached 2,931 m.",cause:"Expansion / release system did not complete as designed; onshore support was required for the way forward.",response:"Confirmed cone seal, reviewed options, completed cement / suspension sequence and secured the well.",lesson:"Run system-level expansion contingency simulations and keep release / recovery procedures executable offshore without delay."},
      {level:"REPEAT",hours:"545.5 h",unit:"Bluewhale TP",title:"BOP, hoisting and rig reliability",desc:"BOP readiness, hoisting-cylinder, wash-pipe and other rig-repair events dominate the party-attributed NPT profile.",cause:"Multiple repeat-failure families across well-control and hoisting equipment.",response:"Repair, soak / pressure test and return systems to service event by event.",lesson:"Use cross-well bad-actor tracking with preventive replacement thresholds and protected maintenance windows."}
    ],
    parties:["Bluewhale 545.5 h","Expro 156.5 h","Expro Liner Hanger 95.0 h","Weatherford TRS 21.25 h","Unassigned TP 14.0 h"],
    sources:["MHD-B Main Hole DDR Day 83 20260520.pdf","MHD-B Surveys.csv","MHD-B Run900 12.25x13.50in Drilling Parameters.xlsx","MHD-B Run900 GP-XR1200 BHA_Final.pdf"]
  }
};

const tabs=[
  ["summary","Operation"],["trajectory","Trajectory"],["time","Time–Depth"],["bha","BHA & Bit"],["parameters","Parameters"],["issues","Issues / Lessons"]
];
let selectedWell="SHD-Q", selectedTab="summary";
const $=s=>document.querySelector(s);
const fmt=(n,d=0)=>Number(n).toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d});
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));

function renderOverview(){
  const host=$("#overviewView"); host.innerHTML=""; host.append($("#overviewTemplate").content.cloneNode(true));
  $("#wellGrid").innerHTML=Object.entries(wells).map(([name,w])=>`
    <button class="well-card" type="button" data-well="${name}" style="--accent:${w.color}">
      <div class="well-top"><div><h3>${name}</h3><span class="well-field">${w.field} FIELD</span></div><span class="card-status ${w.statusClass}">${w.status}</span></div>
      <div class="current-op"><small>Current / final operation</small><p>${w.operation}</p></div>
      <div class="well-metrics"><span><strong>${fmt(w.md)}</strong><small>MD · m</small></span><span><strong>${fmt(w.tvd)}</strong><small>TVD · m</small></span><span><strong>${fmt(w.npt,1)}</strong><small>booked NPT · h</small></span></div>
      <div class="depth-track"><i style="width:${Math.min(w.progress,100)}%"></i></div>
      <div class="card-footer"><span>${w.progress}% of plan MD</span><span>${w.ddrDate}</span></div>
    </button>`).join("");
  const max=Math.max(...Object.values(wells).map(w=>w.npt+w.unplanned));
  $("#nptBars").innerHTML=Object.entries(wells).map(([name,w])=>{
    const booked=100*w.npt/max, unp=100*w.unplanned/max;
    return `<div class="npt-row"><b>${name}</b><div class="stack"><i class="booked" style="width:${booked}%" title="Booked NPT ${fmt(w.npt,1)} h"></i><i class="unplanned" style="width:${unp}%" title="Unplanned ${fmt(w.unplanned,1)} h"></i></div><span>${fmt(w.npt+w.unplanned,1)} h</span></div>`;
  }).join("")+`<div class="npt-legend"><span style="--sw:#df6e70">Booked NPT · TP</span><span style="--sw:#8f713e">Unplanned · U</span></div>`;
}

function setNav(name){document.querySelectorAll(".nav-chip").forEach(b=>b.classList.toggle("is-active",name?b.dataset.well===name:b.dataset.action==="overview"));}
function showOverview(push=true){$("#overviewView").hidden=false;$("#detailView").hidden=true;setNav(null);if(push)history.pushState({},"","#overview");window.scrollTo({top:0,behavior:"smooth"});}
function showDetail(name,tab="summary",push=true){
  if(!wells[name])return showOverview(push); selectedWell=name;selectedTab=tab;
  $("#overviewView").hidden=true;$("#detailView").hidden=false;setNav(name);renderDetail();
  if(push)history.pushState({},"",`#well/${encodeURIComponent(name)}/${tab}`);window.scrollTo({top:0,behavior:"smooth"});
}

function renderDetail(){
  const w=wells[selectedWell], host=$("#detailView");host.innerHTML="";host.append($("#detailTemplate").content.cloneNode(true));
  host.style.setProperty("--well-color",w.color);$("#detailField").textContent=`${w.field} FIELD · ${w.report} · ${w.ddrDate}`;$("#detailName").textContent=selectedWell;$("#detailSubtitle").textContent=w.subtitle;
  $("#detailStatus").className=`status-pill ${w.statusClass}`;$("#detailStatus").textContent=w.status;
  const stats=[["Current MD",`${fmt(w.md,1)} m`],["Current TVD",`${fmt(w.tvd,1)} m`],["Plan MD",`${fmt(w.planMd,1)} m`],["Hole",w.hole],["Casing",w.casing],["Booked NPT",`${fmt(w.npt,1)} h`]];
  $("#detailStats").innerHTML=stats.map(x=>`<div class="stat"><small>${x[0]}</small><strong>${x[1]}</strong></div>`).join("");
  $("#detailTabs").innerHTML=tabs.map(t=>`<button type="button" data-tab="${t[0]}" onclick="selectTab('${t[0]}')" class="${selectedTab===t[0]?"is-active":""}">${t[1]}</button>`).join("");
  renderTab();
}

function selectTab(tabName){
  selectedTab=tabName;
  document.querySelectorAll("[data-tab]").forEach(b=>b.classList.toggle("is-active",b.dataset.tab===tabName));
  renderTab();
  history.replaceState({},"",`#well/${encodeURIComponent(selectedWell)}/${selectedTab}`);
}

function renderTab(){
  const w=wells[selectedWell], host=$("#detailContent");
  if(selectedTab==="summary") host.innerHTML=renderSummary(w);
  if(selectedTab==="trajectory") host.innerHTML=renderTrajectoryTab(w);
  if(selectedTab==="time") host.innerHTML=renderTimeTab(w);
  if(selectedTab==="bha") host.innerHTML=renderBHATab(w);
  if(selectedTab==="parameters") host.innerHTML=renderParametersTab(w);
  if(selectedTab==="issues") host.innerHTML=renderIssuesTab(w);
  bindChartPoints();
}

function renderSummary(w){return `<div class="detail-grid">
  <article class="panel operation-card"><p class="eyebrow">Latest DDR operation</p><h2>${w.operation}</h2><p>${w.operationNote}</p><div class="operation-steps">${w.nextSteps.map(x=>`<div class="step"><span>${x[0]}</span><div><b>${x[1]}</b><p>${x[2]}</p></div></div>`).join("")}</div><span class="mini-source">SOURCE · ${w.report} · ${w.ddrDate}</span></article>
  <article class="panel decision-box"><p class="eyebrow">Engineering focus</p><h3>다음 의사결정</h3><ul>${w.decisions.map(x=>`<li>${x}</li>`).join("")}</ul><span class="mini-source">PLAN MD ${fmt(w.planMd,1)} m · CURRENT ${fmt(w.md,1)} m</span></article>
  <article class="panel chart-panel">${chartHeader("Trajectory · vertical section","MWD survey downsample · hover points",[["Actual",w.color]])}<div class="chart-wrap">${trajectorySvg(w,700,360)}</div></article>
  <article class="panel chart-panel">${chartHeader("Time–depth","Elapsed day vs measured depth",[["Actual",w.color],["Plan","#6c8496"]])}<div class="chart-wrap">${timeDepthSvg(w,700,360)}</div></article>
  <article class="panel span-all"><header class="panel-head"><div><p class="eyebrow">Source files</p><h2>Traceability</h2></div></header>${sourceTable(w)}</article>
  </div>`}

function renderTrajectoryTab(w){
  const end=w.trajectory[w.trajectory.length-1];return `<article class="panel chart-panel">${chartHeader("Well trajectory","TVD vs vertical section · actual MWD survey",[["Survey",w.color],["Casing shoe","#ffb95a"]])}<div class="chart-wrap">${trajectorySvg(w,1050,560)}</div><div class="trajectory-readout"><div><small>Survey stations</small><b>${w.trajectory.length}+ sampled</b></div><div><small>Final survey MD</small><b>${fmt(end[0],1)} m</b></div><div><small>Final inclination</small><b>${fmt(end[3],1)}°</b></div><div><small>Final azimuth</small><b>${fmt(end[4],1)}°</b></div></div><span class="mini-source">MWD SURVEY · ${w.sources[1]}</span></article>`;
}

function renderTimeTab(w){return `<article class="panel chart-panel">${chartHeader("Time–depth curve","Programme P50 vs DDR-derived actual",[["Actual",w.color],["Plan","#6c8496"],["NPT / stop","#ff7070"]])}<div class="chart-wrap">${timeDepthSvg(w,1050,560)}</div><div class="time-summary"><div><small>Elapsed campaign time</small><b>${w.timeDepth.elapsed} d</b></div><div><small>Variance / scope</small><b>${w.timeDepth.variance}</b></div><div><small>Stop exposure</small><b>${w.timeDepth.stop}</b></div></div><span class="mini-source">TIME–DEPTH MODEL + DDR SUMMARY · milestone curve shown for monitoring</span></article>`}

function renderBHATab(w){return `<div class="bha-layout"><article class="panel bha-visual"><p class="eyebrow">Selected assembly</p><h2>${w.bha.current}</h2><p class="panel-note">Representative component stack · ${w.bha.length}</p><div class="bha-string">${w.bha.parts.map(p=>`<div class="bha-part" data-length="${p[1]}">${p[0]}</div>`).join("")}</div></article><article class="panel"><header class="panel-head"><div><p class="eyebrow">Run history</p><h2>BHA & bit register</h2></div></header><table class="run-table"><thead><tr><th>Run</th><th>Assembly</th><th>Bit</th><th>Purpose</th><th>Outcome</th></tr></thead><tbody>${w.bha.runs.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td><span class="bit-tag">${r[2]}</span></td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join("")}</tbody></table><span class="mini-source">BHA TALLY · ${w.sources[3]}</span></article></div>`}

function renderParametersTab(w){
  const cards=Object.entries(w.params).map(([k,v])=>{const pct=v[2]===v[0]?50:100*(v[1]-v[0])/(v[2]-v[0]);return `<article class="parameter-card"><header><b>${k}</b><span>MEDIAN</span></header><strong>${fmt(v[1],v[1]%1?1:0)} <small>${v[3]}</small></strong><div class="range-track"><i style="left:0;width:${Math.max(5,pct)}%"></i></div><div class="range-scale"><span>${fmt(v[0],v[0]%1?1:0)}</span><span>${fmt(v[2],v[2]%1?1:0)}</span></div></article>`}).join("");
  const rows=Object.entries(wells).map(([name,x])=>`<tr><td>${name}</td>${["ROP","RPM","WOB","FLOW","SPP","ECD"].map(k=>`<td>${x.params[k]?fmt(x.params[k][1],x.params[k][1]%1?1:0):"—"}</td>`).join("")}</tr>`).join("");
  return `<div class="detail-grid"><section class="panel"><header class="panel-head"><div><p class="eyebrow">Recorded drilling window</p><h2>${w.bha.current}</h2></div><span class="source-badge">historical section data</span></header><div class="parameter-grid" style="margin-top:18px">${cards}</div><p class="parameter-note">표시값은 선택한 drilling parameter workbook 내 유효 기록의 min / median / max입니다. 현재 실시간 센서값이 아닙니다.</p></section><section class="panel"><header class="panel-head"><div><p class="eyebrow">Cross-well benchmark</p><h2>Median parameter</h2></div></header><div style="overflow-x:auto"><table class="parameter-table"><thead><tr><th>Well</th><th>ROP</th><th>RPM</th><th>WOB</th><th>Flow</th><th>SPP</th><th>ECD</th></tr></thead><tbody>${rows}</tbody></table></div><span class="mini-source">DML PARAMETER WORKBOOKS · hole sizes differ; compare directionally</span></section></div>`;
}

function renderIssuesTab(w){return `<div class="issue-list">${w.issues.map(i=>`<article class="issue-card"><aside class="issue-side"><span>${i.level}</span><b>${i.hours}</b><small>${i.unit}</small></aside><div class="issue-main"><h3>${i.title}</h3><p>${i.desc}</p><div class="issue-columns"><div><small>Root cause</small><p>${i.cause}</p></div><div><small>Response / solution</small><p>${i.response}</p></div><div><small>Lesson learned</small><p>${i.lesson}</p></div></div></div></article>`).join("")}<article class="panel"><header class="panel-head"><div><p class="eyebrow">Party attribution</p><h2>NPT allocation</h2></div><span class="source-badge">${w.nptNote}</span></header><div class="party-list">${w.parties.map(x=>`<span>${x}</span>`).join("")}</div></article></div>`}

function sourceTable(w){return `<table class="sources-table"><thead><tr><th>Data</th><th>File</th><th>Used for</th></tr></thead><tbody>${w.sources.map((s,i)=>`<tr><td>${["DDR","Survey","Parameters","BHA"][i]}</td><td><code>${esc(s)}</code></td><td>${["Current operation / MD / TVD / casing / T-time","Trajectory / inclination / azimuth","ROP / RPM / WOB / flow / SPP / ECD","Assembly / bit / run history"][i]}</td></tr>`).join("")}</tbody></table>`}
function chartHeader(title,sub,legend){return `<div class="chart-head"><div><p class="eyebrow">Engineering view</p><h2>${title}</h2><p>${sub}</p></div><div class="chart-legend">${legend.map(l=>`<span style="--c:${l[1]}">${l[0]}</span>`).join("")}</div></div>`}

function trajectorySvg(w,width,height){
  const p=54,pts=w.trajectory,maxT=Math.max(w.tvd,...pts.map(x=>x[1])),vss=pts.map(x=>x[2]),minV=Math.min(0,...vss),maxV=Math.max(1,...vss),span=Math.max(10,maxV-minV),sx=v=>p+(v-minV)/span*(width-2*p),sy=v=>p+v/maxT*(height-2*p);
  const path=pts.map((x,i)=>`${i?"L":"M"}${sx(x[2]).toFixed(1)},${sy(x[1]).toFixed(1)}`).join(" ");
  let grid="";for(let i=0;i<=5;i++){const y=p+i*(height-2*p)/5,d=maxT*i/5;grid+=`<line class="grid-line" x1="${p}" y1="${y}" x2="${width-p}" y2="${y}"/><text class="axis-label" x="${p-9}" y="${y+3}" text-anchor="end">${fmt(d)}</text>`}
  for(let i=0;i<=4;i++){const x=p+i*(width-2*p)/4,v=minV+span*i/4;grid+=`<line class="grid-line" x1="${x}" y1="${p}" x2="${x}" y2="${height-p}"/><text class="axis-label" x="${x}" y="${height-p+20}" text-anchor="middle">${fmt(v)}</text>`}
  const casing=w.casingShoes.map(c=>`<line class="casing-marker" x1="${p}" x2="${width-p}" y1="${sy(c.tvd)}" y2="${sy(c.tvd)}"/><text class="casing-label" x="${width-p-3}" y="${sy(c.tvd)-5}" text-anchor="end">${c.n} shoe · ${fmt(c.md)} m MD</text>`).join("");
  const dots=pts.map(x=>`<circle class="survey-dot chart-point" cx="${sx(x[2])}" cy="${sy(x[1])}" r="4" data-tip="MD ${fmt(x[0],1)} m|TVD ${fmt(x[1],1)} m|VS ${fmt(x[2],1)} m|Inc ${fmt(x[3],1)}° · Azi ${fmt(x[4],1)}°"/>`).join("");
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${selectedWell} trajectory chart"><g>${grid}${casing}<path class="trajectory-line" d="${path}"/>${dots}<text class="axis-label" x="${width/2}" y="${height-5}" text-anchor="middle">VERTICAL SECTION · m</text><text class="axis-label" transform="translate(14 ${height/2}) rotate(-90)" text-anchor="middle">TVD · m</text></g></svg>`
}

function timeDepthSvg(w,width,height){
  const p=54,data=w.timeDepth,all=[...data.plan,...data.actual],maxD=Math.max(...all.map(x=>x[0])),maxMD=Math.max(w.planMd,...all.map(x=>x[1])),sx=v=>p+v/maxD*(width-2*p),sy=v=>p+v/maxMD*(height-2*p);
  let grid="";for(let i=0;i<=5;i++){const y=p+i*(height-2*p)/5,d=maxMD*i/5;grid+=`<line class="grid-line" x1="${p}" y1="${y}" x2="${width-p}" y2="${y}"/><text class="axis-label" x="${p-9}" y="${y+3}" text-anchor="end">${fmt(d)}</text>`}for(let i=0;i<=5;i++){const x=p+i*(width-2*p)/5,d=maxD*i/5;grid+=`<line class="grid-line" x1="${x}" y1="${p}" x2="${x}" y2="${height-p}"/><text class="axis-label" x="${x}" y="${height-p+20}" text-anchor="middle">${fmt(d)}</text>`}
  const path=a=>a.map((x,i)=>`${i?"L":"M"}${sx(x[0]).toFixed(1)},${sy(x[1]).toFixed(1)}`).join(" ");
  const dots=data.actual.map(x=>`<circle class="survey-dot chart-point" cx="${sx(x[0])}" cy="${sy(x[1])}" r="4" data-tip="Elapsed ${fmt(x[0],1)} d|MD ${fmt(x[1],1)} m"/>`).join("");
  const npt=data.npt.map(x=>`<circle class="npt-dot chart-point" cx="${sx(x[0])}" cy="${sy(x[1])}" r="6" data-tip="NPT / stop marker|Day ${fmt(x[0],1)} · MD ${fmt(x[1],1)} m"/>`).join("");
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${selectedWell} time depth chart">${grid}<path class="plan-line" d="${path(data.plan)}"/><path class="actual-line" d="${path(data.actual)}"/>${dots}${npt}<text class="axis-label" x="${width/2}" y="${height-5}" text-anchor="middle">ELAPSED DAY</text><text class="axis-label" transform="translate(14 ${height/2}) rotate(-90)" text-anchor="middle">MEASURED DEPTH · m</text></svg>`
}

function bindChartPoints(){
  const tip=$("#chartTooltip");document.querySelectorAll(".chart-point").forEach(p=>{p.addEventListener("mouseenter",e=>{tip.innerHTML=e.target.dataset.tip.split("|").map((x,i)=>i?`<div>${x}</div>`:`<b>${x}</b>`).join("");tip.hidden=false});p.addEventListener("mousemove",e=>{tip.style.left=`${Math.min(e.clientX+14,window.innerWidth-190)}px`;tip.style.top=`${Math.min(e.clientY+14,window.innerHeight-110)}px`});p.addEventListener("mouseleave",()=>tip.hidden=true)})
}

document.addEventListener("click",e=>{
  const well=e.target.closest("[data-well]");if(well){showDetail(well.dataset.well);return}
  const action=e.target.closest("[data-action]");if(action?.dataset.action==="overview"){showOverview();return}
  const tab=e.target.closest("[data-tab]");if(tab){selectedTab=tab.dataset.tab;document.querySelectorAll("[data-tab]").forEach(b=>b.classList.toggle("is-active",b===tab));renderTab();history.replaceState({},"",`#well/${encodeURIComponent(selectedWell)}/${selectedTab}`)}
});
window.addEventListener("popstate",routeFromHash);
function routeFromHash(){const m=location.hash.match(/^#well\/([^/]+)(?:\/([^/]+))?/);if(m&&wells[decodeURIComponent(m[1])])showDetail(decodeURIComponent(m[1]),m[2]||"summary",false);else showOverview(false)}
renderOverview();routeFromHash();
