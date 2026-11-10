/*
  Datroway in HR-positive, HER2-negative metastatic breast cancer — CONTENT FILE
  Same structure as content/oab.js (see README). Shared Datroway modules come from
  content/datroway-common.js. Edit text here; the AI answers use this file too.
*/
var DATROWAY_HR_BREAST = (function (C) {
var M = [
/* ---------- 1 BIOLOGY ---------- */
{ id:"pathophysiology", part:"Part A · The disease", title:"Disease biology",
intro:`<div class="eyebrow">Module 1 · Disease biology</div>
<h2>HR-positive, HER2-negative breast cancer</h2>
<p>HR+/HER2− breast cancer expresses oestrogen and/or progesterone receptors and lacks HER2 amplification or overexpression. It is the most common subtype, accounting for up to about 70% of breast cancers. Its growth depends largely on oestrogen-receptor (ER) signalling, which is why endocrine therapy is the backbone of treatment.</p>
<h4>From endocrine-sensitive to endocrine-resistant</h4>
<div class="flow"><span class="step">ER-driven growth</span><span class="arr">→</span><span class="step">Endocrine therapy + CDK4/6 inhibitor</span><span class="arr">→</span><span class="step">Resistance: ESR1 mutations, PI3K/AKT/mTOR activation, cell-cycle escape</span><span class="arr">→</span><span class="step">Endocrine-refractory disease needing chemotherapy or ADCs</span></div>
<p>HER2-negative now spans <b>HER2-0, HER2-ultralow and HER2-low</b> (IHC 1+ or 2+/ISH−). Datroway's indication covers IHC 0, 1+ and 2+/ISH−.</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Most patients receive several endocrine-based lines before chemotherapy.</li><li>Resistance mechanisms guide targeted options (ESR1, PIK3CA/AKT1/PTEN).</li><li>Once endocrine options are exhausted, prognosis worsens and cytotoxic or ADC therapy is needed.</li></ul></div>`,
qa:[
{ id:"b-resistance", q:"How does endocrine resistance develop?", keys:"endocrine resistance esr1 pik3ca akt cdk4/6 mechanisms",
a:`<h3>Mechanisms of endocrine resistance</h3><ul><li><b>ESR1 mutations</b>: ligand-independent ER activation, typically acquired under aromatase inhibitor pressure; detected by ctDNA.</li><li><b>PI3K/AKT/mTOR pathway activation</b>: PIK3CA, AKT1 or PTEN alterations.</li><li><b>Cell-cycle escape</b> after CDK4/6 inhibitor exposure.</li><li>Loss or reduced dependence on ER signalling.</li></ul><p>Each mechanism links to a targeted option (oral SERDs for ESR1-mutant disease; PI3K/AKT inhibitors for pathway alterations), covered in Module 6.</p>`},
{ id:"b-her2low", q:"What do HER2-0, ultralow and low mean?", keys:"her2 low ultralow zero ihc ish 1+ 2+ scoring",
a:`<h3>HER2 categories in HER2-negative disease</h3><div class="tblwrap"><table><tr><th>Category</th><th>IHC / ISH</th></tr><tr><td>HER2-0</td><td>IHC 0 with no staining</td></tr><tr><td>HER2-ultralow</td><td>IHC 0 with faint, incomplete staining in ≤10% of cells</td></tr><tr><td>HER2-low</td><td>IHC 1+, or IHC 2+ with negative ISH</td></tr></table></div><p>These categories matter for trastuzumab deruxtecan eligibility. Datroway is indicated across HER2-negative disease (IHC 0, 1+, 2+/ISH−), so HER2-low status does not restrict its use.</p>`},
{ id:"b-trop2", q:"How is TROP2 relevant in breast cancer?", keys:"trop2 breast expression",
a:`<h3>TROP2 in breast cancer</h3><p>TROP2 is widely expressed in breast cancer, which makes it a target for antibody–drug conjugates. No TROP2 test is required for Datroway; eligibility is defined by HR/HER2 status and prior therapy. See Module 8 for how the ADC works.</p>`}
],
quiz:[
{ q:"Which IHC/ISH results fall within Datroway's HR+/HER2− indication?", o:["IHC 3+ only","IHC 0, IHC 1+ or IHC 2+/ISH−","IHC 2+/ISH+","Any HER2 status"], c:1, e:"The indication covers HER2-negative disease: IHC 0, 1+ or 2+/ISH−."},
{ q:"Which alteration typically emerges under aromatase inhibitor therapy and is detected by ctDNA?", o:["BRAF V600E","ESR1 mutation","EGFR exon 19 deletion","HER2 amplification"], c:1, e:"ESR1 mutations are acquired resistance mutations; ESMO recommends testing after progression on an AI ± CDK4/6 inhibitor."}
],
src:"ESMO Metastatic Breast Cancer Clinical Practice Guideline 2026; TROPION-Breast01 publications; DATROWAY US PI."},

/* ---------- 2 EPIDEMIOLOGY ---------- */
{ id:"epidemiology", part:"Part A · The disease", title:"Epidemiology & burden",
intro:`<div class="eyebrow">Module 2 · Epidemiology</div>
<h2>The most common cancer in women</h2>
<div class="facts"><div class="fact"><b>2.3 M</b><span>New breast cancer cases worldwide (2022)</span></div><div class="fact"><b>670,000</b><span>Breast cancer deaths worldwide (2022)</span></div><div class="fact"><b>~70%</b><span>Share that is HR+/HER2−</span></div><div class="fact"><b>157 / 185</b><span>Countries where it is the top cancer in women</span></div></div>
<p>Breast cancer is the most commonly diagnosed cancer and the leading cause of cancer death in women worldwide (GLOBOCAN 2022). HR+/HER2− disease is the largest subtype, so even late-line settings represent many patients.</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Large population; metastatic HR+/HER2− disease is incurable and treated sequentially.</li><li>Outcomes worsen with each line once endocrine options are exhausted.</li></ul></div>`,
qa:[
{ id:"e-saudi", q:"What about breast cancer in Saudi Arabia?", keys:"saudi arabia ksa local gulf middle east",
a:`<h3>Local context</h3><p>Breast cancer is the most common cancer among women in Saudi Arabia, as in most countries. Use the latest Saudi Cancer Registry report for local figures on incidence, age at diagnosis and stage distribution; this training does not quote them so that you always use the current edition.</p>`},
{ id:"e-burden", q:"What is the burden of metastatic HR+/HER2− disease?", keys:"burden metastatic prognosis survival quality of life",
a:`<h3>Burden of metastatic disease</h3><ul><li>Metastatic disease is treated with sequential lines with the aim of prolonging life and maintaining quality of life.</li><li>In TROPION-Breast01, a pretreated population, 97% had visceral disease and 72% had liver metastases, and median overall survival was about 18 months in both arms.</li><li>Chemotherapy in this setting has low response rates and frequent toxicity such as neutropenia.</li></ul>`}
],
quiz:[
{ q:"Roughly what share of breast cancers are HR+/HER2−?", o:["10%","30%","~70%","95%"], c:2, e:"HR+/HER2− is the most common subtype, up to about 70% of breast cancers."},
{ q:"According to GLOBOCAN 2022, how many new breast cancer cases occurred worldwide?", o:["0.5 million","1.2 million","2.3 million","5 million"], c:2, e:"About 2.3 million new cases and 670,000 deaths in 2022."}
],
src:"Bray F et al. CA Cancer J Clin 2024 (GLOBOCAN 2022); WHO/IARC 2024; DATROWAY US PI (TROPION-Breast01 population)."},

/* ---------- 3 PRESENTATION ---------- */
{ id:"symptoms", part:"Part A · The disease", title:"Clinical presentation",
intro:`<div class="eyebrow">Module 3 · Presentation</div>
<h2>How metastatic disease shows itself</h2>
<p>Metastatic HR+/HER2− breast cancer may be found at diagnosis (de novo) or, more often, as a recurrence years after early breast cancer. Bone is a common first site; visceral spread (liver, lung) becomes frequent in later lines.</p>
<div class="tblwrap"><table><tr><th>Site</th><th>Typical symptoms</th></tr>
<tr><td>Bone</td><td>Pain, fractures, spinal cord compression, hypercalcaemia</td></tr>
<tr><td>Liver</td><td>Abdominal discomfort, jaundice, abnormal liver tests</td></tr>
<tr><td>Lung / pleura</td><td>Cough, breathlessness, pleural effusion</td></tr>
<tr><td>Brain</td><td>Headache, neurological deficits, seizures</td></tr>
<tr><td>General</td><td>Fatigue, weight loss, reduced performance status</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Late recurrence is characteristic of HR+ disease.</li><li>Visceral involvement and organ function influence treatment urgency.</li></ul></div>`,
qa:[
{ id:"p-visceral", q:"Why does visceral crisis matter?", keys:"visceral crisis organ failure urgency rapid response",
a:`<h3>Visceral crisis</h3><p>Visceral crisis means severe organ dysfunction from rapidly progressing disease. It calls for a treatment that works quickly. ESMO recommends sequential single-agent chemotherapy in general, but combinations or specific regimens may be used when imminent organ failure requires a rapid response.</p>`},
{ id:"p-baseline", q:"What should be checked before Datroway?", keys:"baseline eye lung assessment before starting",
a:`<h3>Datroway-specific baseline checks</h3><ul><li>History of ILD/pneumonitis or current lung disease (patients with steroid-requiring ILD were excluded from trials).</li><li>Full ophthalmic examination, and any corneal disease.</li><li>Oral health and mouth care plan.</li><li>Pregnancy status and contraception.</li><li>Prior endocrine therapy and chemotherapy lines for advanced disease.</li></ul>`}
],
quiz:[
{ q:"Which recurrence pattern is characteristic of HR+ breast cancer?", o:["Recurrence only in the first year","Late recurrence, sometimes many years after early disease","No recurrence after surgery","Recurrence only in the brain"], c:1, e:"HR+ disease can recur many years after initial treatment."},
{ q:"Which baseline examination is specific to Datroway?", o:["Echocardiogram","Ophthalmic examination","Bone marrow biopsy","Audiometry"], c:1, e:"The label requires an eye examination at start and end of treatment, with slit-lamp checks every 3 cycles."}
],
src:"ESMO MBC Clinical Practice Guideline 2026; DATROWAY US PI."},

/* ---------- 4 DIAGNOSIS ---------- */
{ id:"diagnosis", part:"Part A · The disease", title:"Diagnosis & biomarkers",
intro:`<div class="eyebrow">Module 4 · Diagnosis & biomarkers</div>
<h2>Confirm the disease, then test for targets</h2>
<div class="tblwrap"><table><tr><th>Step</th><th>Tool</th><th>Purpose</th></tr>
<tr><td class="num">1</td><td>Staging imaging (CT chest/abdomen/pelvis, bone imaging; PET-CT or brain MRI when indicated)</td><td>Extent of disease</td></tr>
<tr><td class="num">2</td><td>Biopsy of a metastasis where feasible</td><td>Confirm diagnosis; re-test ER, PR and HER2</td></tr>
<tr><td class="num">3</td><td>HER2 re-assessment (IHC/ISH)</td><td>Define HER2-0, ultralow or low</td></tr>
<tr><td class="num">4</td><td>ESR1 mutation (ctDNA or tissue)</td><td>After progression on an aromatase inhibitor ± CDK4/6 inhibitor</td></tr>
<tr><td class="num">5</td><td>PIK3CA / AKT1 / PTEN</td><td>Eligibility for pathway inhibitors</td></tr>
<tr><td class="num">6</td><td>Germline BRCA1/2</td><td>Eligibility for PARP inhibitors</td></tr></table></div>
<div class="keybox"><strong>For Datroway</strong><ul><li>No TROP2 test is required.</li><li>Eligibility: HR+, HER2-negative (IHC 0, 1+, 2+/ISH−), prior endocrine-based therapy and chemotherapy for advanced disease.</li></ul></div>`,
qa:[
{ id:"dx-esmo", q:"Which biomarker tests does ESMO recommend?", keys:"esmo biomarker testing esr1 pik3ca brca her2 escat",
a:`<h3>ESMO 2026 biomarker recommendations (HR+/HER2− MBC)</h3><ul><li>ESR1 mutation testing (ctDNA or tissue) after progression on an aromatase inhibitor ± CDK4/6 inhibitor [I, A; ESCAT I-A].</li><li>PIK3CA pathway alterations (PIK3CA, PTEN, AKT1), mainly in endocrine-resistant disease [I, A; ESCAT I-A].</li><li>Germline BRCA1/2 in HER2-negative MBC if specific treatments are available [I, A].</li><li>For patients no longer candidates for endocrine therapy, reassess HER2 to identify HER2-low, ultralow or 0 [I, A].</li></ul>`},
{ id:"dx-retest", q:"Why re-biopsy metastases?", keys:"rebiopsy biopsy metastasis receptor discordance",
a:`<h3>Re-biopsy</h3><p>Receptor status can change between the primary tumour and metastases. A biopsy of a metastatic site, where feasible, confirms the diagnosis and updates ER, PR and HER2 status, which determines which targeted therapies and ADCs apply.</p>`}
],
quiz:[
{ q:"Is a TROP2 test needed before prescribing Datroway?", o:["Yes, IHC ≥1+","Yes, by NGS","No, eligibility is based on HR/HER2 status and prior therapy","Only in Asian patients"], c:2, e:"No TROP2 testing is required by the label."},
{ q:"When does ESMO recommend ESR1 testing?", o:["At diagnosis of early breast cancer","After progression on an aromatase inhibitor ± CDK4/6 inhibitor","Only in HER2-positive disease","Never"], c:1, e:"ESR1 mutations are acquired; test after progression on AI-based therapy [I, A]."}
],
src:"ESMO Metastatic Breast Cancer Clinical Practice Guideline 2026; DATROWAY US PI."},

/* ---------- 5 PATIENT JOURNEY ---------- */
{ id:"journey", part:"Part A · The disease", title:"Patient journey",
intro:`<div class="eyebrow">Module 5 · Patient journey</div>
<h2>Where Datroway fits in the journey</h2>
<div class="flow"><span class="step">Metastatic diagnosis</span><span class="arr">→</span><span class="step">1L endocrine therapy + CDK4/6 inhibitor</span><span class="arr">→</span><span class="step">2L+ endocrine-based / targeted therapy</span><span class="arr">→</span><span class="step">Endocrine-refractory: chemotherapy</span><span class="arr">→</span><span class="step"><b>Datroway</b> (after ≥1 chemotherapy line)</span><span class="arr">→</span><span class="step">Further lines / supportive care</span></div>
<div class="tblwrap"><table><tr><th>Stage</th><th>Patient experience</th><th>What helps</th></tr>
<tr><td>Endocrine phase</td><td>Oral therapy, relatively well tolerated</td><td>Biomarker testing at progression</td></tr>
<tr><td>Transition to chemotherapy</td><td>Fear of side effects, hair loss, infusions</td><td>Clear explanation of options including ADCs</td></tr>
<tr><td>Starting Datroway</td><td>New routines: mouthwash, eye drops, eye checks</td><td>Nurse education, written prophylaxis plan</td></tr>
<tr><td>On treatment</td><td>Mouth soreness, dry eyes, nausea, fatigue</td><td>Early reporting; dose adjustments per label</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Datroway's indication is after endocrine-based therapy <b>and</b> chemotherapy for advanced disease.</li><li>Patient education on prophylaxis is central to tolerability.</li></ul></div>`,
qa:[
{ id:"j-eligible", q:"Which patients are eligible for Datroway in this indication?", keys:"eligible eligibility which patients line prior therapy",
a:`<h3>Eligibility (US label)</h3><p>Adults with unresectable or metastatic HR+, HER2-negative (IHC 0, 1+, or 2+/ISH−) breast cancer who have received prior endocrine-based therapy <b>and</b> chemotherapy for unresectable or metastatic disease.</p><p>In TROPION-Breast01, patients had progressed on and were unsuitable for further endocrine therapy and had received 1–2 prior chemotherapy lines in the advanced setting; 83% had received a CDK4/6 inhibitor.</p>`},
{ id:"j-education", q:"What should patients be taught before starting?", keys:"patient education counselling teach mouthwash eye drops",
a:`<h3>Patient education checklist</h3><ul><li>Use the steroid mouthwash 4× daily; use ice chips during the infusion.</li><li>Use preservative-free eye drops at least 4× daily; avoid contact lenses.</li><li>Report new cough, breathlessness or fever immediately.</li><li>Report eye pain, blurred vision or mouth sores early.</li><li>Use effective contraception as advised.</li></ul>`},
{ id:"j-qol", q:"What did patients report about quality of life?", keys:"quality of life patient reported outcomes pro time to deterioration",
a:`<h3>Patient-reported outcomes (TROPION-Breast01)</h3><p>Datroway generally prolonged time to deterioration in physical functioning and other symptom and function measures compared with chemotherapy. Nausea/vomiting, constipation and breast symptoms did not favour Datroway. Artificial tears were used by 71.7% of Datroway-treated patients.</p>`}
],
quiz:[
{ q:"At which point in the HR+/HER2− journey is Datroway indicated?", o:["First line with an aromatase inhibitor","After endocrine-based therapy and chemotherapy for advanced disease","Adjuvant therapy","Before any endocrine therapy"], c:1, e:"The indication requires prior endocrine-based therapy and chemotherapy for unresectable or metastatic disease."},
{ q:"Which patient instruction is specific to Datroway?", o:["Avoid grapefruit juice","Use preservative-free eye drops and avoid contact lenses","Take with a high-fat meal","Monitor blood glucose"], c:1, e:"Ocular prophylaxis is part of every Datroway treatment plan."}
],
src:"DATROWAY US PI; Rugo HS et al. (TROPION-Breast01 PROs), reported 2025."},

/* ---------- 6 TREATMENT OPTIONS ---------- */
{ id:"treatment", part:"Part A · The disease", title:"Treatment options",
intro:`<div class="eyebrow">Module 6 · Treatment options</div>
<h2>Sequencing in HR+/HER2− metastatic breast cancer</h2>
<div class="tblwrap"><table><tr><th>Phase</th><th>Main options</th></tr>
<tr><td><b>Endocrine-sensitive</b></td><td>Endocrine therapy + CDK4/6 inhibitor (palbociclib, ribociclib, abemaciclib)</td></tr>
<tr><td><b>After progression, targeted</b></td><td>ESR1-mutant: oral SERDs (e.g. elacestrant, imlunestrant); PI3K/AKT pathway: PI3K or AKT inhibitor combinations; everolimus + exemestane; gBRCA: PARP inhibitors</td></tr>
<tr><td><b>Endocrine-refractory</b></td><td>Single-agent chemotherapy (capecitabine, taxanes, eribulin, etc.)</td></tr>
<tr><td><b>ADCs</b></td><td>Trastuzumab deruxtecan (HER2-low/ultralow); sacituzumab govitecan; <b>Datroway</b></td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>ESMO: at least two endocrine-based lines are suggested before non-endocrine therapy in endocrine-sensitive disease.</li><li>The optimal sequence of ADCs has not been established.</li></ul></div>`,
qa:[
{ id:"t-adcs", q:"How do the ADCs compare in this setting?", keys:"adc compare trastuzumab deruxtecan sacituzumab datroway sequence",
a:`<h3>ADCs in HR+/HER2− MBC (ESMO 2026)</h3><div class="tblwrap"><table><tr><th>ADC</th><th>Setting</th><th>ESMO grade; MCBS</th></tr>
<tr><td>Trastuzumab deruxtecan</td><td>HER2-low, after ≥1 line of chemotherapy</td><td>[I, A]; MCBS 4</td></tr>
<tr><td>Sacituzumab govitecan</td><td>After ≥1 line of chemotherapy</td><td>[I, B]; MCBS 4</td></tr>
<tr><td><b>Datroway</b></td><td>After ≥1 line of chemotherapy</td><td>[I, B]; MCBS 3</td></tr></table></div><p>No head-to-head trials exist, and sequencing ADCs with the same payload class is an open question.</p>`},
{ id:"t-chemo", q:"How does Datroway compare with standard chemotherapy?", keys:"versus chemotherapy eribulin capecitabine advantage",
a:`<h3>Versus investigator's choice chemotherapy (TROPION-Breast01)</h3><ul><li>PFS: 6.9 vs 4.9 months (HR 0.63).</li><li>OS: 18.6 vs 18.3 months (HR 1.01) — no difference.</li><li>ORR: 36% vs 23%.</li><li>Grade ≥3 treatment-related AEs: 21% vs 45%; less neutropenia; G-CSF use 3% vs 22%.</li><li>Trade-off: more stomatitis and ocular events, requiring prophylaxis.</li></ul>`}
],
quiz:[
{ q:"What is standard first-line therapy for most patients with HR+/HER2− MBC?", o:["Chemotherapy","Endocrine therapy plus a CDK4/6 inhibitor","Datroway","Immunotherapy"], c:1, e:"Endocrine therapy plus a CDK4/6 inhibitor is standard first line for endocrine-sensitive disease."},
{ q:"What ESMO-MCBS score does Datroway have in HR+/HER2− MBC?", o:["1","3","5","A"], c:1, e:"ESMO 2026: Dato-DXd can be recommended after ≥1 line of chemotherapy [I, B; ESMO-MCBS v2.0: 3]."}
],
src:"ESMO Metastatic Breast Cancer Clinical Practice Guideline 2026; Bardia A et al. J Clin Oncol 2025 (TROPION-Breast01); DATROWAY US PI."},

/* ---------- 7 GUIDELINES ---------- */
{ id:"guidelines", part:"Part B · Guidelines", title:"Guidelines (ESMO, NCCN)",
intro:`<div class="eyebrow">Module 7 · Guidelines</div>
<h2>What the guidelines say</h2>
<h4>ESMO Metastatic Breast Cancer Clinical Practice Guideline (2026)</h4>
<div class="tblwrap"><table><tr><th>Statement</th><th>Grade</th></tr>
<tr><td><b>Datroway can be recommended for HR+/HER2− MBC after ≥1 line of chemotherapy</b></td><td><span class="pill weak">I, B</span> ESMO-MCBS 3</td></tr>
<tr><td>Sacituzumab govitecan recommended after ≥1 line of chemotherapy</td><td><span class="pill weak">I, B</span> MCBS 4</td></tr>
<tr><td>Trastuzumab deruxtecan recommended for HER2-low after ≥1 line of chemotherapy, if not already used</td><td><span class="pill strong">I, A</span> MCBS 4</td></tr>
<tr><td>Chemotherapy or ADCs when endocrine resistant/refractory and targeted agents used or ruled out</td><td><span class="pill weak">V, B</span></td></tr>
<tr><td>The optimal sequence of therapy in ER+ MBC has not been established</td><td><span class="pill strong">I, A</span></td></tr></table></div>
<h4>NCCN</h4><p>The NCCN Breast Cancer guidelines include Datroway as a treatment option for HR+/HER2− recurrent or metastatic disease after prior endocrine therapy and chemotherapy. Check the current NCCN version for its category and preference status.</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>ESMO positions Datroway among ADC options after chemotherapy, with a lower grade (I, B) than T-DXd for HER2-low (I, A).</li><li>Guidelines do not define a preferred ADC sequence.</li></ul></div>`,
qa:[
{ id:"g-mcbs", q:"What is the ESMO-MCBS and why is the score 3?", keys:"esmo mcbs magnitude clinical benefit scale score 3",
a:`<h3>ESMO Magnitude of Clinical Benefit Scale</h3><p>The ESMO-MCBS grades the size of clinical benefit in the non-curative setting from 1 to 5. Scores of 4–5 indicate substantial benefit. Datroway's score of 3 reflects a PFS gain (6.9 vs 4.9 months, HR 0.63) without an overall survival benefit in TROPION-Breast01.</p>`},
{ id:"g-endocrine", q:"What do guidelines say about endocrine therapy before chemotherapy?", keys:"endocrine lines before chemotherapy sequence esmo",
a:`<h3>Endocrine therapy first</h3><p>ESMO suggests at least two endocrine-based lines before moving to non-endocrine therapy in endocrine-sensitive disease [V, B], and recommends sequential single-agent chemotherapy over combinations except when rapid response is needed for imminent organ failure [II, A].</p>`}
],
quiz:[
{ q:"What ESMO grade does Datroway receive in HR+/HER2− MBC after ≥1 chemotherapy line?", o:["I, A","I, B","III, C","Not recommended"], c:1, e:"ESMO 2026: Dato-DXd can be recommended [I, B; ESMO-MCBS v2.0: 3]."},
{ q:"Does ESMO define the optimal ADC sequence in ER+ MBC?", o:["Yes: T-DXd then Datroway","Yes: Datroway first","No, the optimal sequence has not been established","Yes: sacituzumab govitecan last"], c:2, e:"ESMO states the optimal sequence of therapy in ER+ MBC has not been established."}
],
src:"de Azambuja E et al. Metastatic breast cancer: ESMO Clinical Practice Guideline (2026, journal pre-proof); NCCN Guidelines Breast Cancer (current version)."},

/* ---------- 8 MOA (shared) ---------- */
C.moaModule({
approval:`<h3>Regulatory status (HR+/HER2− breast cancer)</h3><ul><li><b>US (FDA)</b>: approved 17 January 2025 for adults with unresectable or metastatic HR+, HER2-negative (IHC 0, 1+, 2+/ISH−) breast cancer after prior endocrine-based therapy and chemotherapy for advanced disease.</li><li><b>EU</b>: CHMP positive opinion 30 January 2025; approved in the EU for this indication.</li><li>Approved in more than 45 countries/regions for this indication (company statement, July 2026).</li><li><b>Saudi Arabia</b>: confirm current SFDA registration and label wording before use.</li></ul>`
}),

/* ---------- 9 TRIALS ---------- */
{ id:"trials", part:"Part C · Datroway", title:"Clinical trials",
intro:`<div class="eyebrow">Module 9 · Clinical evidence</div>
<h2>TROPION-Breast01: the pivotal phase 3 trial</h2>
<div class="tblwrap"><table><tr><th>Design</th><td>Randomised 1:1, open-label, phase 3; n = 732 (Datroway 365, chemotherapy 367)</td></tr>
<tr><th>Population</th><td>HR+/HER2− (IHC 0, 1+, 2+/ISH−) inoperable or metastatic breast cancer; progressed on and unsuitable for endocrine therapy; 1–2 prior chemotherapy lines in the advanced setting; ECOG 0–1</td></tr>
<tr><th>Comparator</th><td>Investigator's choice: eribulin 60%, capecitabine 21%, vinorelbine 10%, gemcitabine 9%</td></tr>
<tr><th>Primary endpoints</th><td>PFS by blinded independent central review (BICR) and OS (dual primary)</td></tr></table></div>
<div class="tblwrap"><table><tr><th>Outcome</th><th>Datroway</th><th>Chemotherapy</th><th>HR (95% CI)</th></tr>
<tr><td>Median PFS (BICR)</td><td class="num">6.9 mo</td><td class="num">4.9 mo</td><td class="num">0.63 (0.52–0.76); p&lt;0.0001</td></tr>
<tr><td>Median OS (final)</td><td class="num">18.6 mo</td><td class="num">18.3 mo</td><td class="num">1.01 (0.83–1.22); NS</td></tr>
<tr><td>Confirmed ORR</td><td class="num">36%</td><td class="num">23%</td><td>—</td></tr>
<tr><td>Median DOR</td><td class="num">6.7 mo</td><td class="num">5.7 mo</td><td>—</td></tr>
<tr><td>Grade ≥3 TRAEs</td><td class="num">21%</td><td class="num">45%</td><td>—</td></tr></table></div>
<div class="warn"><strong>Present accurately.</strong> TROPION-Breast01 met its PFS endpoint but showed <b>no overall survival benefit</b>. Present the OS result alongside PFS.</div>`,
qa:[
{ id:"tr-tb01-pop", tag:"Population", q:"Who was enrolled in TROPION-Breast01?", keys:"population baseline characteristics enrolled tb01 cdk4/6",
a:`<h3>Baseline characteristics</h3><ul><li>Median age 55; 99% female; 48% White, 41% Asian.</li><li>97% visceral disease; 72% liver metastases.</li><li>83% prior CDK4/6 inhibitor; 89% prior endocrine therapy for advanced disease.</li><li>81% prior taxane; 64% prior anthracycline.</li><li>Excluded: steroid-requiring or ongoing ILD, clinically active brain metastases, clinically significant corneal disease, ECOG &gt;1.</li></ul>`},
{ id:"tr-tb01-os", tag:"OS result", q:"Why was there no overall survival benefit?", keys:"overall survival os no benefit subsequent therapy crossover",
a:`<h3>Interpreting the OS result</h3><p>Final OS was 18.6 vs 18.3 months (HR 1.01; 95% CI 0.83–1.22), not statistically significant. One factor discussed is subsequent therapy: after progression, more patients in the chemotherapy arm went on to receive another ADC (24% vs 12% with Datroway), which may have affected OS. This is a hypothesis, not a proven explanation; present the OS result as no difference.</p>`},
{ id:"tr-tb01-safety", tag:"Safety", q:"What were the key safety results of TROPION-Breast01?", keys:"safety adverse events tb01 neutropenia stomatitis ocular ild",
a:`<h3>Safety (Datroway vs chemotherapy)</h3><div class="tblwrap"><table><tr><th>Outcome</th><th>Datroway</th><th>Chemotherapy</th></tr>
<tr><td>Grade ≥3 TRAEs</td><td class="num">21%</td><td class="num">45%</td></tr>
<tr><td>Dose reduction due to AEs</td><td class="num">21%</td><td class="num">30%</td></tr>
<tr><td>Dose interruption due to AEs</td><td class="num">12%</td><td class="num">25%</td></tr>
<tr><td>Treatment-related neutropenia</td><td class="num">11%</td><td class="num">42%</td></tr>
<tr><td>G-CSF use during treatment</td><td class="num">3%</td><td class="num">22%</td></tr>
<tr><td>Stomatitis (any grade)</td><td class="num">50%</td><td class="num">13%</td></tr></table></div>
<p>Adverse events of special interest with Datroway: stomatitis/oral mucositis 56%, ocular events 40%, adjudicated drug-related ILD 3%; mostly low grade and occurring in the first few cycles (median onset: stomatitis cycle 2, ocular cycle 3, ILD cycle 4). Median treatment duration was 6.7 vs 4.1 months.</p>`},
{ id:"tr-tb01-sub", tag:"Subgroups", q:"Were results consistent across subgroups?", keys:"subgroups brain metastases cdk4/6 duration consistent",
a:`<h3>Subgroups</h3><p>PFS benefit was similar regardless of how long patients had received a prior CDK4/6 inhibitor. In patients with baseline brain metastases, the PFS difference was not significant (HR 0.73; 95% CI 0.39–1.42), with small numbers.</p>`},
{ id:"tr-ongoing", tag:"Ongoing", q:"Which other Datroway breast cancer trials are ongoing?", keys:"ongoing trials tropion breast03 breast04 breast05 future",
a:`<h3>Wider breast programme</h3><ul><li><b>TROPION-Breast02</b>: first-line metastatic TNBC not candidates for immunotherapy (positive; see the TNBC training).</li><li>Two phase 3 trials of Datroway plus durvalumab in breast cancer were initiated in December 2023.</li></ul><p>Check current results before discussing trials that were ongoing at the time this training was written.</p>`}
],
quiz:[
{ q:"What was the PFS hazard ratio in TROPION-Breast01?", o:["0.43","0.63","0.79","1.01"], c:1, e:"PFS 6.9 vs 4.9 months, HR 0.63 (95% CI 0.52–0.76)."},
{ q:"What was the final OS result of TROPION-Breast01?", o:["Significant benefit, HR 0.79","No difference, 18.6 vs 18.3 months (HR 1.01)","Worse with Datroway","Not yet reported"], c:1, e:"OS was not statistically different: 18.6 vs 18.3 months, HR 1.01."},
{ q:"Grade ≥3 treatment-related AEs in TROPION-Breast01 were:", o:["45% vs 21%","21% vs 45%","33% vs 29%","Equal"], c:1, e:"21% with Datroway vs 45% with chemotherapy."}
],
src:"Bardia A et al. J Clin Oncol 2025;43:285-296; final OS: ESMO Virtual Plenary 2025 (VP1-2025); Jhaveri K et al. ESMO Breast 2024 LBA2; DATROWAY US PI; FDA approval summary (Clin Cancer Res 2025)."},

/* ---------- 10 SAFETY (shared) ---------- */
C.safetyModule({
popName:"HR+/HER2− breast cancer", popShort:"TROPION-Breast01, Datroway (n=360)",
lead:"Median treatment duration in the label safety population was 6.7 months.",
rows:`<tr><td>Most common adverse reactions</td><td>Stomatitis 59% (Grade 3: 7%), nausea 56%, fatigue 44%, alopecia 38%, constipation 34%, dry eye 27%, keratitis 24%, vomiting 24%</td></tr>
<tr><td>Serious adverse reactions</td><td class="num">15%</td></tr>
<tr><td>Discontinuation / dose reduction / interruption</td><td class="num">3.1% / 23% / 22%</td></tr>
<tr><td>Lab abnormalities (all grades)</td><td>Decreased leukocytes 41%, decreased calcium 39%, decreased lymphocytes 36%, decreased haemoglobin 35%, decreased neutrophils 30%</td></tr>`,
ild:"Breast cancer pooled population (n=841): ILD/pneumonitis in 3.0% (Grade 3: 0.4%), 2 fatal cases (0.2%); median onset 5.3 months; corticosteroids needed in 64%.",
otherExtra:"<li><b>Older patients (breast)</b>: Grade ≥3 and serious adverse reactions were more common at ≥65 years (45% and 22%) than &lt;65 (38% and 16%).</li>"
}),

/* ---------- 11 ASSESSMENT ---------- */
{ id:"assessment", part:"Assessment", title:"Final knowledge check",
intro:`<div class="eyebrow">Module 11 · Final assessment</div><h2>Test yourself across all modules</h2><p>Each quick check below draws on a different module. Aim for at least 80%.</p>`,
qa:[],
quiz:[
{ q:"Which patients are eligible for Datroway in HR+/HER2− MBC?", o:["Endocrine-naïve first line","After prior endocrine-based therapy and chemotherapy for advanced disease","HER2 IHC 3+","Early breast cancer"], c:1, e:"Module 5: prior endocrine-based therapy and chemotherapy for unresectable/metastatic disease."},
{ q:"Which statement about TROPION-Breast01 is accurate?", o:["Improved PFS and OS","Improved PFS; no OS difference","Improved OS only","Failed both endpoints"], c:1, e:"Module 9: PFS HR 0.63; OS HR 1.01."},
{ q:"What is the main reason Datroway caused less neutropenia than chemotherapy?", o:["It contains G-CSF","Its toxicity profile is dominated by stomatitis and ocular events rather than myelosuppression","It is given orally","It is dosed weekly"], c:1, e:"Modules 9–10: treatment-related neutropenia 11% vs 42%; G-CSF use 3% vs 22%."},
{ q:"How often should visual acuity and slit lamp exams be done on Datroway?", o:["Every cycle","Every 3 cycles","Only at baseline","Never"], c:1, e:"Module 10: every 3 cycles, plus full exams at start and end of treatment."},
{ q:"What ESMO grade applies to Datroway in this indication?", o:["I, A","I, B","II, C","IV, D"], c:1, e:"Module 7: [I, B; ESMO-MCBS 3]."}
],
src:"Content of Modules 1–10."}
];
return M;
})(typeof window !== "undefined" ? window.DATROWAY_COMMON : require("./datroway-common.js"));

if (typeof window !== "undefined") window.MODULES = DATROWAY_HR_BREAST;
if (typeof module !== "undefined" && module.exports) module.exports = DATROWAY_HR_BREAST;
