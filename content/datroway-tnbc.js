/*
  Datroway in first-line metastatic triple-negative breast cancer (not candidates for PD-1/PD-L1
  inhibitors) — CONTENT FILE. Same structure as content/oab.js (see README).
  Shared Datroway modules come from content/datroway-common.js.
*/
var DATROWAY_TNBC = (function (C) {
var M = [
/* ---------- 1 BIOLOGY ---------- */
{ id:"pathophysiology", part:"Part A · The disease", title:"Disease biology",
intro:`<div class="eyebrow">Module 1 · Disease biology</div>
<h2>Triple-negative breast cancer</h2>
<p>TNBC lacks oestrogen receptor, progesterone receptor and HER2 overexpression/amplification. Without these targets, endocrine and HER2-directed therapies do not apply, and chemotherapy has long been the backbone of treatment.</p>
<div class="tblwrap"><table><tr><th>Feature</th><th>What it means</th></tr>
<tr><td>Biology</td><td>Heterogeneous; often high-grade and highly proliferative</td></tr>
<tr><td>Genetics</td><td>Enriched for germline BRCA1 mutations</td></tr>
<tr><td>Immune context</td><td>Subset is PD-L1 positive, the basis for immunotherapy</td></tr>
<tr><td>Clinical course</td><td>Recurrence tends to occur early (first few years); frequent visceral and brain metastases</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>TNBC is aggressive with limited targeted options.</li><li>First-line decisions hinge on PD-L1 status, eligibility for immunotherapy and germline BRCA status.</li><li>TROP2 is expressed in most TNBC, making TROP2-directed ADCs relevant.</li></ul></div>`,
qa:[
{ id:"b-def", q:"How is triple-negative defined?", keys:"definition triple negative er pr her2 er-low",
a:`<h3>Definition</h3><p>ER and PR negative (conventionally &lt;1% staining) and HER2-negative by IHC/ISH. Tumours with low ER expression (1–10%) often behave similarly to TNBC and are discussed alongside it in many guidelines; check local pathology conventions.</p>`},
{ id:"b-brca", q:"Why does BRCA status matter?", keys:"brca germline parp olaparib talazoparib",
a:`<h3>Germline BRCA1/2</h3><p>Germline BRCA1/2 mutations are more frequent in TNBC. In metastatic TNBC that is PD-L1 negative or not suitable for immunotherapy, ESMO recommends PARP inhibitors (olaparib or talazoparib) [I, A] or carboplatin-based chemotherapy [II, A] for gBRCA-mutated disease, while Datroway or sacituzumab govitecan is recommended for most gBRCA wild-type patients.</p>`},
{ id:"b-trop2", q:"Why target TROP2 in TNBC?", keys:"trop2 tnbc expression target",
a:`<h3>TROP2 in TNBC</h3><p>TROP2 is a cell-surface glycoprotein expressed in most TNBC. Two TROP2-directed ADCs, Datroway and sacituzumab govitecan, have improved outcomes over chemotherapy in TNBC. No TROP2 test is required to use Datroway.</p>`}
],
quiz:[
{ q:"Which receptor profile defines TNBC?", o:["ER+, PR+, HER2−","ER−, PR−, HER2−","ER−, PR−, HER2+","ER+, HER2+"], c:1, e:"TNBC lacks ER, PR and HER2 overexpression/amplification."},
{ q:"Which germline alteration is enriched in TNBC?", o:["EGFR","BRCA1","KRAS","ALK"], c:1, e:"Germline BRCA1 mutations are enriched in TNBC."}
],
src:"ESMO Metastatic Breast Cancer Clinical Practice Guideline 2026; TROPION-Breast02 publications."},

/* ---------- 2 EPIDEMIOLOGY ---------- */
{ id:"epidemiology", part:"Part A · The disease", title:"Epidemiology & burden",
intro:`<div class="eyebrow">Module 2 · Epidemiology</div>
<h2>A small share with a large burden</h2>
<div class="facts"><div class="fact"><b>10–15%</b><span>Share of breast cancers that are TNBC</span></div><div class="fact"><b>2.3 M</b><span>New breast cancer cases worldwide (2022)</span></div><div class="fact"><b>~7 in 10</b><span>mTNBC patients not candidates for immunotherapy (patient-advocacy estimate)</span></div><div class="fact"><b>18.7 mo</b><span>Median OS with 1L chemotherapy in TROPION-Breast02</span></div></div>
<p>TNBC accounts for roughly 10–15% of breast cancer diagnoses but a disproportionate share of breast cancer deaths. It is more common in younger women and in women with germline BRCA1 mutations.</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Most patients with metastatic TNBC are not candidates for first-line immunotherapy, mainly because their tumours are PD-L1 negative.</li><li>Many patients do not receive treatment beyond first line, so the first-line choice matters most.</li></ul></div>`,
qa:[
{ id:"e-firstline", q:"Why is the first-line choice so important in mTNBC?", keys:"first line importance attrition beyond first line",
a:`<h3>Treatment attrition</h3><p>Disease in metastatic TNBC often progresses quickly, and a substantial share of patients never receive a second line of therapy. The TROPION-Breast02 investigators highlighted this as a reason to use the most effective option first.</p>`},
{ id:"e-saudi", q:"What about TNBC in Saudi Arabia?", keys:"saudi arabia local ksa",
a:`<h3>Local context</h3><p>Breast cancer is the most common cancer among women in Saudi Arabia. Use the latest Saudi Cancer Registry report and local institutional data for the TNBC share and age profile; this training does not quote local figures.</p>`}
],
quiz:[
{ q:"Roughly what share of breast cancers are triple-negative?", o:["1–2%","10–15%","40%","70%"], c:1, e:"About 10–15% of breast cancers."},
{ q:"What was median OS with first-line chemotherapy in TROPION-Breast02?", o:["9 months","18.7 months","30 months","Not reported"], c:1, e:"18.7 months with chemotherapy vs 23.7 months with Datroway."}
],
src:"Bray F et al. CA Cancer J Clin 2024 (GLOBOCAN 2022); TNBC Foundation statement (May 2026); DATROWAY US PI."},

/* ---------- 3 PRESENTATION ---------- */
{ id:"symptoms", part:"Part A · The disease", title:"Clinical presentation",
intro:`<div class="eyebrow">Module 3 · Presentation</div>
<h2>Early, visceral and often symptomatic</h2>
<p>Metastatic TNBC may present de novo or as recurrence, typically within a few years of early-stage treatment. Visceral (lung, liver) and brain metastases are common.</p>
<div class="tblwrap"><table><tr><th>Feature in TROPION-Breast02 (label)</th><th>Proportion</th></tr>
<tr><td>Visceral disease</td><td class="num">75%</td></tr><tr><td>De novo metastatic</td><td class="num">34%</td></tr><tr><td>Stable brain metastases</td><td class="num">10%</td></tr><tr><td>PD-L1 negative</td><td class="num">90%</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Early relapse after (neo)adjuvant therapy is a high-risk feature.</li><li>Symptom burden from visceral disease favours treatments with high response rates.</li></ul></div>`,
qa:[
{ id:"p-earlyrelapse", q:"Why does time to relapse matter?", keys:"disease free interval early relapse 6 months 12 months",
a:`<h3>Disease-free interval</h3><p>Relapse soon after curative-intent treatment signals more resistant disease. TROPION-Breast02 stratified randomisation by disease-free interval (de novo, ≤12 months or &gt;12 months) and included patients relapsing within 6 months. ESMO 2026 states Datroway is preferred if relapse occurs within 6 months of adjuvant therapy [I, A].</p>`},
{ id:"p-baseline", q:"What should be checked before starting Datroway?", keys:"baseline checks before start eye lung",
a:`<h3>Baseline checks</h3><ul><li>ILD history or current lung disease.</li><li>Ophthalmic examination and any corneal disease.</li><li>Oral health and mouthwash plan.</li><li>Pregnancy status and contraception.</li><li>PD-L1 status and reasons immunotherapy is not an option; germline BRCA status.</li></ul>`}
],
quiz:[
{ q:"What proportion of TROPION-Breast02 patients had PD-L1-negative disease?", o:["10%","50%","90%","100%"], c:2, e:"90% were PD-L1 negative; the rest were PD-L1 positive but not candidates for immunotherapy."},
{ q:"According to ESMO 2026, when is Datroway preferred over sacituzumab govitecan?", o:["Never","If relapse occurs within 6 months of adjuvant therapy","Only in gBRCA-mutated disease","Only with brain metastases"], c:1, e:"Dato-DXd is preferred if relapse occurs within 6 months of adjuvant therapy [I, A]."}
],
src:"DATROWAY US PI; ESMO Metastatic Breast Cancer Clinical Practice Guideline 2026; Dent R et al. ESMO 2025 LBA21."},

/* ---------- 4 DIAGNOSIS ---------- */
{ id:"diagnosis", part:"Part A · The disease", title:"Diagnosis & biomarkers",
intro:`<div class="eyebrow">Module 4 · Diagnosis & biomarkers</div>
<h2>Three tests decide first-line therapy</h2>
<div class="tblwrap"><table><tr><th>Test</th><th>Why</th><th>ESMO 2026</th></tr>
<tr><td>Confirm ER/PR/HER2 on metastatic biopsy</td><td>Confirms TNBC; identifies HER2-low for later lines</td><td>Biopsy where feasible</td></tr>
<tr><td><b>PD-L1</b></td><td>Identifies candidates for immunotherapy + chemotherapy</td><td>Recommended [I, A]</td></tr>
<tr><td><b>Germline BRCA1/2</b></td><td>Identifies candidates for PARP inhibitors</td><td>Recommended if treatments available [I, A]</td></tr></table></div>
<div class="flow"><span class="step">mTNBC</span><span class="arr">→</span><span class="step">PD-L1 positive and IO eligible → immunotherapy + chemotherapy</span><span class="arr">|</span><span class="step">Not an IO candidate → gBRCA status</span><span class="arr">→</span><span class="step">gBRCA wild-type → <b>Datroway</b> or sacituzumab govitecan</span></div>
<div class="keybox"><strong>For Datroway</strong><ul><li>No TROP2 test is required.</li><li>Patient must not be a candidate for PD-1/PD-L1 inhibitor therapy.</li></ul></div>`,
qa:[
{ id:"dx-notio", q:"Who is 'not a candidate' for PD-1/PD-L1 inhibitors?", keys:"not candidate immunotherapy pd-l1 negative contraindication autoimmune",
a:`<h3>Not a candidate for immunotherapy</h3><p>In TROPION-Breast02, this meant either PD-L1-negative tumours, or PD-L1-positive tumours in patients who could not receive a PD-1/PD-L1 inhibitor (for example because of comorbidities such as autoimmune disease, prior immunotherapy, or other clinical contraindications). 90% of enrolled patients were PD-L1 negative.</p>`},
{ id:"dx-pdl1", q:"How is PD-L1 tested?", keys:"pd-l1 assay cps 22c3 test",
a:`<h3>PD-L1 testing</h3><p>PD-L1 is assessed on tumour tissue by IHC using a validated assay; the scoring system and cut-off depend on the immunotherapy being considered (for pembrolizumab, CPS ≥10 with the 22C3 assay). Use your local laboratory's validated method.</p>`}
],
quiz:[
{ q:"Which two biomarker tests are most decisive for first-line mTNBC therapy?", o:["ESR1 and PIK3CA","PD-L1 and germline BRCA1/2","EGFR and ALK","TROP2 and HER2"], c:1, e:"PD-L1 (immunotherapy eligibility) and germline BRCA (PARP inhibitor eligibility)."},
{ q:"Does Datroway require a TROP2 test?", o:["Yes","No","Only in PD-L1-positive disease","Only with brain metastases"], c:1, e:"No TROP2 testing is required."}
],
src:"ESMO Metastatic Breast Cancer Clinical Practice Guideline 2026; DATROWAY US PI; cancernetwork.com (TROPION-Breast02 design)."},

/* ---------- 5 PATIENT JOURNEY ---------- */
{ id:"journey", part:"Part A · The disease", title:"Patient journey",
intro:`<div class="eyebrow">Module 5 · Patient journey</div>
<h2>Making first line count</h2>
<div class="flow"><span class="step">Metastatic TNBC diagnosed</span><span class="arr">→</span><span class="step">Biopsy, PD-L1, gBRCA</span><span class="arr">→</span><span class="step">Not an IO candidate</span><span class="arr">→</span><span class="step"><b>1L Datroway</b></span><span class="arr">→</span><span class="step">Progression → 2L (e.g. other ADC, chemotherapy)</span></div>
<div class="tblwrap"><table><tr><th>Stage</th><th>Patient experience</th><th>What helps</th></tr>
<tr><td>Diagnosis</td><td>Often young patients, shock of early relapse</td><td>Fast biomarker turnaround</td></tr>
<tr><td>Starting Datroway</td><td>New daily routines (mouthwash, eye drops), eye checks</td><td>Nurse education, written plan</td></tr>
<tr><td>On treatment</td><td>Mouth soreness, dry eyes, nausea; median treatment duration 8.5 months</td><td>Proactive symptom review each cycle</td></tr>
<tr><td>Progression</td><td>Fewer options; performance status may decline</td><td>Early planning of next line</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Datroway offers a first-line alternative to chemotherapy for patients who cannot receive immunotherapy.</li><li>Patients stayed on Datroway more than twice as long as on chemotherapy (8.5 vs 4.1 months).</li></ul></div>`,
qa:[
{ id:"j-eligible", q:"Which patients are eligible in this indication?", keys:"eligible eligibility which patients first line",
a:`<h3>Eligibility (US label)</h3><p>Adults with unresectable or metastatic TNBC who are not candidates for PD-1/PD-L1 inhibitor therapy. In TROPION-Breast02, patients had received no prior chemotherapy or systemic therapy for advanced disease and had ECOG 0–1.</p>`},
{ id:"j-education", q:"What should patients be taught before starting?", keys:"patient education counselling teach",
a:`<h3>Patient education checklist</h3><ul><li>Steroid mouthwash 4× daily; ice chips during infusion.</li><li>Preservative-free eye drops at least 4× daily; no contact lenses.</li><li>Report new cough, breathlessness or fever immediately.</li><li>Report eye symptoms and mouth sores early.</li><li>Effective contraception as advised.</li></ul>`}
],
quiz:[
{ q:"Median treatment duration in TROPION-Breast02 was:", o:["4.1 vs 8.5 months","8.5 vs 4.1 months (Datroway vs chemotherapy)","Equal","12 vs 6 months"], c:1, e:"8.5 months with Datroway vs 4.1 months with chemotherapy."},
{ q:"Which patients are NOT within this indication?", o:["PD-L1-negative mTNBC","PD-L1-positive patients who can receive immunotherapy","Patients with autoimmune disease precluding immunotherapy","Untreated metastatic TNBC"], c:1, e:"The indication is for patients who are not candidates for PD-1/PD-L1 inhibitors."}
],
src:"DATROWAY US PI; Dent R et al. ESMO 2025 LBA21."},

/* ---------- 6 TREATMENT OPTIONS ---------- */
{ id:"treatment", part:"Part A · The disease", title:"Treatment options",
intro:`<div class="eyebrow">Module 6 · Treatment options</div>
<h2>First-line options in metastatic TNBC</h2>
<div class="tblwrap"><table><tr><th>Group</th><th>Options (ESMO 2026)</th></tr>
<tr><td>PD-L1 positive, IO eligible</td><td>Immunotherapy + chemotherapy (e.g. pembrolizumab + chemotherapy for CPS ≥10)</td></tr>
<tr><td>Not IO candidate, gBRCA mutated</td><td>Olaparib or talazoparib [I, A]; carboplatin-based chemotherapy [II, A]</td></tr>
<tr><td><b>Not IO candidate, gBRCA wild-type</b></td><td><b>Datroway</b> or sacituzumab govitecan for most patients [I, A]; taxane or anthracycline monotherapy as alternatives [I, A]</td></tr>
<tr><td>Imminent organ failure</td><td>Capecitabine or taxane ± bevacizumab [I, B]</td></tr></table></div>
<p><b>Later lines:</b> sacituzumab govitecan if not used first line [I, A]; trastuzumab deruxtecan for HER2-low disease [II, B].</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Before TROPION-Breast02, chemotherapy was the only approved first-line option for patients who could not receive immunotherapy.</li><li>Both TROP2 ADCs are now guideline options; ESMO prefers Datroway if relapse occurs within 6 months of adjuvant therapy.</li></ul></div>`,
qa:[
{ id:"t-ascent03", q:"How does Datroway compare with sacituzumab govitecan in first line?", keys:"sacituzumab ascent-03 compare trop2 adc first line",
a:`<h3>Two phase 3 trials, no head-to-head comparison</h3><div class="tblwrap"><table><tr><th></th><th>TROPION-Breast02 (Datroway)</th><th>ASCENT-03 (sacituzumab govitecan)</th></tr>
<tr><td>n</td><td class="num">644</td><td class="num">558</td></tr>
<tr><td>Median PFS (BICR)</td><td class="num">10.8 vs 5.6 mo; HR 0.57</td><td class="num">9.7 vs 6.9 mo; HR 0.62</td></tr>
<tr><td>Overall survival</td><td>Significant: 23.7 vs 18.7 mo; HR 0.79</td><td>Reported as immature at ESMO 2025</td></tr>
<tr><td>ORR</td><td class="num">≈63% vs 29% (BICR, ESMO 2025)</td><td class="num">48% vs 46%</td></tr>
<tr><td>Schedule</td><td>Day 1 every 21 days</td><td>Days 1 and 8 every 21 days</td></tr></table></div>
<p>Populations differed: TROPION-Breast02 included relapses within 6 months of curative treatment and more patients with brain metastases. Cross-trial comparisons are not reliable.</p>`},
{ id:"t-chemo", q:"What were the chemotherapy comparators?", keys:"comparator chemotherapy paclitaxel nab-paclitaxel",
a:`<h3>Investigator's choice chemotherapy in TROPION-Breast02</h3><p>Nab-paclitaxel 54%, paclitaxel 28%, eribulin 11%, carboplatin 4.7%, capecitabine 2.2%.</p>`}
],
quiz:[
{ q:"For a gBRCA wild-type, PD-L1-negative mTNBC patient, ESMO 2026 recommends for most patients:", o:["Pembrolizumab + chemotherapy","Datroway or sacituzumab govitecan","Olaparib","Endocrine therapy"], c:1, e:"Dato-DXd or sacituzumab govitecan for most patients [I, A]."},
{ q:"Which TROP2 ADC showed a statistically significant OS benefit in first-line mTNBC (not IO candidates)?", o:["Datroway (TROPION-Breast02)","Neither","Both, equally","Only sacituzumab (ASCENT-03)"], c:0, e:"TROPION-Breast02 met its OS endpoint (HR 0.79); ASCENT-03 OS was immature at ESMO 2025."}
],
src:"ESMO Metastatic Breast Cancer Clinical Practice Guideline 2026; Dent R et al. ESMO 2025 LBA21; ASCENT-03, ESMO 2025 LBA20; ESMO Daily Reporter 2025."},

/* ---------- 7 GUIDELINES ---------- */
{ id:"guidelines", part:"Part B · Guidelines", title:"Guidelines (ESMO, NCCN)",
intro:`<div class="eyebrow">Module 7 · Guidelines</div>
<h2>What the guidelines say</h2>
<h4>ESMO Metastatic Breast Cancer Clinical Practice Guideline (2026)</h4>
<div class="tblwrap"><table><tr><th>Statement</th><th>Grade</th></tr>
<tr><td><b>gBRCA wild-type, PD-L1 negative or not ICI candidates: Datroway or sacituzumab govitecan for most patients, if available</b></td><td><span class="pill strong">I, A</span></td></tr>
<tr><td><b>Datroway preferred if relapse occurs within 6 months of adjuvant therapy</b></td><td><span class="pill strong">I, A</span></td></tr>
<tr><td>gBRCA mutated: olaparib or talazoparib</td><td><span class="pill strong">I, A</span></td></tr>
<tr><td>Taxane or anthracycline monotherapy as alternatives</td><td><span class="pill strong">I, A</span></td></tr>
<tr><td>PD-L1 testing recommended in TNBC</td><td><span class="pill strong">I, A</span></td></tr></table></div>
<p>When the ESMO guideline was written, the first-line TNBC indication was noted as not yet FDA/EMA approved; it has since been approved in the US (May 2026) and EU (July 2026).</p>
<h4>NCCN</h4><p>Based on TROPION-Breast02, NCCN lists Datroway as a <b>Category 1, preferred</b> first-line option for metastatic TNBC in patients who are not candidates for immunotherapy.</p>`,
qa:[
{ id:"g-6months", q:"Why does ESMO prefer Datroway after early relapse?", keys:"6 months early relapse preferred esmo rationale",
a:`<h3>Early relapse</h3><p>TROPION-Breast02 enrolled patients who relapsed within 6 months of curative-intent treatment, a higher-risk group, a population that differed from ASCENT-03. ESMO therefore states Datroway is preferred when relapse occurs within 6 months of adjuvant therapy [I, A].</p>`},
{ id:"g-nccn", q:"What is Datroway's NCCN status in TNBC?", keys:"nccn category 1 preferred",
a:`<h3>NCCN</h3><p>Category 1, preferred first-line treatment option for metastatic TNBC in patients who are not candidates for immunotherapy. Check the current NCCN version for full details.</p>`}
],
quiz:[
{ q:"What NCCN status does Datroway have in 1L mTNBC (not IO candidates)?", o:["Category 2B, other recommended","Category 1, preferred","Not listed","Useful in certain circumstances"], c:1, e:"NCCN Category 1 preferred, based on TROPION-Breast02."},
{ q:"What ESMO grade applies to Datroway or sacituzumab govitecan for most gBRCA wild-type, non-IO patients?", o:["I, A","II, B","III, C","V, B"], c:0, e:"[I, A] in the 2026 ESMO guideline."}
],
src:"de Azambuja E et al. Metastatic breast cancer: ESMO Clinical Practice Guideline (2026, journal pre-proof); AstraZeneca press release 26 May 2026 citing NCCN Guidelines."},

/* ---------- 8 MOA (shared) ---------- */
C.moaModule({
approval:`<h3>Regulatory status (first-line mTNBC)</h3><ul><li><b>US (FDA)</b>: approved 22 May 2026 for adults with unresectable or metastatic TNBC who are not candidates for PD-1/PD-L1 inhibitor therapy (priority review; Project Orbis).</li><li><b>EU</b>: approved July 2026 for the same population.</li><li>Approved in more than 30 countries/regions for this indication (company statement, July 2026); reviews ongoing in other countries.</li><li><b>Saudi Arabia</b>: confirm current SFDA registration and label wording before use.</li></ul>`
}),

/* ---------- 9 TRIALS ---------- */
{ id:"trials", part:"Part C · Datroway", title:"Clinical trials",
intro:`<div class="eyebrow">Module 9 · Clinical evidence</div>
<h2>TROPION-Breast02: the pivotal phase 3 trial</h2>
<div class="tblwrap"><table><tr><th>Design</th><td>Randomised 1:1, open-label, phase 3; n = 644 (Datroway 323, chemotherapy 321); sites in Africa, Asia, Europe and the Americas</td></tr>
<tr><th>Population</th><td>Previously untreated locally recurrent inoperable or metastatic TNBC; not candidates for immunotherapy; ECOG 0–1</td></tr>
<tr><th>Stratification</th><td>Region, PD-L1 status, disease-free interval (de novo, ≤12 months, &gt;12 months)</td></tr>
<tr><th>Primary endpoints</th><td>PFS by BICR and OS (dual primary)</td></tr></table></div>
<div class="tblwrap"><table><tr><th>Outcome</th><th>Datroway</th><th>Chemotherapy</th><th>HR (95% CI); p</th></tr>
<tr><td>Median PFS (BICR)</td><td class="num">10.8 mo</td><td class="num">5.6 mo</td><td class="num">0.57 (0.47–0.69); &lt;0.0001</td></tr>
<tr><td>Median OS</td><td class="num">23.7 mo</td><td class="num">18.7 mo</td><td class="num">0.79 (0.64–0.98); 0.0290</td></tr>
<tr><td>Confirmed ORR (label)</td><td class="num">64%</td><td class="num">30%</td><td>—</td></tr>
<tr><td>Complete response</td><td class="num">8%</td><td class="num">3%</td><td>—</td></tr>
<tr><td>Median DOR</td><td class="num">12.3 mo</td><td class="num">7.1 mo</td><td>—</td></tr>
<tr><td>Grade ≥3 TRAEs</td><td class="num">33%</td><td class="num">29%</td><td>—</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Met <b>both</b> dual primary endpoints: a 5.0-month median OS gain and a 43% reduction in risk of progression or death.</li><li>The first TROP2-directed ADC to show an OS benefit over chemotherapy in this setting.</li></ul></div>`,
qa:[
{ id:"tr-tb02-rates", tag:"Landmark rates", q:"What were the landmark PFS and OS rates?", keys:"landmark 12 month 18 month rates pfs os",
a:`<h3>Landmark rates (ESMO 2025, data cut-off 25 August 2025)</h3><div class="tblwrap"><table><tr><th></th><th>Datroway</th><th>Chemotherapy</th></tr>
<tr><td>12-month PFS</td><td class="num">45.6%</td><td class="num">25.6%</td></tr><tr><td>18-month PFS</td><td class="num">32.7%</td><td class="num">16.8%</td></tr>
<tr><td>12-month OS</td><td class="num">75.2%</td><td class="num">67.8%</td></tr><tr><td>18-month OS</td><td class="num">61.2%</td><td class="num">51.3%</td></tr></table></div><p>Median follow-up was 27.5 months. The OS benefit was seen across subgroups.</p>`},
{ id:"tr-tb02-safety", tag:"Safety", q:"What were the key safety results of TROPION-Breast02?", keys:"safety adverse events tb02 stomatitis neutropenia discontinuation ild",
a:`<h3>Safety (Datroway vs chemotherapy)</h3><ul><li>Median treatment duration: 8.5 vs 4.1 months.</li><li>Any-grade TRAEs 93% vs 83%; Grade ≥3 TRAEs 33% vs 29%.</li><li>TRAEs leading to discontinuation: 4% vs 7%.</li><li>Most common Grade ≥3 TRAEs: stomatitis 8% vs 0%; neutropenia 3% vs 13%; fatigue 3% vs 3%; peripheral neuropathy 0% vs 2%.</li><li>One Grade 5 ILD event in the Datroway arm was adjudicated as drug-related.</li></ul><p>Label (n=319): stomatitis 63% (Grade 3: 8%), dry eye 26%, keratitis 26% (Grade 3: 6%) vs stomatitis 14%, keratitis 2.8%, dry eye 4.9% with chemotherapy.</p>`},
{ id:"tr-tb02-pop", tag:"Population", q:"Who was enrolled in TROPION-Breast02?", keys:"population baseline characteristics enrolled",
a:`<h3>Baseline characteristics (label)</h3><ul><li>Median age 56; 99.7% female; 44% Asian, 44% White.</li><li>90% PD-L1 negative; 34% de novo metastatic; 75% visceral disease; 10% stable brain metastases.</li><li>Excluded: steroid-requiring or ongoing ILD, clinically significant corneal disease, ECOG &gt;1.</li></ul>`},
{ id:"tr-other", tag:"Other studies", q:"What other Datroway TNBC studies should I know?", keys:"begonia durvalumab combination other studies ongoing",
a:`<h3>Wider TNBC programme</h3><ul><li><b>BEGONIA</b> (phase 1b/2): Datroway plus durvalumab as first-line therapy in metastatic TNBC, with updated results presented at ESMO 2025.</li><li>Phase 3 trials of Datroway plus durvalumab in breast cancer were initiated in December 2023.</li></ul><p>Check current results before discussing ongoing trials.</p>`}
],
quiz:[
{ q:"What was the OS hazard ratio in TROPION-Breast02?", o:["0.57","0.79","1.01","0.94"], c:1, e:"OS 23.7 vs 18.7 months, HR 0.79 (95% CI 0.64–0.98), p=0.0290."},
{ q:"What was the PFS improvement in TROPION-Breast02?", o:["6.9 vs 4.9 months","10.8 vs 5.6 months","4.4 vs 3.7 months","9.7 vs 6.9 months"], c:1, e:"10.8 vs 5.6 months, HR 0.57."},
{ q:"Treatment discontinuation due to TRAEs was:", o:["4% vs 7% (Datroway vs chemotherapy)","15% vs 3%","Equal","Not reported"], c:0, e:"Fewer discontinuations with Datroway despite longer treatment."}
],
src:"DATROWAY US PI (revised 05/2026); FDA approval notice 22 May 2026; Dent R et al. ESMO 2025 LBA21; MIMS/ESMO Daily Reporter coverage; Annals of Oncology 2026 publication."},

/* ---------- 10 SAFETY (shared) ---------- */
C.safetyModule({
popName:"first-line metastatic TNBC", popShort:"TROPION-Breast02, Datroway (n=319)",
lead:"Median treatment duration in the label safety population was 8.5 months.",
rows:`<tr><td>Most common adverse reactions</td><td>Stomatitis 63% (Grade 3: 8%), nausea 48%, alopecia 43%, constipation 40%, fatigue 36%, dry eye 26%, keratitis 26% (Grade 3: 6%), vomiting 23%</td></tr>
<tr><td>Serious adverse reactions</td><td class="num">17%</td></tr>
<tr><td>Discontinuation / dose reduction / interruption</td><td class="num">4.7% / 28% / 35%</td></tr>
<tr><td>Lab abnormalities (all grades)</td><td>Increased amylase 54% (Grade 3/4: 38%), decreased haemoglobin 43%, decreased WBC 41%, decreased calcium 39%, decreased neutrophils 35%</td></tr>
<tr><td>Steroid mouthwash use</td><td class="num">51% of patients in TROPION-Breast02</td></tr>`,
ild:"Breast cancer pooled population (n=841): ILD/pneumonitis in 3.0% (Grade 3: 0.4%), 2 fatal cases (0.2%); median onset 5.3 months; corticosteroids needed in 64%.",
otherExtra:"<li><b>Older patients (breast)</b>: Grade ≥3 and serious adverse reactions were more common at ≥65 years (45% and 22%) than &lt;65 (38% and 16%).</li>"
}),

/* ---------- 11 ASSESSMENT ---------- */
{ id:"assessment", part:"Assessment", title:"Final knowledge check",
intro:`<div class="eyebrow">Module 11 · Final assessment</div><h2>Test yourself across all modules</h2><p>Each quick check below draws on a different module. Aim for at least 80%.</p>`,
qa:[],
quiz:[
{ q:"Which statement best describes the TNBC indication?", o:["Any line, any PD-L1 status","Unresectable/metastatic TNBC, not candidates for PD-1/PD-L1 inhibitors","Only after sacituzumab govitecan","Only gBRCA-mutated disease"], c:1, e:"Module 5: not candidates for PD-1/PD-L1 inhibitor therapy."},
{ q:"TROPION-Breast02 met which endpoints?", o:["PFS only","OS only","Both PFS and OS","Neither"], c:2, e:"Module 9: both dual primary endpoints."},
{ q:"For a gBRCA-mutated, PD-L1-negative patient, ESMO's [I, A] option includes:", o:["Olaparib or talazoparib","Endocrine therapy","Osimertinib","No treatment"], c:0, e:"Module 6/7: PARP inhibitors [I, A]; carboplatin-based chemotherapy [II, A]."},
{ q:"Which Grade ≥3 TRAE was more common with Datroway than chemotherapy in TROPION-Breast02?", o:["Neutropenia","Stomatitis","Peripheral neuropathy","Leukopenia"], c:1, e:"Module 9: Grade ≥3 stomatitis 8% vs 0%; neutropenia was lower (3% vs 13%)."},
{ q:"What must happen with Grade ≥2 ILD/pneumonitis?", o:["Dose reduction","Permanent discontinuation","Continue with monitoring","Switch to weekly dosing"], c:1, e:"Module 10: permanently discontinue and start corticosteroids."}
],
src:"Content of Modules 1–10."}
];
return M;
})(typeof window !== "undefined" ? window.DATROWAY_COMMON : require("./datroway-common.js"));

if (typeof window !== "undefined") window.MODULES = DATROWAY_TNBC;
if (typeof module !== "undefined" && module.exports) module.exports = DATROWAY_TNBC;
