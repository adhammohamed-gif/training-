/*
  Datroway (datopotamab deruxtecan) — SHARED CONTENT used by every Datroway indication training.
  Mechanism, pharmacology, dosing and safety management are the same across indications;
  population-specific safety numbers are passed in by each indication file.
  Source: DATROWAY US Prescribing Information (revised 05/2026) unless stated otherwise.
*/
var DATROWAY_COMMON = (function () {
  var LABEL = "DATROWAY (datopotamab deruxtecan-dlnk) US Prescribing Information, revised 05/2026";

  function moaModule(opts) {
    return {
      id: "moa", part: "Part C · Datroway", title: "Datroway: mechanism & pharmacology",
      intro: `<div class="eyebrow">Module 8 · Datroway</div>
<h2>A TROP2-directed antibody–drug conjugate</h2>
<div class="facts"><div class="fact"><b>TROP2</b><span>Target: trophoblast cell-surface antigen 2</span></div><div class="fact"><b>DXd</b><span>Payload: topoisomerase I inhibitor (exatecan derivative)</span></div><div class="fact"><b>≈4</b><span>Drug-to-antibody ratio</span></div><div class="fact"><b>6 mg/kg Q3W</b><span>IV, max 540 mg (≥90 kg)</span></div></div>
<h4>Three components</h4>
<div class="tblwrap"><table><tr><th>Component</th><th>What it is</th><th>Why it matters</th></tr>
<tr><td>Antibody (datopotamab)</td><td>Humanised anti-TROP2 IgG1 monoclonal antibody</td><td>Delivers the payload to TROP2-expressing tumour cells</td></tr>
<tr><td>Linker</td><td>Cleavable tetrapeptide-based linker, stable in plasma</td><td>Cut by lysosomal enzymes inside the cell, limiting payload release in the circulation</td></tr>
<tr><td>Payload (DXd)</td><td>Exatecan-derived topoisomerase I inhibitor; ~4 per antibody</td><td>Causes DNA damage and apoptotic cell death</td></tr></table></div>
<h4>How it works</h4>
<div class="flow"><span class="step">Binds TROP2 on tumour cell</span><span class="arr">→</span><span class="step">ADC–TROP2 complex internalised</span><span class="arr">→</span><span class="step">Linker cleaved in lysosome</span><span class="arr">→</span><span class="step">DXd released → DNA damage → apoptosis</span></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>No TROP2 test is needed to prescribe; selection is by indication and prior therapy${opts.biomarkerNote ? " (" + opts.biomarkerNote + ")" : ""}.</li><li>Once every 3 weeks, single infusion per cycle.</li><li>Its distinctive side effects (stomatitis, ocular surface events, ILD) need proactive prophylaxis and monitoring (Module 10).</li></ul></div>`,
      qa: [
        { id: "d-trop2", q: "What is TROP2 and why target it?", keys: "trop2 target antigen expression biology why",
          a: `<h3>TROP2</h3><p>TROP2 (trophoblast cell-surface antigen 2) is a transmembrane glycoprotein involved in calcium signalling and cell growth. It is expressed on many epithelial cancers, including breast and lung cancers, and higher expression has been linked with more aggressive disease. Because it sits on the cell surface and is internalised after antibody binding, it is a practical entry point for delivering a cytotoxic payload.</p><p>Datroway's label does not require TROP2 testing. A computational-pathology TROP2 biomarker has been explored in TROPION-Lung01 but is not used for patient selection.</p>` },
        { id: "d-structure", q: "What makes the DXd ADC design distinctive?", keys: "linker payload dar bystander design structure dxd",
          a: `<h3>Design features</h3><ul><li><b>Plasma-stable, enzyme-cleavable linker</b>: the payload is released mainly after internalisation, reducing systemic exposure to free drug.</li><li><b>Potent topoisomerase I inhibitor payload (DXd)</b>, the same payload class used in other Daiichi Sankyo DXd ADCs.</li><li><b>Drug-to-antibody ratio of about 4</b>.</li><li><b>Membrane-permeable payload</b>: released DXd can diffuse into neighbouring tumour cells (bystander effect), relevant for tumours with heterogeneous TROP2 expression.</li></ul>` },
        { id: "d-pk", q: "What are the key pharmacokinetic properties?", keys: "pharmacokinetics pk half life clearance metabolism cyp interactions",
          a: `<h3>Pharmacokinetics (6 mg/kg, first dose)</h3><div class="tblwrap"><table><tr><th>Parameter</th><th>ADC</th><th>Released DXd</th></tr>
<tr><td>Cmax</td><td class="num">154 µg/mL</td><td class="num">2.8 ng/mL</td></tr>
<tr><td>AUC</td><td class="num">671 µg·day/mL</td><td class="num">18 ng·day/mL</td></tr>
<tr><td>Median elimination half-life</td><td class="num">4.8 days</td><td class="num">~5.5 days</td></tr></table></div>
<ul><li>Exposure is dose-proportional from 4 to 10 mg/kg, with no significant accumulation between cycles 1 and 3.</li><li>DXd is mainly metabolised by CYP3A4 in vitro but does not inhibit or induce major CYP enzymes; itraconazole and ritonavir had no clinically significant effect on DXd exposure.</li><li>No mean QTc increase above 20 ms at doses up to 10 mg/kg.</li><li>Anti-drug antibodies developed in 17% of patients, with no apparent effect on efficacy or safety.</li></ul>` },
        { id: "d-dose", q: "How is Datroway dosed and given?", keys: "dose dosing administration infusion premedication schedule reduction 540 mg",
          a: `<h3>Dosing and administration</h3><ul><li><b>6 mg/kg IV every 3 weeks</b> (21-day cycle), maximum 540 mg for patients ≥90 kg, until progression or unacceptable toxicity.</li><li>Infusion time: first dose 90 minutes; later doses 30 minutes if tolerated. Observe for at least 1 hour after the first 2 infusions, then 30 minutes. Use a 0.2-micron in-line filter; dilute in 5% dextrose only (not sodium chloride).</li><li><b>Before each infusion</b>: antihistamine, antipyretic and a 5-HT3 antagonist (or alternative) antiemetic.</li><li><b>Daily throughout treatment</b>: steroid-containing mouthwash 4× daily and preservative-free lubricant eye drops at least 4× daily.</li></ul>
<div class="tblwrap"><table><tr><th>Dose level</th><th>&lt;90 kg</th><th>≥90 kg cap</th></tr><tr><td>Starting</td><td class="num">6 mg/kg</td><td class="num">540 mg</td></tr><tr><td>1st reduction</td><td class="num">4 mg/kg</td><td class="num">360 mg</td></tr><tr><td>2nd reduction</td><td class="num">3 mg/kg</td><td class="num">270 mg</td></tr><tr><td>Further</td><td colspan="2">Permanently discontinue</td></tr></table></div><p>Do not re-escalate after a dose reduction.</p>` },
        { id: "d-vs-sg", q: "How does Datroway differ from sacituzumab govitecan?", keys: "sacituzumab govitecan trodelvy compare difference other trop2 adc",
          a: `<h3>Two TROP2-directed ADCs</h3><div class="tblwrap"><table><tr><th></th><th>Datroway</th><th>Sacituzumab govitecan</th></tr>
<tr><td>Payload</td><td>DXd (topoisomerase I inhibitor)</td><td>SN-38 (topoisomerase I inhibitor)</td></tr>
<tr><td>Linker</td><td>Cleavable tetrapeptide, plasma-stable</td><td>Hydrolysable linker</td></tr>
<tr><td>Schedule</td><td>Day 1 every 21 days</td><td>Days 1 and 8 every 21 days</td></tr>
<tr><td>Characteristic toxicities</td><td>Stomatitis, ocular surface events, ILD; less neutropenia than chemotherapy</td><td>Neutropenia and diarrhoea (boxed warning)</td></tr></table></div><p>There are no head-to-head trials. Cross-trial comparisons are unreliable because populations, comparators and follow-up differ.</p>` },
        { id: "d-approval", q: "Where is this indication approved?", keys: "approval regulatory fda ema eu sfda saudi status approved accelerated",
          a: opts.approval }
      ],
      quiz: [
        { q: "What is Datroway's payload?", o: ["SN-38", "DXd, a topoisomerase I inhibitor", "MMAE, a microtubule inhibitor", "Emtansine (DM1)"], c: 1, e: "Datroway carries DXd, an exatecan-derived topoisomerase I inhibitor, at a drug-to-antibody ratio of about 4." },
        { q: "What is the recommended Datroway dose?", o: ["10 mg/kg days 1 and 8 every 21 days", "6 mg/kg every 3 weeks, max 540 mg", "5.4 mg/kg every 3 weeks", "6 mg/kg weekly"], c: 1, e: "6 mg/kg IV every 3 weeks, capped at 540 mg for patients ≥90 kg." }
      ],
      src: LABEL + "; Daiichi Sankyo/AstraZeneca press materials; Sacituzumab govitecan US PI for comparison."
    };
  }

  function safetyModule(p) {
    return {
      id: "safety", part: "Part C · Datroway", title: "Safety & side-effect management",
      intro: `<div class="eyebrow">Module 10 · Safety</div>
<h2>Datroway safety in ${p.popName}</h2>
<p>${p.lead}</p>
<div class="tblwrap"><table><tr><th>Topic</th><th>${p.popShort}</th></tr>${p.rows}</table></div>
<h4>Warnings and precautions (all indications)</h4>
<div class="tblwrap"><table><tr><th>Warning</th><th>Key facts</th></tr>
<tr><td><b>ILD / pneumonitis</b></td><td>${p.ild}</td></tr>
<tr><td><b>Ocular adverse reactions</b></td><td>38% in the pooled population (dry eye 18%, keratitis 16%); Grade 3 in 3.1%; median onset 2.3 months</td></tr>
<tr><td><b>Stomatitis / oral mucositis</b></td><td>63% overall, Grade 3 in 8%; median onset 0.5 months</td></tr>
<tr><td><b>Embryo-fetal toxicity</b></td><td>Contraception for 7 months (females) and 4 months (males with female partners) after the last dose</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Prevention is built into every cycle: steroid mouthwash 4× daily, preservative-free eye drops at least 4× daily, premedication before each infusion.</li><li>Ask about breathlessness, cough, mouth soreness and eye symptoms at every visit.</li><li>Grade ≥2 ILD means permanent discontinuation.</li></ul></div>`,
      qa: [
        { id: "s-ild", q: "How should ILD/pneumonitis be managed?", keys: "ild pneumonitis interstitial lung disease management steroids discontinue",
          a: `<h3>ILD / pneumonitis</h3><p>${p.ild}</p><ul><li>Monitor for new or worsening cough, breathlessness or fever; investigate promptly (imaging, specialist input).</li><li><b>Grade 1</b> (asymptomatic): withhold until fully resolved. If resolved within 28 days, keep the dose; if longer, reduce one level. Consider corticosteroids (e.g. prednisolone ≥0.5 mg/kg/day).</li><li><b>Grade ≥2</b> (symptomatic): <b>permanently discontinue</b> and start systemic corticosteroids promptly (e.g. prednisolone ≥1 mg/kg/day for at least 14 days, then taper over at least 4 weeks).</li><li>Patients with prior steroid-requiring ILD or current ILD were excluded from trials. Higher ILD incidence was seen with creatinine clearance 30 to &lt;90 mL/min.</li></ul>` },
        { id: "s-eye", q: "How should ocular side effects be prevented and managed?", keys: "ocular eye keratitis dry eye ophthalmology drops contact lens",
          a: `<h3>Ocular surface events</h3><ul><li>Types: dry eye, keratitis, blepharitis, meibomian gland dysfunction, increased lacrimation, conjunctivitis, blurred vision.</li><li><b>Prevention</b>: preservative-free lubricant eye drops at least 4× daily; avoid contact lenses unless an eye-care professional advises otherwise.</li><li><b>Monitoring</b>: full eye examination at the start and end of treatment; visual acuity and slit lamp every 3 cycles; refer promptly for new or worsening symptoms.</li><li><b>Dose changes</b>: nonconfluent superficial keratitis → continue and monitor; confluent keratitis, epithelial defect or loss of ≥3 lines of vision → withhold, restart at same or reduced dose; corneal ulcer or stromal opacity → withhold, restart reduced; corneal perforation → discontinue.</li></ul>` },
        { id: "s-mouth", q: "How should stomatitis be prevented and managed?", keys: "stomatitis oral mucositis mouthwash dexamethasone mouth ulcers",
          a: `<h3>Stomatitis / oral mucositis</h3><ul><li>Very common (63% overall) and usually early (median onset 0.5 months).</li><li><b>Prevention</b>: steroid-containing mouthwash (e.g. dexamethasone oral solution 0.1 mg/mL) 4× daily; ice chips or ice water during the infusion.</li><li><b>Grade 1</b>: optimise prophylaxis and continue. <b>Grade 2</b>: withhold until ≤Grade 1; same dose first time, consider reduction if it recurs. <b>Grade 3</b>: withhold, restart reduced. <b>Grade 4</b>: discontinue.</li><li>In the label, stomatitis led to dose reduction in 11% and discontinuation in 0.4%.</li></ul>` },
        { id: "s-other", q: "What other safety points should I know?", keys: "infusion reaction pregnancy contraception hepatic renal elderly nausea special populations",
          a: `<h3>Other safety points</h3><ul><li><b>Infusion-related reactions</b>: Grade 1 → slow infusion by 50%; Grade 2 → interrupt, treat, restart at 50% rate; Grade 3–4 → discontinue.</li><li><b>Nausea/vomiting</b>: common; antiemetic premedication before every infusion.</li><li><b>Pregnancy</b>: can cause fetal harm; verify pregnancy status before starting. Avoid breastfeeding during treatment and for 1 month after.</li><li><b>Hepatic impairment</b>: no adjustment if mild; monitor closely if moderate (DXd exposure 2.5-fold higher); no recommended dose in severe impairment.</li><li><b>Renal impairment</b>: no dose adjustment; watch for ILD in mild–moderate impairment.</li>${p.otherExtra || ""}</ul>` }
      ],
      quiz: [
        { q: "A patient develops symptomatic (Grade 2) pneumonitis on Datroway. What does the label require?", o: ["Reduce the dose by one level", "Withhold until resolved, then restart", "Permanently discontinue and start corticosteroids", "Continue with inhaled steroids"], c: 2, e: "Grade ≥2 ILD/pneumonitis requires permanent discontinuation and prompt systemic corticosteroids." },
        { q: "Which prophylaxis is recommended throughout Datroway treatment?", o: ["G-CSF every cycle", "Steroid mouthwash and preservative-free eye drops", "Prophylactic antibiotics", "Loperamide"], c: 1, e: "Steroid mouthwash 4× daily and preservative-free lubricant eye drops at least 4× daily, plus premedication before each infusion." }
      ],
      src: LABEL + (p.extraSrc ? "; " + p.extraSrc : "")
    };
  }

  return { moaModule: moaModule, safetyModule: safetyModule, LABEL: LABEL };
})();

if (typeof window !== "undefined") window.DATROWAY_COMMON = DATROWAY_COMMON;
if (typeof module !== "undefined" && module.exports) module.exports = DATROWAY_COMMON;
