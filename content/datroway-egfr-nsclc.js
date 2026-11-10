/*
  Datroway in previously treated EGFR-mutated NSCLC — CONTENT FILE.
  US accelerated approval only. Same structure as content/oab.js (see README).
  Shared Datroway modules come from content/datroway-common.js.
*/
var DATROWAY_EGFR_NSCLC = (function (C) {
var M = [
/* ---------- 1 BIOLOGY ---------- */
{ id:"pathophysiology", part:"Part A · The disease", title:"Disease biology",
intro:`<div class="eyebrow">Module 1 · Disease biology</div>
<h2>EGFR-mutated non-small cell lung cancer</h2>
<p>Activating mutations in the epidermal growth factor receptor (EGFR) gene drive a subset of NSCLC, almost always adenocarcinoma. The mutant receptor signals continuously, and tumours become dependent on it ("oncogene addiction"), which is why EGFR tyrosine kinase inhibitors (TKIs) work so well at first.</p>
<div class="tblwrap"><table><tr><th>Mutation type</th><th>Notes</th></tr>
<tr><td><b>Classical</b>: exon 19 deletion, exon 21 L858R</td><td>About 85–90% of EGFR mutations; highly TKI-sensitive</td></tr>
<tr><td>Uncommon: G719X, S768I, L861Q</td><td>Variable TKI sensitivity</td></tr>
<tr><td>Exon 20 insertions</td><td>Largely insensitive to classical TKIs; separate treatments</td></tr></table></div>
<h4>The resistance problem</h4>
<div class="flow"><span class="step">Osimertinib-based first line</span><span class="arr">→</span><span class="step">Acquired resistance: EGFR-dependent (e.g. C797S) or bypass (MET amplification, HER2), or histologic transformation</span><span class="arr">→</span><span class="step">Platinum chemotherapy ± amivantamab</span><span class="arr">→</span><span class="step">Limited options → <b>Datroway</b></span></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Resistance to osimertinib is heterogeneous, so a target-agnostic cytotoxic delivered by an ADC is attractive.</li><li>Datroway's indication is after EGFR-directed therapy and platinum chemotherapy.</li></ul></div>`,
qa:[
{ id:"b-resist", q:"How does resistance to osimertinib arise?", keys:"resistance osimertinib c797s met amplification transformation mechanisms",
a:`<h3>Resistance mechanisms</h3><ul><li><b>On-target</b>: new EGFR mutations such as C797S.</li><li><b>Bypass signalling</b>: MET amplification, HER2 amplification, other pathway activation.</li><li><b>Histologic transformation</b>: to small cell or squamous carcinoma.</li><li>Often no single identifiable mechanism.</li></ul><p>This heterogeneity is why re-biopsy or liquid biopsy at progression is useful and why therapies that do not depend on one resistance mechanism are being developed.</p>`},
{ id:"b-trop2", q:"Why target TROP2 in EGFR-mutated NSCLC?", keys:"trop2 lung expression why",
a:`<h3>TROP2 in lung cancer</h3><p>TROP2 is expressed on many NSCLCs. A TROP2-directed ADC delivers a topoisomerase I inhibitor regardless of the EGFR resistance mechanism. No TROP2 test is required; eligibility is based on EGFR mutation status and prior therapy. A computational-pathology TROP2 biomarker has been explored in TROPION-Lung01 but is not used for selection.</p>`}
],
quiz:[
{ q:"Which EGFR mutations are 'classical'?", o:["Exon 20 insertions","Exon 19 deletion and exon 21 L858R","T790M only","KRAS G12C"], c:1, e:"Exon 19 deletions and L858R are the classical, TKI-sensitive mutations."},
{ q:"Which is an example of a bypass resistance mechanism to osimertinib?", o:["MET amplification","EGFR exon 19 deletion","PD-L1 expression","ALK fusion at diagnosis"], c:0, e:"MET amplification is a common bypass mechanism."}
],
src:"NCCN NSCLC v1.2026; ASCO Living Guideline 2026.3.0; Tan DSW et al. Ther Adv Med Oncol 2025 (TROPION-Lung15 design)."},

/* ---------- 2 EPIDEMIOLOGY ---------- */
{ id:"epidemiology", part:"Part A · The disease", title:"Epidemiology & burden",
intro:`<div class="eyebrow">Module 2 · Epidemiology</div>
<h2>Lung cancer and EGFR mutations</h2>
<div class="facts"><div class="fact"><b>2.5 M</b><span>New lung cancer cases worldwide (2022)</span></div><div class="fact"><b>1.8 M</b><span>Lung cancer deaths (2022): the leading cause of cancer death</span></div><div class="fact"><b>~1/3</b><span>Gulf-region lung adenocarcinomas with EGFR mutations (single study)</span></div><div class="fact"><b>~47%</b><span>EGFR frequency in Asian populations</span></div></div>
<p>NSCLC makes up most lung cancer. EGFR mutation frequency varies by ethnicity: highest in East Asian populations, lower in Western populations, and intermediate in Middle Eastern series. Mutations are more frequent in women, never-smokers and adenocarcinoma.</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>EGFR-mutated NSCLC is a large, distinct population, especially relevant in Asia and the Middle East.</li><li>Almost all patients eventually progress on first-line targeted therapy.</li></ul></div>`,
qa:[
{ id:"e-gulf", q:"What is known about EGFR mutations in Saudi Arabia and the Gulf?", keys:"saudi arabia gulf middle east prevalence local",
a:`<h3>Regional data</h3><ul><li>A multicentre study from Saudi Arabia, the UAE and Qatar (Jazieh et al., Mol Clin Oncol 2015; n=230) found EGFR mutations in 28.7% overall and 32.5% of adenocarcinomas; none in squamous cell carcinoma. Female sex, never-smoking and adenocarcinoma predicted mutation; there was no difference between Arab and non-Arab patients.</li><li>A Middle East/North Africa study (ACHOG) found EGFR mutations in 31.3% of tested metastatic nonsquamous cases, and noted that many patients were never tested, mainly because physicians did not know where or how to send the test.</li></ul><p>These are older, selected cohorts; use recent local data where available.</p>`},
{ id:"e-burden", q:"What is the burden after progression on targeted therapy?", keys:"burden prognosis after progression",
a:`<h3>After targeted therapy</h3><p>After osimertinib and platinum chemotherapy, options have historically been limited to further chemotherapy such as docetaxel, with modest benefit and substantial toxicity. In TROPION-Lung05, 71.5% of patients had received at least three prior lines for advanced disease, reflecting the heavily pretreated population.</p>`}
],
quiz:[
{ q:"Lung cancer caused about how many deaths worldwide in 2022?", o:["0.5 million","1.0 million","1.8 million","3 million"], c:2, e:"About 1.8 million deaths (18.7% of cancer deaths)."},
{ q:"Which characteristics predict EGFR mutation?", o:["Male sex and heavy smoking","Female sex, never-smoking and adenocarcinoma","Squamous histology","Older age only"], c:1, e:"Consistent across regional and global studies."}
],
src:"Bray F et al. CA Cancer J Clin 2024 (GLOBOCAN 2022); Jazieh AR et al. Mol Clin Oncol 2015; ACHOG MENA study, J Immunother Precis Oncol 2019; systematic review of EGFR mutation frequency in Middle East and African populations (2018)."},

/* ---------- 3 PRESENTATION ---------- */
{ id:"symptoms", part:"Part A · The disease", title:"Clinical presentation",
intro:`<div class="eyebrow">Module 3 · Presentation</div>
<h2>Presentation and progression</h2>
<div class="tblwrap"><table><tr><th>Area</th><th>Typical features</th></tr>
<tr><td>Chest</td><td>Cough, breathlessness, haemoptysis, chest pain, pleural effusion</td></tr>
<tr><td>Brain</td><td>Common in EGFR-mutated disease; headache, deficits, seizures</td></tr>
<tr><td>Bone</td><td>Pain, fractures</td></tr>
<tr><td>General</td><td>Fatigue, weight loss</td></tr></table></div>
<p>Progression on targeted therapy may be radiological only, slow and limited (oligoprogression), or rapid and widespread; the pattern influences next steps.</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Brain metastases are frequent: 33% of patients in the pooled efficacy population had them.</li><li>Pre-existing lung disease matters because ILD is a key Datroway risk in NSCLC.</li></ul></div>`,
qa:[
{ id:"p-baseline", q:"What should be checked before starting Datroway?", keys:"baseline before start checks ild eye",
a:`<h3>Baseline checks</h3><ul><li>Lung history and imaging: prior ILD, radiation pneumonitis, current lung disease. ILD incidence is higher in NSCLC (7%) than breast cancer (3%).</li><li>Ophthalmic examination; any corneal disease.</li><li>Brain imaging status; untreated symptomatic brain metastases were excluded from trials.</li><li>Confirm EGFR mutation and prior EGFR-directed therapy and platinum chemotherapy.</li><li>Pregnancy status and contraception.</li></ul>`},
{ id:"p-brain", q:"What about brain metastases?", keys:"brain metastases cns",
a:`<h3>Brain metastases</h3><p>In the pooled TROPION-Lung05/Lung01 efficacy population, 33% had brain metastases. Patients with untreated symptomatic brain metastases were excluded. The label does not report separate intracranial efficacy.</p>`}
],
quiz:[
{ q:"What share of the pooled EGFRm efficacy population had brain metastases?", o:["5%","15%","33%","70%"], c:2, e:"33% had brain metastases at baseline."},
{ q:"Why is baseline lung assessment especially important in NSCLC?", o:["Datroway causes hypertension","ILD/pneumonitis occurred in 7% of NSCLC patients, higher than in breast cancer","It is required for EGFR testing","Datroway is inhaled"], c:1, e:"ILD 7% in the NSCLC pooled population vs 3% in breast cancer."}
],
src:"DATROWAY US PI (revised 05/2026)."},

/* ---------- 4 DIAGNOSIS ---------- */
{ id:"diagnosis", part:"Part A · The disease", title:"Diagnosis & biomarkers",
intro:`<div class="eyebrow">Module 4 · Diagnosis & biomarkers</div>
<h2>Test broadly at diagnosis, re-test at progression</h2>
<div class="tblwrap"><table><tr><th>When</th><th>Test</th><th>Purpose</th></tr>
<tr><td>Diagnosis</td><td>Histology; broad molecular profiling (NGS) on tissue and/or plasma</td><td>Find EGFR and other actionable alterations before first-line therapy</td></tr>
<tr><td>Diagnosis</td><td>PD-L1</td><td>Relevant for non-driver NSCLC; immunotherapy has limited benefit in EGFR-mutated disease</td></tr>
<tr><td>Progression</td><td>Repeat tissue and/or liquid biopsy</td><td>Identify resistance mechanisms (MET, C797S, transformation)</td></tr>
<tr><td>Throughout</td><td>Brain MRI</td><td>Detect CNS disease</td></tr></table></div>
<div class="keybox"><strong>For Datroway (label)</strong><ul><li>Select patients by EGFR mutation status in tumour or plasma.</li><li>Testing can be done at any time from diagnosis and does not need to be repeated once established.</li><li>No TROP2 test is required.</li></ul></div>`,
qa:[
{ id:"dx-which", q:"Which EGFR mutations are covered?", keys:"which mutations covered uncommon exon 20 label",
a:`<h3>EGFR mutations</h3><p>The US label covers EGFR-mutated NSCLC without restricting mutation subtype. NCCN v1.2026 lists Datroway as a subsequent therapy option for EGFR exon 19 deletion or L858R, for uncommon mutations (S768I, L861Q and/or G719X) and for exon 20 insertions. In the pooled efficacy population, 84% had received osimertinib.</p>`},
{ id:"dx-gap", q:"Why do testing gaps matter?", keys:"testing gap not tested barriers",
a:`<h3>Testing gaps</h3><p>A MENA study found that most metastatic patients were not tested, mainly because physicians did not know where and how to send the test, followed by funding and insufficient tissue. Untested patients can miss targeted therapy and, later, EGFR-specific options such as Datroway.</p>`}
],
quiz:[
{ q:"Must EGFR testing be repeated before starting Datroway?", o:["Yes, always on fresh tissue","No; once EGFR status is established it need not be repeated","Only plasma testing is valid","Only if T790M was present"], c:1, e:"The label says testing can be done at any time and need not be repeated once established."},
{ q:"Why re-biopsy at progression on osimertinib?", o:["To measure TROP2","To identify resistance mechanisms such as MET amplification or transformation","To confirm smoking status","It is never useful"], c:1, e:"Resistance mechanisms can guide next-line therapy."}
],
src:"DATROWAY US PI; NCCN NSCLC v1.2026 (via OncLive, Nov 2025); ACHOG MENA study 2019."},

/* ---------- 5 PATIENT JOURNEY ---------- */
{ id:"journey", part:"Part A · The disease", title:"Patient journey",
intro:`<div class="eyebrow">Module 5 · Patient journey</div>
<h2>From targeted therapy to Datroway</h2>
<div class="flow"><span class="step">Diagnosis + EGFR test</span><span class="arr">→</span><span class="step">1L osimertinib ± chemotherapy, or amivantamab + lazertinib</span><span class="arr">→</span><span class="step">Progression: re-biopsy</span><span class="arr">→</span><span class="step">Platinum chemotherapy ± amivantamab</span><span class="arr">→</span><span class="step"><b>Datroway</b></span></div>
<div class="tblwrap"><table><tr><th>Stage</th><th>Patient experience</th><th>What helps</th></tr>
<tr><td>Targeted therapy</td><td>Oral therapy, often long disease control</td><td>Regular imaging including brain</td></tr>
<tr><td>Progression</td><td>Loss of an oral option; move to infusions</td><td>Clear discussion of next steps</td></tr>
<tr><td>Starting Datroway</td><td>Daily mouthwash and eye drops; eye exams</td><td>Education on ILD warning symptoms</td></tr>
<tr><td>On treatment</td><td>Stomatitis (71% in EGFRm safety population), nausea, alopecia, fatigue</td><td>Early reporting, label-based dose changes</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Datroway is indicated after EGFR-directed therapy <b>and</b> platinum chemotherapy.</li><li>Respiratory symptoms must be reported immediately because ILD is the most serious risk in NSCLC.</li></ul></div>`,
qa:[
{ id:"j-eligible", q:"Which patients are eligible in this indication?", keys:"eligible eligibility which patients",
a:`<h3>Eligibility (US label)</h3><p>Adults with locally advanced or metastatic EGFR-mutated NSCLC who have received prior EGFR-directed therapy and platinum-based chemotherapy. This indication is under <b>accelerated approval</b> based on response rate and duration of response; continued approval may depend on a confirmatory trial.</p>`},
{ id:"j-education", q:"What should patients be taught before starting?", keys:"patient education counselling teach ild symptoms",
a:`<h3>Patient education checklist</h3><ul><li>Report new or worsening cough, breathlessness or fever <b>immediately</b>.</li><li>Steroid mouthwash 4× daily; ice chips during infusion.</li><li>Preservative-free eye drops at least 4× daily; no contact lenses.</li><li>Report eye symptoms and mouth sores early.</li><li>Effective contraception as advised.</li></ul>`}
],
quiz:[
{ q:"What prior therapy is required for this indication?", o:["None","EGFR-directed therapy and platinum-based chemotherapy","Immunotherapy only","Radiotherapy"], c:1, e:"Prior EGFR-directed therapy and platinum-based chemotherapy."},
{ q:"On what basis was this indication approved in the US?", o:["Overall survival benefit","Accelerated approval on ORR and duration of response","Quality of life","Non-inferiority to docetaxel"], c:1, e:"Accelerated approval based on ORR and DOR; continued approval may depend on confirmatory data."}
],
src:"DATROWAY US PI; NCCN NSCLC v1.2026; ASCO Living Guideline 2026.3.0."},

/* ---------- 6 TREATMENT OPTIONS ---------- */
{ id:"treatment", part:"Part A · The disease", title:"Treatment options",
intro:`<div class="eyebrow">Module 6 · Treatment options</div>
<h2>Treatment sequence in classical EGFR-mutated NSCLC</h2>
<div class="tblwrap"><table><tr><th>Line</th><th>Options</th></tr>
<tr><td><b>First line</b></td><td>Osimertinib ± platinum–pemetrexed (FLAURA2); amivantamab + lazertinib (MARIPOSA); osimertinib monotherapy</td></tr>
<tr><td><b>After osimertinib</b></td><td>Amivantamab + chemotherapy (MARIPOSA-2); platinum-based chemotherapy ± continued osimertinib; targeted therapy for specific resistance alterations</td></tr>
<tr><td><b>After osimertinib and platinum chemotherapy</b></td><td><b>Datroway</b>; docetaxel-based chemotherapy</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Immunotherapy has limited benefit in EGFR-mutated NSCLC.</li><li>No trial has compared Datroway with amivantamab + chemotherapy directly.</li></ul></div>`,
qa:[
{ id:"t-vs-docetaxel", q:"How did Datroway compare with docetaxel?", keys:"docetaxel tropion-lung01 versus compare",
a:`<h3>TROPION-Lung01 (all-comers, previously treated NSCLC)</h3><ul><li>PFS: 4.4 vs 3.7 months (HR 0.75; p=0.004).</li><li>OS: 12.9 vs 11.8 months (HR 0.94; p=0.530), not significant.</li><li>Nonsquamous: PFS 5.5 vs 3.6 months (HR 0.63); OS 14.6 vs 12.3 months (HR 0.84; 95% CI 0.68–1.05).</li><li>Squamous: no benefit (OS HR 1.32).</li><li>Grade ≥3 TRAEs: 25.6% vs 42.1%.</li></ul><p>EGFR-mutated patients in Lung01 contributed 37 of the 114 patients in the pooled analysis behind the US approval.</p>`},
{ id:"t-amivantamab", q:"Where does amivantamab + chemotherapy fit?", keys:"amivantamab mariposa-2 chemotherapy after osimertinib",
a:`<h3>Amivantamab + chemotherapy</h3><p>In MARIPOSA-2, amivantamab plus carboplatin–pemetrexed improved PFS versus chemotherapy after progression on osimertinib (HR 0.48). ASCO recommends it after osimertinib; Datroway is an option once the disease has progressed on osimertinib and platinum chemotherapy. No trial directly compares the two approaches.</p>`}
],
quiz:[
{ q:"In TROPION-Lung01, which histology did NOT benefit from Datroway?", o:["Nonsquamous","Squamous","Adenocarcinoma","EGFR-mutated"], c:1, e:"Squamous: PFS 2.8 vs 3.9 months; OS HR 1.32."},
{ q:"Which regimen is recommended by ASCO after progression on osimertinib (before platinum)?", o:["Datroway","Amivantamab + chemotherapy","Pembrolizumab monotherapy","Erlotinib"], c:1, e:"Based on MARIPOSA-2; Datroway comes after osimertinib and platinum chemotherapy."}
],
src:"Ahn MJ et al. J Clin Oncol 2025 (TROPION-Lung01); Passaro A et al. (MARIPOSA-2); ASCO Living Guideline 2026.3.0; NCCN NSCLC v1.2026."},

/* ---------- 7 GUIDELINES ---------- */
{ id:"guidelines", part:"Part B · Guidelines", title:"Guidelines (NCCN, ASCO)",
intro:`<div class="eyebrow">Module 7 · Guidelines</div>
<h2>What the guidelines say</h2>
<h4>NCCN NSCLC version 1.2026 (November 2025)</h4>
<ul><li><b>Preferred second-line regimen</b> for EGFR-mutated NSCLC after progression on first-line osimertinib + chemotherapy.</li><li>Subsequent-therapy option for EGFR exon 19 deletion/L858R, uncommon mutations (S768I, L861Q, G719X) and exon 20 insertions.</li><li>Osimertinib + platinum–pemetrexed and amivantamab + lazertinib moved to Category 1 preferred first-line regimens.</li></ul>
<h4>ASCO Living Guideline: Stage IV NSCLC with driver alterations (2026.3.0)</h4>
<ul><li>First line: offer osimertinib with platinum–pemetrexed or amivantamab + lazertinib.</li><li>After osimertinib: amivantamab + chemotherapy; if not a candidate, platinum chemotherapy ± continued osimertinib.</li><li><b>After osimertinib and platinum chemotherapy: clinicians may offer datopotamab deruxtecan.</b></li></ul>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Both NCCN and ASCO position Datroway after osimertinib and platinum chemotherapy.</li><li>This indication is not approved in the EU; check SFDA status locally.</li></ul></div>`,
qa:[
{ id:"g-nccn", q:"What exactly does NCCN say about Datroway?", keys:"nccn preferred second line category",
a:`<h3>NCCN v1.2026</h3><p>Datroway was added as a preferred second-line regimen for EGFR-mutated NSCLC after progression on first-line osimertinib plus chemotherapy, and as a subsequent therapy option across classical, uncommon and exon 20 insertion EGFR mutations. Check the current NCCN version for full wording and categories.</p>`},
{ id:"g-asco", q:"What does ASCO recommend?", keys:"asco living guideline recommendation",
a:`<h3>ASCO 2026.3.0</h3><p>For patients whose disease has progressed on osimertinib and platinum chemotherapy, clinicians may offer datopotamab deruxtecan, supported by TROPION-Lung01 data. ASCO recommends amivantamab plus chemotherapy after osimertinib (MARIPOSA-2).</p>`}
],
quiz:[
{ q:"In NCCN v1.2026, Datroway is a preferred regimen after progression on:", o:["First-line osimertinib + chemotherapy","Surgery","Immunotherapy","No prior therapy"], c:0, e:"Preferred second-line after first-line osimertinib + chemotherapy."},
{ q:"Which wording does ASCO use for Datroway?", o:["Must offer","May offer after osimertinib and platinum chemotherapy","Not recommended","Only in trials"], c:1, e:"ASCO: clinicians may offer datopotamab deruxtecan after osimertinib and platinum chemotherapy."}
],
src:"NCCN Guidelines NSCLC v1.2026 (reported by OncLive, 10 Nov 2025); Therapy for Stage IV NSCLC With Driver Alterations: ASCO Living Guideline 2026.3.0."},

/* ---------- 8 MOA (shared) ---------- */
C.moaModule({
biomarkerNote:"EGFR mutation status in tumour or plasma",
approval:`<h3>Regulatory status (EGFR-mutated NSCLC)</h3><ul><li><b>US (FDA)</b>: <b>accelerated approval</b>, June 2025, for adults with locally advanced or metastatic EGFR-mutated NSCLC after prior EGFR-directed therapy and platinum-based chemotherapy, based on ORR and duration of response. Continued approval may depend on a confirmatory trial (TROPION-Lung15).</li><li><b>EU</b>: not approved for NSCLC; Datroway's EU indications are in breast cancer.</li><li><b>Saudi Arabia</b>: confirm SFDA registration status for this indication before any discussion.</li></ul>`
}),

/* ---------- 9 TRIALS ---------- */
{ id:"trials", part:"Part C · Datroway", title:"Clinical trials",
intro:`<div class="eyebrow">Module 9 · Clinical evidence</div>
<h2>The evidence behind the US accelerated approval</h2>
<div class="tblwrap"><table><tr><th>Trial</th><th>Phase / design</th><th>Role</th></tr>
<tr><td>TROPION-Lung05</td><td>Phase 2, single-arm (n=137 with actionable alterations)</td><td>EGFRm patients (n=77) in pooled efficacy analysis</td></tr>
<tr><td>TROPION-Lung01</td><td>Phase 3 vs docetaxel (n=604)</td><td>EGFRm Datroway patients (n=37) in pooled analysis</td></tr>
<tr><td>TROPION-PanTumor01</td><td>Phase 1</td><td>Contributed to safety data</td></tr>
<tr><td>TROPION-Lung15</td><td>Phase 3, ongoing</td><td>Confirmatory trial</td></tr></table></div>
<h4>Pooled efficacy (label, n=114)</h4>
<div class="tblwrap"><table><tr><th>Outcome</th><th>Pooled (n=114)</th><th>TL05 (n=77)</th><th>TL01 (n=37)</th></tr>
<tr><td>ORR by BICR (95% CI)</td><td class="num">45% (35–54)</td><td class="num">45% (34–57)</td><td class="num">43% (27–61)</td></tr>
<tr><td>Complete response</td><td class="num">4.4%</td><td class="num">5%</td><td class="num">2.7%</td></tr>
<tr><td>Median DOR, months (95% CI)</td><td class="num">6.5 (4.2–8.4)</td><td class="num">6.9 (4.2–10.2)</td><td class="num">6.5 (4.0–8.4)</td></tr>
<tr><td>DOR ≥6 months</td><td class="num">47%</td><td class="num">49%</td><td class="num">44%</td></tr>
<tr><td>DOR ≥12 months</td><td class="num">18%</td><td class="num">23%</td><td class="num">6%</td></tr></table></div>
<div class="warn"><strong>Present accurately.</strong> Approval is accelerated, based on single-arm response data (no randomised comparison for the EGFRm population in the label). TROPION-Lung01 did not show a significant OS benefit in its overall population.</div>`,
qa:[
{ id:"tr-pop", tag:"Population", q:"Who was in the pooled EGFRm efficacy population?", keys:"pooled population baseline characteristics osimertinib",
a:`<h3>Pooled population (n=114)</h3><ul><li>Median age 63; 63% female; 70% Asian.</li><li>33% brain metastases.</li><li>84% prior osimertinib; 99% prior platinum chemotherapy; 28% prior anti-PD-1/PD-L1.</li><li>Excluded: steroid-requiring or ongoing ILD, clinically significant corneal disease, untreated symptomatic brain metastases.</li></ul>`},
{ id:"tr-tl05", tag:"Lung05", q:"What did TROPION-Lung05 show?", keys:"tropion-lung05 phase 2 actionable genomic alterations alk results",
a:`<h3>TROPION-Lung05 (Sands et al., J Clin Oncol 2025)</h3><ul><li>n=137 with actionable genomic alterations progressing after targeted therapy and platinum chemotherapy; 71.5% had ≥3 prior lines.</li><li>Confirmed ORR (BICR): 35.8% overall; <b>43.6%</b> with EGFR mutations; 23.5% with ALK rearrangements.</li><li>In patients with sensitising or T790M mutations who had received osimertinib (n=68), ORR was 49.1%.</li><li>Disease control rate 82.1% (EGFR); median DOR 7.0 months (EGFR).</li><li>Most common TRAEs: stomatitis 56.2%, nausea 54.7%, alopecia 49.6%.</li></ul><p>The label reports a 45% ORR for the 77 EGFRm patients from this trial used in the pooled analysis; investigator-assessed ORR was 34%.</p>`},
{ id:"tr-tl01", tag:"Lung01", q:"What did TROPION-Lung01 show overall?", keys:"tropion-lung01 phase 3 docetaxel overall results squamous",
a:`<h3>TROPION-Lung01 (Ahn et al., J Clin Oncol 2025)</h3><div class="tblwrap"><table><tr><th>Population</th><th>Median PFS</th><th>Median OS</th></tr>
<tr><td>Overall (n=604)</td><td class="num">4.4 vs 3.7 mo; HR 0.75; p=0.004</td><td class="num">12.9 vs 11.8 mo; HR 0.94; p=0.530</td></tr>
<tr><td>Nonsquamous</td><td class="num">5.5 vs 3.6 mo; HR 0.63</td><td class="num">14.6 vs 12.3 mo; HR 0.84 (0.68–1.05)</td></tr>
<tr><td>Squamous</td><td class="num">2.8 vs 3.9 mo; HR 1.41</td><td class="num">7.6 vs 9.4 mo; HR 1.32</td></tr></table></div>
<p>Grade ≥3 TRAEs 25.6% vs 42.1%; adjudicated drug-related ILD 8.8% vs 4.1% (Datroway vs docetaxel).</p>`},
{ id:"tr-tl15", tag:"Lung15", q:"What is TROPION-Lung15?", keys:"tropion-lung15 confirmatory trial osimertinib combination",
a:`<h3>TROPION-Lung15 (confirmatory)</h3><p>Phase 3, randomised 1:1:1, ~744 patients with EGFR-mutated nonsquamous NSCLC that progressed on osimertinib: Datroway + osimertinib vs Datroway alone vs platinum-doublet chemotherapy. Dual primary endpoints: PFS by BICR for each Datroway arm vs chemotherapy. First results were expected in 2026; check for current results.</p>`},
{ id:"tr-orchard", tag:"ORCHARD", q:"Has Datroway been combined with osimertinib?", keys:"orchard combination osimertinib phase 2",
a:`<h3>ORCHARD</h3><p>The phase 2 ORCHARD platform study included a module of osimertinib plus Datroway in patients whose disease progressed on first-line osimertinib, reporting clinical benefit. This combination is being tested in TROPION-Lung15 and is not an approved use.</p>`}
],
quiz:[
{ q:"What was the pooled ORR behind the US accelerated approval?", o:["26%","45%","64%","36%"], c:1, e:"45% (95% CI 35–54) by BICR in 114 patients."},
{ q:"What was the median duration of response in the pooled analysis?", o:["3.0 months","6.5 months","12.3 months","18 months"], c:1, e:"6.5 months (95% CI 4.2–8.4)."},
{ q:"Which trial is confirmatory for this indication?", o:["TROPION-Breast01","TROPION-Lung15","FLAURA2","MARIPOSA"], c:1, e:"TROPION-Lung15 compares Datroway ± osimertinib with platinum chemotherapy after osimertinib."}
],
src:"DATROWAY US PI (14.1); Sands J et al. J Clin Oncol 2025 (TROPION-Lung05); Ahn MJ et al. J Clin Oncol 2025 (TROPION-Lung01); Tan DSW et al. 2025 (TROPION-Lung15 design); ORCHARD (Ann Oncol/ESMO publications)."},

/* ---------- 10 SAFETY (shared) ---------- */
C.safetyModule({
popName:"EGFR-mutated NSCLC", popShort:"EGFRm NSCLC safety population (n=125)",
lead:"The label safety population (TROPION-Lung05, Lung01 and PanTumor01) had a median treatment duration of 6.1 months.",
rows:`<tr><td>Most common adverse reactions</td><td>Stomatitis 71% (Grade 3/4: 9%), nausea 50%, alopecia 49%, fatigue 42%, constipation 31%, musculoskeletal pain 22%, rash 20%, decreased appetite 20%</td></tr>
<tr><td>Ocular</td><td>Dry eye 13%, keratitis 12%</td></tr>
<tr><td>Serious adverse reactions</td><td class="num">26%</td></tr>
<tr><td>Discontinuation / dose reduction / interruption</td><td class="num">8% / 26% / 43%</td></tr>
<tr><td>Lab abnormalities (all grades)</td><td>Decreased haemoglobin 34%, decreased lymphocytes 32%, increased calcium 31%, increased AST 28%</td></tr>`,
ild:"NSCLC pooled population (n=484): ILD/pneumonitis in 7% (Grade 3: 0.6%; Grade 4: 0.4%), with 8 fatal cases (1.7%); median onset 1.4 months; corticosteroids needed in 79%. ILD risk is higher in lung cancer than in breast cancer.",
otherExtra:"<li><b>Older patients (NSCLC)</b>: 44% were ≥65 years; no meaningful differences in efficacy or safety were seen.</li>",
extraSrc:"Ahn MJ et al. J Clin Oncol 2025 (adjudicated ILD in TROPION-Lung01)"
}),

/* ---------- 11 ASSESSMENT ---------- */
{ id:"assessment", part:"Assessment", title:"Final knowledge check",
intro:`<div class="eyebrow">Module 11 · Final assessment</div><h2>Test yourself across all modules</h2><p>Each quick check below draws on a different module. Aim for at least 80%.</p>`,
qa:[],
quiz:[
{ q:"Which statement about the EGFRm NSCLC indication is accurate?", o:["Full approval based on OS","US accelerated approval based on ORR and DOR","Approved in the EU","First-line therapy"], c:1, e:"Modules 5, 8 and 9."},
{ q:"Where is Datroway positioned by NCCN and ASCO?", o:["Before osimertinib","After osimertinib and platinum chemotherapy","With immunotherapy first line","Adjuvant"], c:1, e:"Module 7."},
{ q:"ILD/pneumonitis incidence in the NSCLC pooled safety population was:", o:["0.5%","3%","7%","20%"], c:2, e:"Module 10: 7%, including 8 fatal cases (1.7%)."},
{ q:"Which TROPION-Lung01 subgroup had no PFS or OS benefit?", o:["Nonsquamous","Squamous","EGFR-mutated","Asian"], c:1, e:"Module 6/9: squamous OS HR 1.32."},
{ q:"Must EGFR status be re-tested before Datroway?", o:["Yes","No, once established it need not be repeated","Only plasma","Only after amivantamab"], c:1, e:"Module 4."}
],
src:"Content of Modules 1–10."}
];
return M;
})(typeof window !== "undefined" ? window.DATROWAY_COMMON : require("./datroway-common.js"));

if (typeof window !== "undefined") window.MODULES = DATROWAY_EGFR_NSCLC;
if (typeof module !== "undefined" && module.exports) module.exports = DATROWAY_EGFR_NSCLC;
