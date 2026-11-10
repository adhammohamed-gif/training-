/*
  OAB & Mirabegron guided training: CONTENT FILE
  ------------------------------------------------
  Edit this file to update training content. Each module has:
    id      unique slug, also used as the page link (#id)
    part    sidebar group heading
    title   sidebar and chip label
    intro   HTML summary shown when the module opens
    qa      follow-up questions: { id, q (chip text), keys (search words), a (HTML answer), tag (optional short label) }
    quiz    quick checks: { q, o: [options], c: index of correct option, e: explanation }
    src     sources line
  Keep ids unique. After editing, open index.html in a browser to check.
*/
/* ============================== CONTENT ============================== */
window.MODULES = [
/* ---------- 1 PATHOPHYSIOLOGY ---------- */
{ id:"pathophysiology", part:"Part A · The disease", title:"Pathophysiology",
intro:`<div class="eyebrow">Module 1 · Pathophysiology</div>
<h2>What goes wrong in the overactive bladder</h2>
<p><b>Definition (ICS):</b> OAB is urinary <b>urgency</b>, with or without urgency urinary incontinence, usually with increased daytime frequency and nocturia, in the absence of urinary tract infection or other obvious pathology.</p>
<p>OAB is a <b>symptom-based syndrome</b>. Detrusor overactivity (DO) is a separate, urodynamic observation: involuntary detrusor contractions during filling. Many people with OAB have no DO on urodynamics, and some people with DO have no symptoms.</p>
<h4>The normal micturition cycle</h4>
<div class="flow"><span class="step"><b>Storage</b>: sympathetic tone relaxes detrusor (β3), closes bladder neck (α1); pudendal nerve keeps external sphincter shut</span><span class="arr">→</span><span class="step"><b>Switch</b>: pontine micturition centre, under cortical control</span><span class="arr">→</span><span class="step"><b>Voiding</b>: parasympathetic ACh contracts detrusor (M3); sphincters relax</span></div>
<p>OAB is a disorder of the <b>storage phase</b>: the bladder signals “full” or contracts too early, so urgency appears at low volumes.</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Urgency is the defining symptom; the other symptoms follow from it.</li><li>OAB is multifactorial: myogenic, neurogenic, urothelial/afferent and central mechanisms all contribute.</li><li>Drug targets map onto this physiology: muscarinic receptors (voiding and afferent signalling) and β3-adrenoceptors (storage relaxation).</li></ul></div>`,
qa:[
{ id:"p-urgency", q:"Why is urgency the core symptom?", keys:"urgency core defining symptom why",
a:`<h3>Urgency drives the syndrome</h3><p>Urgency is a sudden, compelling desire to pass urine that is difficult to defer. It differs from the normal, gradually rising “urge” of a filling bladder. Because urgency forces early voiding, it produces frequency and nocturia; when it cannot be suppressed, leakage follows (urgency urinary incontinence).</p><p>This is why trial endpoints track urgency episodes, micturitions and incontinence episodes together, and why a diagnosis requires urgency to be present.</p>`},
{ id:"p-receptors", q:"Which receptors control storage and voiding?", keys:"receptors beta3 muscarinic m2 m3 alpha sympathetic parasympathetic nerves",
a:`<h3>Neural control of the lower urinary tract</h3><div class="tblwrap"><table><tr><th>Pathway</th><th>Nerve / spinal level</th><th>Transmitter → receptor</th><th>Effect</th></tr>
<tr><td>Sympathetic</td><td>Hypogastric, T10–L2</td><td>Noradrenaline → <b>β3</b> (detrusor)</td><td>Detrusor relaxation during filling</td></tr>
<tr><td>Sympathetic</td><td>Hypogastric, T10–L2</td><td>Noradrenaline → α1 (bladder neck, urethra, prostate)</td><td>Outlet closure</td></tr>
<tr><td>Parasympathetic</td><td>Pelvic, S2–S4</td><td>Acetylcholine → <b>M3</b> (M2 most abundant)</td><td>Detrusor contraction for voiding</td></tr>
<tr><td>Somatic</td><td>Pudendal, S2–S4 (Onuf's nucleus)</td><td>Acetylcholine → nicotinic</td><td>External urethral sphincter contraction</td></tr>
<tr><td>Afferent</td><td>Aδ and C fibres</td><td>Urothelial ATP, ACh, NO, prostaglandins</td><td>Sensation of bladder filling</td></tr></table></div>
<p>The β3-adrenoceptor is the predominant β-subtype in human detrusor, which is why it became a drug target.</p>`},
{ id:"p-theories", q:"What are the main theories of OAB?", keys:"theories mechanisms myogenic neurogenic urotheliogenic afferent central urethrogenic causes",
a:`<h3>Four complementary mechanisms</h3><ul>
<li><b>Myogenic</b>: changes in detrusor smooth muscle (partial denervation, altered cell-to-cell coupling) let local micro-contractions spread into a coordinated, unwanted contraction.</li>
<li><b>Neurogenic</b>: reduced central inhibition (stroke, Parkinson's, MS, spinal cord injury) or enhanced spinal reflexes.</li>
<li><b>Urotheliogenic / afferent</b>: the urothelium acts as a sensor and releases ATP, acetylcholine and other mediators; increased afferent signalling creates urgency at low volumes.</li>
<li><b>Central / supraspinal</b>: functional imaging shows altered activity in the prefrontal cortex, insula and cingulate in people with urgency.</li></ul>
<p><b>Contributors:</b> ageing, obesity and metabolic syndrome, oestrogen deficiency, chronic inflammation and the urinary microbiome, bladder outlet obstruction in men, anxiety and depression.</p>`},
{ id:"p-oab-vs-do", q:"Is OAB the same as detrusor overactivity?", keys:"detrusor overactivity do urodynamic difference same",
a:`<h3>No: one is a syndrome, the other a urodynamic finding</h3><p><b>OAB</b> is diagnosed from symptoms. <b>DO</b> is seen during filling cystometry as involuntary detrusor contractions. The two overlap but are not interchangeable: DO is absent in a substantial share of people with OAB, and treatment decisions for uncomplicated OAB do not require urodynamics (EAU, strong recommendation).</p>`},
{ id:"p-drugs-map", q:"How do treatments map onto this physiology?", keys:"drug targets mechanism map treatments physiology",
a:`<h3>Where each treatment acts</h3><div class="tblwrap"><table><tr><th>Treatment</th><th>Target</th><th>Main effect</th></tr>
<tr><td>Antimuscarinics</td><td>M2/M3 receptors on detrusor and urothelium</td><td>Reduce involuntary contractions and afferent signalling</td></tr>
<tr><td>β3-agonists (mirabegron, vibegron)</td><td>β3-adrenoceptors in detrusor</td><td>Enhance storage-phase relaxation, increase capacity</td></tr>
<tr><td>OnabotulinumtoxinA</td><td>Presynaptic ACh release, sensory fibres</td><td>Chemical denervation of detrusor; reduces afferent input</td></tr>
<tr><td>Sacral / tibial neuromodulation</td><td>Sacral reflex pathways</td><td>Modulates abnormal bladder reflexes</td></tr></table></div>`}
],
quiz:[
{ q:"Which statement about OAB is correct?", o:["It requires detrusor overactivity on urodynamics","It is defined by urgency, with or without incontinence","It is diagnosed when frequency exceeds 8 voids per day, regardless of urgency","It can be diagnosed in the presence of an active UTI"], c:1, e:"OAB is a symptom syndrome defined by urgency. DO is a urodynamic finding and is not required; UTI must be excluded."},
{ q:"During bladder storage, which receptor mediates detrusor relaxation?", o:["M3 muscarinic","α1-adrenoceptor","β3-adrenoceptor","Nicotinic"], c:2, e:"Sympathetic noradrenaline acting on β3-adrenoceptors relaxes the detrusor during filling. M3 mediates contraction; α1 closes the outlet."}
],
src:"Abrams P et al. Neurourol Urodyn 2002 (ICS terminology); Haylen BT et al. Int Urogynecol J 2010 (IUGA/ICS); Andersson KE, Arner A. Physiol Rev 2004; EAU Guidelines on Non-neurogenic Female LUTS 2025."},

/* ---------- 2 EPIDEMIOLOGY ---------- */
{ id:"epidemiology", part:"Part A · The disease", title:"Epidemiology & burden",
intro:`<div class="eyebrow">Module 2 · Epidemiology</div>
<h2>A common condition that is often hidden</h2>
<div class="facts"><div class="fact"><b>11.8%</b><span>Adults with OAB in EPIC (5 countries)</span></div><div class="fact"><b>12.8% / 10.8%</b><span>Women / men in EPIC</span></div><div class="fact"><b>16.5%</b><span>US adults in NOBLE</span></div><div class="fact"><b>&gt;60%</b><span>Stop an antimuscarinic within 12 months</span></div></div>
<p>OAB affects both sexes and rises steeply with age. Women more often have <b>OAB-wet</b> (with urgency incontinence); men more often have <b>OAB-dry</b>, frequently alongside voiding symptoms from benign prostatic obstruction.</p>
<p>Estimates vary with the definition, the questionnaire and the age band studied, so compare studies with care.</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Roughly one adult in eight to six reports OAB symptoms.</li><li>Prevalence increases with age in both sexes.</li><li>Many sufferers never seek care, and many who start drugs stop within a year.</li></ul></div>`,
qa:[
{ id:"e-studies", q:"What do the landmark prevalence studies show?", keys:"prevalence epic noble studies how common worldwide",
a:`<h3>Landmark population studies</h3><div class="tblwrap"><table><tr><th>Study</th><th>Setting</th><th>Population</th><th>OAB prevalence</th></tr>
<tr><td>EPIC (Irwin 2006)</td><td>Canada, Germany, Italy, Sweden, UK</td><td>19,165 adults ≥18 y, telephone survey, ICS 2002 definition</td><td class="num">11.8% overall · 12.8% women · 10.8% men</td></tr>
<tr><td>NOBLE (Stewart 2003)</td><td>United States</td><td>Adults ≥18 y, telephone survey</td><td class="num">16.5% overall · 16.9% women · 16.0% men</td></tr></table></div>
<p>The EAU guideline cites the EPIC figures. Differences between studies largely reflect methods (definition, questions asked, how frequently symptoms must occur).</p>`},
{ id:"e-saudi", q:"What do we know about OAB in Saudi Arabia?", keys:"saudi arabia ksa local middle east gulf regional",
a:`<h3>Local data</h3><p>A cross-sectional survey of women aged ≥18 in the Eastern Province (Al Mousa et al., Arab J Urol 2018) used an Arabic OAB-SF questionnaire. Among respondents, storage symptoms were very common: urgency 62%, frequency 74%, nocturia 75% and urgency incontinence 43%. Number of children was the only independent risk factor identified, and more than two-thirds reported a negative impact on quality of life.</p>
<div class="warn"><strong>Interpret with care.</strong> This was a self-selected sample, not a population-representative prevalence study. Use it to show that symptoms are common and under-recognised locally, not as a national prevalence figure.</div>`},
{ id:"e-risk", q:"What are the main risk factors?", keys:"risk factors age obesity parity menopause diabetes",
a:`<h3>Risk factors and associations</h3><ul><li><b>Age</b>: the strongest and most consistent factor.</li><li><b>Female sex</b> (for OAB-wet), parity, menopause and genitourinary syndrome of menopause.</li><li><b>Obesity</b> and metabolic syndrome; type 2 diabetes.</li><li><b>Neurological disease</b>: stroke, Parkinson's, MS, spinal injury, dementia.</li><li><b>Men</b>: benign prostatic obstruction.</li><li>Lifestyle: smoking, high caffeine intake.</li><li>Comorbid anxiety, depression, irritable bowel syndrome, obstructive sleep apnoea.</li></ul>`},
{ id:"e-burden", q:"Why does OAB matter to patients and health systems?", keys:"burden quality of life impact cost falls depression sleep work",
a:`<h3>The burden goes well beyond the bladder</h3><ul><li><b>Quality of life</b>: urgency and leakage limit travel, social activity, exercise and intimacy.</li><li><b>Sleep</b>: nocturia fragments sleep and causes daytime fatigue.</li><li><b>Falls and fractures</b>: rushing to the toilet at night is a recognised fall risk in older adults.</li><li><b>Mental health</b>: higher rates of anxiety and depression.</li><li><b>Work</b>: lost productivity and absenteeism.</li><li><b>Costs</b>: pads, skin care, treatment of complications, consultations.</li></ul>`},
{ id:"e-under", q:"Why is OAB under-treated?", keys:"under treated undertreated help seeking stigma persistence discontinuation",
a:`<h3>Gaps at every step</h3><ol><li><b>Not reporting</b>: embarrassment, or belief that symptoms are a normal part of ageing or childbirth.</li><li><b>Not asking</b>: clinicians rarely screen for urinary symptoms unless raised.</li><li><b>Not persisting</b>: more than 60% of patients discontinue antimuscarinic therapy within 12 months, mainly for lack of efficacy or side effects.</li><li><b>Not escalating</b>: few patients who fail drugs are referred for third-line treatment.</li></ol>`}
],
quiz:[
{ q:"In the EPIC study, what was the overall prevalence of OAB?", o:["3.5%","11.8%","27%","43%"], c:1, e:"EPIC reported 11.8% overall (12.8% women, 10.8% men) across five countries."},
{ q:"Which pattern is typical by sex?", o:["Men more often have OAB-wet","Women more often have OAB-wet","OAB-wet and OAB-dry are equally split in both sexes","Men rarely have OAB"], c:1, e:"Women more often have urgency incontinence (wet); men more often have OAB-dry, frequently with voiding symptoms."}
],
src:"Irwin DE et al. Eur Urol 2006 (EPIC); Stewart WF et al. World J Urol 2003 (NOBLE); Al Mousa R et al. Arab J Urol 2018; EAU Guidelines on Non-neurogenic Female LUTS 2025; persistence figure as cited in a published systematic review of mirabegron vs tolterodine."},

/* ---------- 3 SYMPTOMS ---------- */
{ id:"symptoms", part:"Part A · The disease", title:"Symptoms",
intro:`<div class="eyebrow">Module 3 · Symptoms</div>
<h2>The four storage symptoms</h2>
<div class="tblwrap"><table><tr><th>Symptom</th><th>What it means</th><th>How it is measured</th></tr>
<tr><td><b>Urgency</b></td><td>Sudden, compelling desire to void that is difficult to defer</td><td>Urgency episodes per 24 h (grade 3–4 on PPIUS in trials)</td></tr>
<tr><td><b>Increased daytime frequency</b></td><td>Voiding more often than the patient considers normal</td><td>Micturitions per 24 h; ≥8/24 h used as a trial threshold</td></tr>
<tr><td><b>Nocturia</b></td><td>Waking at night to void, each void preceded and followed by sleep</td><td>Nocturia episodes per night</td></tr>
<tr><td><b>Urgency urinary incontinence</b></td><td>Involuntary leakage associated with urgency</td><td>Incontinence or UUI episodes per 24 h</td></tr></table></div>
<p><b>OAB-dry</b> = urgency without leakage. <b>OAB-wet</b> = urgency with urgency incontinence (roughly one-third of cases). Many women have <b>mixed incontinence</b> (stress + urgency).</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Severity and bother are different; treat the patient's bother.</li><li>Pain, haematuria or poor emptying point away from OAB and need investigation.</li></ul></div>`,
qa:[
{ id:"s-wetdry", q:"What is the difference between OAB-wet and OAB-dry?", keys:"wet dry incontinence leakage mixed",
a:`<h3>Wet versus dry</h3><p><b>OAB-dry</b>: urgency, frequency and nocturia without leakage. <b>OAB-wet</b>: the same plus urgency urinary incontinence. Incontinence has the largest impact on quality of life and healthcare use, and most pivotal mirabegron trials used incontinence episodes as a co-primary endpoint (analysed in the incontinent subset, the FAS-I).</p><p><b>Mixed urinary incontinence</b>: leakage with both urgency and exertion (cough, sneeze). Treat the predominant component first.</p>`},
{ id:"s-differential", q:"What conditions can mimic OAB?", keys:"differential diagnosis mimic red flags haematuria hematuria pain uti",
a:`<h3>Differential diagnosis and red flags</h3><div class="tblwrap"><table><tr><th>Clue</th><th>Think of</th></tr>
<tr><td>Dysuria, fever, cloudy urine</td><td>Urinary tract infection</td></tr>
<tr><td>Visible or non-visible haematuria</td><td>Bladder cancer / carcinoma in situ, stones</td></tr>
<tr><td>Bladder pain relieved by voiding</td><td>Bladder pain syndrome / interstitial cystitis</td></tr>
<tr><td>Weak stream, straining, incomplete emptying</td><td>Bladder outlet obstruction, underactive detrusor, retention with overflow</td></tr>
<tr><td>Large voided volumes, thirst</td><td>Polyuria: diabetes, diuretics, high fluid intake</td></tr>
<tr><td>Most urine produced at night</td><td>Nocturnal polyuria: heart failure, sleep apnoea, oedema</td></tr>
<tr><td>Neurological signs</td><td>Neurogenic detrusor overactivity</td></tr>
<tr><td>Vaginal dryness, prolapse</td><td>Genitourinary syndrome of menopause, pelvic organ prolapse</td></tr></table></div>`},
{ id:"s-men", q:"How do symptoms present in men?", keys:"men male bph prostate luts voiding storage",
a:`<h3>Men: storage and voiding symptoms often coexist</h3><p>Male LUTS are grouped as storage (urgency, frequency, nocturia, UUI), voiding (weak stream, hesitancy, straining) and post-micturition (dribbling, incomplete emptying). Storage symptoms are usually the most bothersome, even when the prostate is enlarged. Assess post-void residual before adding bladder-directed drugs; the EAU male LUTS guideline advises against antimuscarinic + α1-blocker combination when PVR &gt;150 mL.</p>`},
{ id:"s-ask", q:"What questions should be asked in clinic?", keys:"questions ask history clinic consultation",
a:`<h3>Useful questions</h3><ul><li>“Do you ever get a sudden urge that you can't hold off?”</li><li>“Do you ever leak before you reach the toilet?”</li><li>“How many times do you pass urine during the day? How many times do you get up at night?”</li><li>“Which symptom bothers you most?”</li><li>“Do you limit drinks, plan routes around toilets, or wear pads?”</li><li>“What medicines do you take?” (diuretics, cholinesterase inhibitors, SGLT2 inhibitors can worsen symptoms)</li></ul>`}
],
quiz:[
{ q:"A 58-year-old woman has urgency and frequency plus visible haematuria. What is the next step?", o:["Start a β3-agonist","Start bladder training","Investigate the haematuria before labelling as OAB","Reassure that this is typical OAB"], c:2, e:"Haematuria is a red flag. OAB is a diagnosis of exclusion; investigate for malignancy or stones first."},
{ q:"Which symptom defines OAB?", o:["Nocturia","Urgency","Stress incontinence","Weak stream"], c:1, e:"Urgency is mandatory for an OAB diagnosis."}
],
src:"Haylen BT et al. Int Urogynecol J 2010; EAU Guidelines on Non-neurogenic Female LUTS 2025; EAU Guidelines on Non-neurogenic Male LUTS 2025."},

/* ---------- 4 DIAGNOSTICS ---------- */
{ id:"diagnosis", part:"Part A · The disease", title:"Diagnostic tools",
intro:`<div class="eyebrow">Module 4 · Diagnostic tools</div>
<h2>A simple, stepwise work-up</h2>
<div class="tblwrap"><table><tr><th>Step</th><th>Tool</th><th>Why</th></tr>
<tr><td class="num">1</td><td>History and medication review</td><td>Characterise symptoms, bother, fluids; spot drugs that worsen OAB</td></tr>
<tr><td class="num">2</td><td>Validated questionnaire</td><td>Quantify symptoms and bother (e.g. OAB-q, OAB-V8, ICIQ-OAB, OABSS, PPBC; IPSS in men)</td></tr>
<tr><td class="num">3</td><td><b>Bladder diary, ≥3 days</b></td><td>Frequency, voided volumes, urgency, leaks, fluid intake, nocturnal polyuria</td></tr>
<tr><td class="num">4</td><td>Physical examination</td><td>Abdomen; pelvic exam (atrophy, prolapse, stress leak); DRE in men; focused neuro exam</td></tr>
<tr><td class="num">5</td><td>Urinalysis ± culture</td><td>Exclude infection and haematuria</td></tr>
<tr><td class="num">6</td><td>Post-void residual (ultrasound)</td><td>Men, older adults, voiding symptoms, diabetes, neurological disease</td></tr>
<tr><td class="num">7</td><td>Selected tests</td><td>Urodynamics, cystoscopy, imaging only when indicated</td></tr></table></div>
<div class="keybox"><strong>EAU position</strong><ul><li>Request at least a three-day bladder diary at initial evaluation <span class="pill strong">Strong</span></li><li>Do not routinely perform urodynamics before first-line treatment of uncomplicated OAB <span class="pill strong">Strong</span></li></ul></div>`,
qa:[
{ id:"d-diary", q:"What should a bladder diary capture?", keys:"bladder diary frequency volume chart record",
a:`<h3>The bladder diary</h3><p>Record for at least 3 days: time and volume of every void, urgency grade, leakage episodes and their trigger, pad changes, and type and amount of fluid intake. Useful derived values:</p><ul><li>Micturitions per 24 h and mean voided volume</li><li>24-h urine output (polyuria if &gt;40 mL/kg/24 h)</li><li>Nocturnal polyuria index (night output / 24-h output; &gt;33% in older adults suggests nocturnal polyuria)</li></ul><p>The diary also becomes the baseline for judging treatment response, which mirrors how clinical trials measure efficacy.</p>`},
{ id:"d-uds", q:"When are urodynamics needed?", keys:"urodynamics cystometry when indications",
a:`<h3>Urodynamics: selective, not routine</h3><p>Not needed before conservative or drug treatment of uncomplicated OAB (EAU, strong). Consider when:</p><ul><li>Planning invasive therapy (botulinum toxin, neuromodulation, surgery)</li><li>Diagnosis is unclear or symptoms are mixed and surgery is planned</li><li>Suspected voiding dysfunction or high PVR</li><li>Neurological disease, previous pelvic surgery or radiotherapy</li></ul>`},
{ id:"d-questionnaires", q:"Which questionnaires are used?", keys:"questionnaire oab-q oab-v8 icq iciq oabss ppbc ipss tools score",
a:`<h3>Validated questionnaires</h3><div class="tblwrap"><table><tr><th>Tool</th><th>Use</th></tr>
<tr><td>OAB-V8</td><td>8-item screener; score ≥8 suggests OAB</td></tr>
<tr><td>OAB-q (and short form)</td><td>Symptom bother and health-related quality of life; used in mirabegron trials</td></tr>
<tr><td>OABSS</td><td>OAB Symptom Score, widely used in Japan and Asia</td></tr>
<tr><td>ICIQ-OAB / ICIQ-UI SF</td><td>Symptoms and impact of incontinence</td></tr>
<tr><td>PPBC</td><td>Single-item patient perception of bladder condition</td></tr>
<tr><td>IPSS</td><td>Men: storage and voiding symptom score</td></tr></table></div>`},
{ id:"d-pvr", q:"When should post-void residual be measured?", keys:"pvr post void residual retention ultrasound",
a:`<h3>Post-void residual</h3><p>Measure by bladder ultrasound in men, older adults, people with voiding symptoms, diabetes or neurological disease, and before starting antimuscarinics in those at risk of retention. A raised PVR points to obstruction or detrusor underactivity, and drugs that relax the detrusor may worsen emptying.</p>`},
{ id:"d-refer", q:"When should a patient be referred to a specialist?", keys:"refer referral specialist red flags urologist",
a:`<h3>Refer when</h3><ul><li>Haematuria, bladder pain, recurrent UTI</li><li>Raised PVR or retention, suspected obstruction</li><li>Neurological disease or new neurological signs</li><li>Pelvic mass, significant prolapse, fistula</li><li>Previous pelvic surgery or radiotherapy</li><li>Failure of conservative and drug treatment (for third-line options)</li></ul>`}
],
quiz:[
{ q:"According to EAU, which test should be requested at initial evaluation?", o:["Urodynamics","Cystoscopy","A bladder diary of at least 3 days","Renal ultrasound"], c:2, e:"EAU strongly recommends a ≥3-day bladder diary and advises against routine urodynamics before first-line treatment."},
{ q:"Nocturnal polyuria is suggested when night-time output exceeds what share of 24-h output in older adults?", o:["10%","20%","33%","50%"], c:2, e:"A nocturnal polyuria index above about 33% in older adults suggests nocturnal polyuria, which needs different management."}
],
src:"EAU Guidelines on Non-neurogenic Female LUTS 2025 (sections 3 and 4.1.3); EAU Guidelines on Non-neurogenic Male LUTS 2025; ICS standardisation reports."},

/* ---------- 5 PATIENT JOURNEY ---------- */
{ id:"journey", part:"Part A · The disease", title:"Patient journey",
intro:`<div class="eyebrow">Module 5 · Patient journey</div>
<h2>From first symptom to long-term control</h2>
<div class="flow"><span class="step">1 · Symptoms start</span><span class="arr">→</span><span class="step">2 · Coping &amp; delay</span><span class="arr">→</span><span class="step">3 · First consultation</span><span class="arr">→</span><span class="step">4 · Diagnosis</span><span class="arr">→</span><span class="step">5 · Conservative care</span><span class="arr">→</span><span class="step">6 · First drug</span><span class="arr">→</span><span class="step">7 · Review, switch or combine</span><span class="arr">→</span><span class="step">8 · Third-line</span><span class="arr">→</span><span class="step">9 · Follow-up</span></div>
<div class="tblwrap"><table><tr><th>Stage</th><th>What the patient experiences</th><th>What helps</th></tr>
<tr><td>Coping &amp; delay</td><td>Embarrassment, belief it is “normal ageing”; restricts fluids, maps toilets, uses pads</td><td>Public awareness; clinicians asking proactively</td></tr>
<tr><td>Consultation</td><td>Usually primary care or gynaecology; may present with another complaint</td><td>Short screener (OAB-V8), bladder diary</td></tr>
<tr><td>Conservative care</td><td>Bladder training, fluid and caffeine advice, weight loss, PFMT</td><td>Clear instructions and follow-up</td></tr>
<tr><td>First drug</td><td>Expects quick, complete relief; may experience side effects</td><td>Set expectations; early review (EAU strong)</td></tr>
<tr><td>Review</td><td>Many stop because of side effects or limited benefit</td><td>Dose change, switch class, or combination</td></tr>
<tr><td>Third-line</td><td>Few are referred</td><td>Timely referral for botulinum toxin, SNM, PTNS</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>The biggest losses happen before diagnosis and after the first prescription.</li><li>Expectation-setting and early follow-up improve persistence.</li></ul></div>`,
qa:[
{ id:"j-delay", q:"Why do patients delay seeking care?", keys:"delay seeking care embarrassment stigma barriers",
a:`<h3>Barriers to presenting</h3><ul><li>Embarrassment and stigma around incontinence</li><li>Belief that symptoms are normal with age or after childbirth</li><li>Low awareness that effective treatments exist</li><li>Fear of surgery</li><li>Coping strategies (fluid restriction, pads) that hide the problem</li><li>Cultural and gender factors, including preference for a same-sex clinician</li></ul>`},
{ id:"j-expect", q:"What should patients expect from medication?", keys:"expectations onset how long time effect weeks",
a:`<h3>Setting expectations</h3><ul><li>Improvement is usually visible by <b>week 4</b>; full effect takes <b>8–12 weeks</b>. In the mirabegron programme, separation from placebo was seen at the first visit (week 4) and maintained for 12 months in TAURUS.</li><li>The goal is fewer and less intense urgency episodes and fewer leaks; complete dryness is not guaranteed.</li><li>Continue conservative measures alongside medication.</li><li>Report side effects early rather than stopping silently.</li></ul>`},
{ id:"j-persist", q:"Why do patients stop treatment, and how does persistence compare?", keys:"persistence adherence stop discontinue real world",
a:`<h3>Persistence</h3><p>The main reasons for stopping are insufficient efficacy, side effects (dry mouth, constipation for antimuscarinics), cost and unmet expectations. More than 60% of patients discontinue antimuscarinics within 12 months.</p><p>In a UK primary-care database study (Chapple et al., Eur Urol 2017), 12-month persistence and median time to discontinuation were greater with mirabegron than with antimuscarinics. Real-world database studies are observational and can be confounded, so present them as supportive rather than definitive.</p>`},
{ id:"j-fail", q:"What happens when first-line drugs fail?", keys:"fail failure refractory next step switch combination",
a:`<h3>Options after inadequate response</h3><ol><li>Check adherence, diary, fluid habits and new medicines.</li><li>Increase the dose or switch antimuscarinic formulation.</li><li>Switch class to a β3-agonist, or combine a β3-agonist with an antimuscarinic (EAU strong; mirabegron add-on to solifenacin 5 mg EAU weak).</li><li>Refer for third-line therapy: onabotulinumtoxinA 100 U, sacral neuromodulation or PTNS.</li></ol>`},
{ id:"j-elderly", q:"What changes for older patients?", keys:"elderly older frail cognitive anticholinergic burden geriatric",
a:`<h3>Older adults</h3><ul><li>Assess <b>anticholinergic burden</b> and cognition before an antimuscarinic (EAU strong).</li><li>Use long-term antimuscarinics cautiously in older women, especially those with or at risk of cognitive impairment (EAU strong).</li><li>Offer prompted voiding to cognitively impaired adults (EAU strong).</li><li>Consider fall risk from nocturia and urgency.</li><li>A β3-agonist avoids anticholinergic load; PILLAR studied mirabegron specifically in people ≥65 (see Module 9).</li></ul>`}
],
quiz:[
{ q:"When should a patient expect to see improvement after starting OAB medication?", o:["Within 24 hours","Usually by week 4, with full effect by 8–12 weeks","Only after 6 months","Never without surgery"], c:1, e:"Trials show separation from placebo by week 4; maximal benefit usually by 8–12 weeks."},
{ q:"What proportion of patients discontinue antimuscarinics within 12 months?", o:["About 10%","About 25%","More than 60%","Almost none"], c:2, e:"More than 60% discontinue within a year, mainly for lack of efficacy or side effects."}
],
src:"EAU Guidelines on Non-neurogenic Female LUTS 2025; Chapple CR et al. Eur Urol 2017 (UK CPRD persistence); Chapple CR et al. Eur Urol 2013 (TAURUS)."},

/* ---------- 6 TREATMENT OPTIONS ---------- */
{ id:"treatment", part:"Part A · The disease", title:"Treatment options",
intro:`<div class="eyebrow">Module 6 · Treatment options</div>
<h2>A stepped approach</h2>
<div class="tblwrap"><table><tr><th>Line</th><th>Options</th></tr>
<tr><td><b>First</b>: conservative</td><td>Education; fluid and caffeine review; weight loss; smoking cessation; bladder training; pelvic floor muscle training; prompted voiding; containment products; PTNS</td></tr>
<tr><td><b>Second</b>: drugs</td><td>Antimuscarinics (oxybutynin, tolterodine, solifenacin, fesoterodine, darifenacin, trospium, propiverine); <b>β3-agonists</b> (mirabegron, vibegron); combination of the two; vaginal oestrogen for genitourinary syndrome of menopause</td></tr>
<tr><td><b>Third</b>: invasive</td><td>OnabotulinumtoxinA 100 U intravesical; sacral neuromodulation</td></tr>
<tr><td><b>Last resort</b></td><td>Augmentation cystoplasty; urinary diversion</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Conservative care continues alongside every later step.</li><li>EAU rates antimuscarinics and β3-agonists as equally recommended options after conservative failure.</li></ul></div>`,
qa:[
{ id:"t-compare", q:"How do antimuscarinics and β3-agonists compare?", keys:"antimuscarinic beta3 compare comparison versus vs difference side effects",
a:`<h3>Two drug classes</h3><div class="tblwrap"><table><tr><th></th><th>Antimuscarinics</th><th>β3-agonists</th></tr>
<tr><td>Mechanism</td><td>Block M2/M3 receptors</td><td>Stimulate β3-adrenoceptors, relaxing detrusor during storage</td></tr>
<tr><td>Efficacy</td><td colspan="2">Similar overall for OAB symptoms (EAU: β3-agonists as effective as antimuscarinics, lower dry mouth; LE 1a)</td></tr>
<tr><td>Common AEs</td><td>Dry mouth, constipation, blurred vision, cognitive effects</td><td>Hypertension, UTI, headache, nasopharyngitis, tachycardia</td></tr>
<tr><td>Key cautions</td><td>Urinary retention, narrow-angle glaucoma, myasthenia gravis, severe GI disease; anticholinergic burden in older people</td><td>Mirabegron: severe uncontrolled hypertension (contraindicated in EU); CYP2D6 interactions; retention with BOO</td></tr></table></div>`},
{ id:"t-combo", q:"When is combination therapy used?", keys:"combination add on combine solifenacin both",
a:`<h3>Combination therapy</h3><p>For patients with inadequate response to monotherapy, combining an antimuscarinic with a β3-agonist adds efficacy with a modest increase in side effects. Evidence: SYNERGY, SYNERGY II and BESIDE (Module 9). EAU recommends offering mirabegron as additional therapy to patients inadequately treated with solifenacin 5 mg <span class="pill weak">Weak</span>, and lists a β3-agonist alone or combined with an anticholinergic as an option when an anticholinergic is ineffective <span class="pill strong">Strong</span>.</p><p>In men with persistent storage symptoms on an α1-blocker, adding mirabegron is an EAU option <span class="pill weak">Weak</span>.</p>`},
{ id:"t-third", q:"What are the third-line options?", keys:"third line botox botulinum sacral neuromodulation snm ptns tibial invasive",
a:`<h3>Third-line therapies</h3><div class="tblwrap"><table><tr><th>Option</th><th>Points to know</th></tr>
<tr><td>OnabotulinumtoxinA 100 U</td><td>Cystoscopic injections; effect lasts months, repeat as needed. Risks: UTI, raised PVR, possible need for intermittent self-catheterisation (EAU strong: warn patients).</td></tr>
<tr><td>Sacral neuromodulation</td><td>Test phase then implant; needs lifelong follow-up for lead and battery issues.</td></tr>
<tr><td>PTNS</td><td>Weekly percutaneous sessions, then maintenance; transcutaneous version available. EAU lists it with conservative options (strong).</td></tr></table></div>`},
{ id:"t-vibegron", q:"Where does vibegron fit?", keys:"vibegron second beta3 obgemsa gemtesa",
a:`<h3>Vibegron</h3><p>Vibegron 75 mg is the second β3-agonist. EAU includes it alongside mirabegron in its β3-agonist recommendation. NICE (TA999) recommends it when antimuscarinics are unsuitable, ineffective or poorly tolerated, the same position as mirabegron, based on an indirect comparison suggesting similar efficacy. Unlike mirabegron, its US label carries no warning about severe uncontrolled hypertension. Know its local registration status before discussing it.</p>`},
{ id:"t-conservative", q:"What does good conservative management include?", keys:"conservative lifestyle bladder training pelvic floor fluid caffeine weight",
a:`<h3>Conservative management (EAU)</h3><ul><li>Bladder training as first-line therapy <span class="pill strong">Strong</span></li><li>Reduce caffeine: may improve urgency and frequency, not incontinence <span class="pill strong">Strong</span></li><li>Weight loss for overweight or obese patients <span class="pill strong">Strong</span></li><li>Smoking cessation <span class="pill strong">Strong</span></li><li>Pelvic floor muscle training as intensive as possible <span class="pill strong">Strong</span></li><li>Review type and amount of fluid intake <span class="pill weak">Weak</span></li></ul>`}
],
quiz:[
{ q:"Which is the recommended onabotulinumtoxinA dose for idiopathic OAB per EAU?", o:["50 U","100 U","200 U","300 U"], c:1, e:"EAU recommends 100 U bladder wall injections for refractory OAB/UUI."},
{ q:"Which adverse event is much less common with β3-agonists than with antimuscarinics?", o:["Dry mouth","Urinary tract infection","Headache","Nasopharyngitis"], c:0, e:"Dry mouth is the hallmark antimuscarinic AE; with mirabegron it occurred at placebo-like rates."}
],
src:"EAU Guidelines on Non-neurogenic Female LUTS 2025; EAU Guidelines on Non-neurogenic Male LUTS 2025; NICE TA999 (vibegron); AUA/SUFU OAB Guideline 2024."},

/* ---------- 7 EAU GUIDELINES ---------- */
{ id:"eau", part:"Part B · Guidelines", title:"EAU guidelines",
intro:`<div class="eyebrow">Module 7 · EAU guidelines</div>
<h2>What the European Association of Urology recommends</h2>
<p>OAB appears in two EAU guidelines: <b>Non-neurogenic Female LUTS</b> (section 4.1, 2025 limited update) and <b>Non-neurogenic Male LUTS</b>. Each recommendation carries a strength rating:</p>
<ul><li><span class="pill strong">Strong</span> high-quality evidence and/or a clear balance of benefit over harm, consistent patient preference.</li><li><span class="pill weak">Weak</span> lower-quality evidence, an equivocal benefit-harm balance, or variable patient preference.</li></ul>
<h4>Pharmacological management (female LUTS)</h4>
<div class="tblwrap"><table><tr><th>Recommendation</th><th>Strength</th></tr>
<tr><td>Use shared decision-making when selecting pharmacotherapy</td><td><span class="pill strong">Strong</span></td></tr>
<tr><td>Offer anticholinergics to women whose conservative management has failed</td><td><span class="pill strong">Strong</span></td></tr>
<tr><td><b>Offer β3-agonists (mirabegron, vibegron) to women whose conservative management has failed</b></td><td><span class="pill strong">Strong</span></td></tr>
<tr><td>If an anticholinergic is ineffective: dose escalation, another formulation, or a β3-agonist alone or combined with an anticholinergic</td><td><span class="pill strong">Strong</span></td></tr>
<tr><td>Offer mirabegron as additional therapy when inadequately treated with solifenacin 5 mg</td><td><span class="pill weak">Weak</span></td></tr>
<tr><td>Use long-term anticholinergics with caution in elderly women, especially with cognitive dysfunction</td><td><span class="pill strong">Strong</span></td></tr>
<tr><td>Assess anticholinergic burden and comorbidities before anticholinergic therapy</td><td><span class="pill strong">Strong</span></td></tr>
<tr><td>Offer early follow-up to women starting anticholinergic or β3-agonist therapy</td><td><span class="pill strong">Strong</span></td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>β3-agonists and anticholinergics share the same strong recommendation after conservative failure.</li><li>EAU evidence summary: β3-agonists are as effective as antimuscarinics with lower dry mouth rates (LE 1a).</li></ul></div>`,
qa:[
{ id:"g-dx", q:"What does EAU recommend for diagnosis?", keys:"eau diagnosis diary urodynamics recommendation evaluation",
a:`<h3>Diagnostic recommendations</h3><ul><li>Request at least a three-day bladder diary at initial evaluation <span class="pill strong">Strong</span></li><li>Do not routinely perform urodynamics before first-line treatment of uncomplicated OAB <span class="pill strong">Strong</span></li><li>Take a current medication history from all patients <span class="pill strong">Strong</span></li><li>Review any new medication linked to onset or worsening of symptoms <span class="pill strong">Strong</span></li><li>Identify and address comorbidities such as obstructive sleep apnoea and obesity <span class="pill weak">Weak</span></li><li>Do not routinely use urinary biomarkers or microbiome testing <span class="pill strong">Strong</span></li></ul>`},
{ id:"g-cons", q:"What are the EAU conservative recommendations?", keys:"eau conservative lifestyle bladder training ptns acupuncture containment",
a:`<h3>Conservative recommendations</h3><ul><li>Offer bladder training as first-line therapy for OAB/UUI <span class="pill strong">Strong</span></li><li>Make pelvic floor muscle training as intensive as possible <span class="pill strong">Strong</span></li><li>Offer prompted voiding to cognitively impaired adults <span class="pill strong">Strong</span></li><li>Offer posterior tibial nerve stimulation <span class="pill strong">Strong</span></li><li>Advise caffeine reduction; encourage weight loss; support smoking cessation <span class="pill strong">Strong</span></li><li>Offer pads or containment when active treatment is delayed or not possible <span class="pill strong">Strong</span></li><li>Consider acupuncture <span class="pill weak">Weak</span></li></ul>`},
{ id:"g-invasive", q:"What are the EAU recommendations for refractory OAB?", keys:"eau refractory invasive botox snm surgery cystoplasty laser",
a:`<h3>Refractory OAB</h3><ul><li>Offer onabotulinumtoxinA 100 U to patients refractory to conservative or drug treatment <span class="pill strong">Strong</span></li><li>Warn about limited duration, UTI risk and possible prolonged intermittent catheterisation <span class="pill strong">Strong</span></li><li>Offer sacral nerve stimulation to patients refractory to anticholinergic therapy <span class="pill strong">Strong</span></li><li>Do not offer vaginal laser therapy outside a regulated research study <span class="pill strong">Strong</span></li><li>Offer augmentation cystoplasty only after all other options have failed <span class="pill weak">Weak</span></li><li>Do not offer detrusor myectomy for UUI <span class="pill weak">Weak</span></li></ul>`},
{ id:"g-male", q:"What does the EAU male LUTS guideline say about OAB drugs?", keys:"eau male men luts guideline beta3 alpha blocker",
a:`<h3>Men with storage-predominant LUTS</h3><ul><li>Use β3-agonists in men with moderate-to-severe LUTS who mainly have bladder storage symptoms <span class="pill weak">Weak</span></li><li>Use muscarinic receptor antagonists in men with moderate-to-severe storage-predominant LUTS; caution if PVR is raised.</li><li>Combine an α1-blocker with mirabegron when storage LUTS persist on α1-blocker monotherapy <span class="pill weak">Weak</span></li><li>Combine an α1-blocker with an antimuscarinic if storage relief is insufficient with either alone <span class="pill weak">Weak</span>; do not prescribe this combination if PVR &gt;150 mL <span class="pill weak">Weak</span></li></ul><p>Review drug-treated men at 4–6 weeks, then periodically.</p>`},
{ id:"g-other", q:"How do other guidelines compare?", keys:"aua sufu nice other guidelines compare",
a:`<h3>Other guidelines in brief</h3><ul><li><b>AUA/SUFU 2024</b>: clinicians should offer antimuscarinics or β3-agonists to improve OAB symptoms (strong recommendation, grade A evidence).</li><li><b>NICE (UK)</b>: antimuscarinics first on acquisition cost; mirabegron or vibegron when antimuscarinics are unsuitable, ineffective or not tolerated.</li></ul><p>EAU and AUA place the two classes on an equal footing; NICE's sequence is driven by cost.</p>`}
],
quiz:[
{ q:"What strength does EAU assign to offering β3-agonists after failed conservative management?", o:["Weak","Strong","Not rated","Not recommended"], c:1, e:"EAU: offer β3-agonists (mirabegron, vibegron) to women whose conservative management has failed — Strong."},
{ q:"EAU recommends adding mirabegron for patients inadequately treated with which drug?", o:["Oxybutynin 5 mg","Solifenacin 5 mg","Tolterodine 2 mg","Tamsulosin 0.4 mg"], c:1, e:"Based on BESIDE, EAU recommends offering mirabegron as add-on in patients inadequately treated with solifenacin 5 mg (Weak)."}
],
src:"EAU Guidelines on Management of Non-neurogenic Female LUTS, limited update March 2025 (uroweb.org); EAU Guidelines on Non-neurogenic Male LUTS 2025 (pocket); AUA/SUFU OAB Guideline 2024; NICE TA290, TA999."},

/* ---------- 8 MIRABEGRON MOA ---------- */
{ id:"moa", part:"Part C · Mirabegron", title:"Mirabegron: mechanism & pharmacology",
intro:`<div class="eyebrow">Module 8 · Mirabegron</div>
<h2>The first β3-adrenoceptor agonist for OAB</h2>
<div class="facts"><div class="fact"><b>2011</b><span>First approval, Japan (Betanis)</span></div><div class="fact"><b>2012</b><span>US (Myrbetriq) and EU (Betmiga)</span></div><div class="fact"><b>~50 h</b><span>Terminal half-life; once daily</span></div><div class="fact"><b>50 mg</b><span>Standard adult dose (EU)</span></div></div>
<h4>Mechanism of action</h4>
<div class="flow"><span class="step">Mirabegron binds β3-adrenoceptor on detrusor</span><span class="arr">→</span><span class="step">Gs protein → adenylyl cyclase → ↑cAMP</span><span class="arr">→</span><span class="step">PKA activation, K⁺ channel opening, ↓intracellular Ca²⁺</span><span class="arr">→</span><span class="step">Detrusor relaxation during storage</span></div>
<p>The result is larger bladder capacity and voided volume, fewer non-voiding contractions and reduced afferent signalling, without blocking the parasympathetic voiding contraction. A urodynamic safety study in men with bladder outlet obstruction showed no consistent effect on voiding function, with a small increase in post-void residual.</p>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Acts on the storage phase; antimuscarinics act mainly by blocking cholinergic signalling.</li><li>No anticholinergic effects, so dry mouth and constipation occur at placebo-like rates.</li><li>Different mechanisms make combination with an antimuscarinic rational.</li></ul></div>`,
qa:[
{ id:"m-vs-am", q:"How does mirabegron differ from antimuscarinics?", keys:"mirabegron differ antimuscarinic mechanism different",
a:`<h3>Two complementary mechanisms</h3><p>Antimuscarinics block acetylcholine at M2/M3 receptors, dampening involuntary contractions and afferent signalling but also affecting salivary glands, gut, eye and brain. Mirabegron enhances the sympathetic “storage” signal through β3-adrenoceptors. Because the targets differ, the two classes can be combined (SYNERGY, BESIDE), and mirabegron adds no anticholinergic burden.</p>`},
{ id:"m-pk", q:"What are the key pharmacokinetic properties?", keys:"pharmacokinetics pk half life bioavailability metabolism tmax",
a:`<h3>Pharmacokinetics</h3><div class="tblwrap"><table><tr><th>Parameter</th><th>Value</th></tr>
<tr><td>Formulation</td><td>Prolonged-release tablet, once daily</td></tr>
<tr><td>Oral bioavailability</td><td class="num">29% (25 mg) → 35% (50 mg)</td></tr>
<tr><td>Time to peak</td><td class="num">≈3–4 h</td></tr>
<tr><td>Terminal half-life</td><td class="num">≈50 h; steady state in ~7 days</td></tr>
<tr><td>Metabolism</td><td>Multiple pathways: dealkylation, oxidation, glucuronidation, amide hydrolysis; CYP3A4 and CYP2D6 involved</td></tr>
<tr><td>Enzyme effect</td><td>Moderate, time-dependent <b>CYP2D6 inhibitor</b>; weak P-gp inhibitor</td></tr></table></div>`},
{ id:"m-dose", q:"What is the dose, including renal and hepatic impairment?", keys:"dose dosing renal hepatic impairment kidney liver adjustment 25 mg 50 mg",
a:`<h3>Dosing (EU SmPC; check local label)</h3><ul><li>Adults: <b>50 mg once daily</b>, swallowed whole with liquid, with or without food.</li><li>Severe renal impairment (eGFR 15–29): 25 mg. Not recommended in end-stage renal disease or dialysis.</li><li>Moderate hepatic impairment (Child-Pugh B): 25 mg. Not recommended in severe hepatic impairment.</li><li>With strong CYP3A inhibitors: 25 mg in mild/moderate renal or mild hepatic impairment; not recommended in more severe impairment.</li></ul><p><b>US label</b>: start at 25 mg once daily, may increase to 50 mg after 4–8 weeks. Paediatric NDO (≥3 years) is weight-based.</p>`},
{ id:"m-ddi", q:"Which drug interactions matter?", keys:"interactions ddi cyp2d6 metoprolol digoxin flecainide desipramine",
a:`<h3>Drug interactions</h3><ul><li><b>CYP2D6 substrates with a narrow therapeutic index</b> (thioridazine, flecainide, propafenone, tricyclics such as desipramine, imipramine): exposure increases; use with caution and adjust dose.</li><li><b>Metoprolol</b> exposure increases.</li><li><b>Digoxin</b>: start with the lowest digoxin dose and monitor levels.</li><li><b>Strong CYP3A inhibitors</b> raise mirabegron exposure; matters mainly with renal or hepatic impairment.</li><li><b>Antimuscarinics</b>: caution for urinary retention, especially with bladder outlet obstruction.</li></ul>`},
{ id:"m-contra", q:"Who should not receive mirabegron?", keys:"contraindications warnings precautions hypertension who should not pregnancy",
a:`<h3>Contraindications and key warnings</h3><ul><li>Hypersensitivity to the active substance.</li><li><b>Severe uncontrolled hypertension</b> (SBP ≥180 and/or DBP ≥110 mmHg): contraindicated in the EU. Measure BP at baseline and periodically.</li><li>Caution: stage 2 hypertension, known QT prolongation or QT-prolonging drugs, bladder outlet obstruction, concurrent antimuscarinics.</li><li>Angioedema has been reported.</li><li>Not recommended in pregnancy or women of childbearing potential not using contraception; avoid during breastfeeding.</li></ul>`}
],
quiz:[
{ q:"Mirabegron relaxes the detrusor mainly through which second messenger?", o:["IP3","cAMP","cGMP","Diacylglycerol"], c:1, e:"β3-adrenoceptor activation couples to Gs, adenylyl cyclase and increased cAMP."},
{ q:"Mirabegron is a moderate inhibitor of which enzyme?", o:["CYP3A4","CYP2C9","CYP2D6","CYP1A2"], c:2, e:"Mirabegron moderately inhibits CYP2D6, so narrow-therapeutic-index CYP2D6 substrates need caution."}
],
src:"Betmiga EU SmPC; Myrbetriq US Prescribing Information; Andersson KE et al. reviews; Nitti VW et al. J Urol 2013 (urodynamic safety in men with BOO); Sacco E, Bientinesi R. Ther Adv Urol 2015."},

/* ---------- 9 CLINICAL TRIALS ---------- */
{ id:"trials", part:"Part C · Mirabegron", title:"Phase 3 clinical trials",
intro:`<div class="eyebrow">Module 9 · Clinical programme</div>
<h2>Mirabegron phase 3 trials at a glance</h2>
<p>Pick any trial chip below for design, endpoints, results and safety. Adult trials enrolled people ≥18 y with OAB ≥3 months, ≥8 micturitions/24 h and urgency episodes on a 3-day (or 7-day) diary after a placebo run-in.</p>
<div class="tblwrap"><table><tr><th>Trial</th><th>Phase</th><th>n</th><th>Length</th><th>Comparator</th><th>Main question</th></tr>
<tr><td>SCORPIO</td><td><span class="pill ph">3</span></td><td class="num">≈1,980</td><td>12 wk</td><td>Placebo; tolterodine ER 4 mg (active control)</td><td>Efficacy of 50/100 mg, Europe–Australia</td></tr>
<tr><td>ARIES</td><td><span class="pill ph">3</span></td><td class="num">1,329</td><td>12 wk</td><td>Placebo</td><td>Efficacy of 50/100 mg, North America</td></tr>
<tr><td>CAPRICORN</td><td><span class="pill ph">3</span></td><td class="num">1,306</td><td>12 wk</td><td>Placebo</td><td>Efficacy of 25/50 mg</td></tr>
<tr><td>Pooled analysis</td><td>3 (pooled)</td><td class="num">3,542 FAS</td><td>12 wk</td><td>Placebo</td><td>Combined efficacy and safety</td></tr>
<tr><td>TAURUS</td><td><span class="pill ph">3</span></td><td class="num">2,444</td><td>12 mo</td><td>Tolterodine ER 4 mg</td><td>Long-term safety</td></tr>
<tr><td>Japan</td><td><span class="pill ph">3</span></td><td class="num">1,139</td><td>12 wk</td><td>Placebo; tolterodine</td><td>Efficacy in Japanese patients</td></tr>
<tr><td>Asia</td><td><span class="pill ph">3</span></td><td class="num">1,126</td><td>12 wk</td><td>Placebo; tolterodine</td><td>Efficacy in Taiwan, Korea, China, India</td></tr>
<tr><td>BEYOND</td><td><span class="pill ph">3b</span></td><td class="num">1,887</td><td>12 wk</td><td>Solifenacin 5 mg</td><td>Non-inferiority in antimuscarinic-dissatisfied patients</td></tr>
<tr><td>BESIDE</td><td><span class="pill ph">3b</span></td><td class="num">2,174</td><td>12 wk</td><td>Solifenacin 5 / 10 mg</td><td>Add-on to solifenacin 5 mg</td></tr>
<tr><td>SYNERGY</td><td><span class="pill ph">3</span></td><td class="num">≈3,500</td><td>12 wk</td><td>Monotherapies; placebo</td><td>Combination vs monotherapy</td></tr>
<tr><td>SYNERGY II</td><td><span class="pill ph">3</span></td><td class="num">1,829</td><td>12 mo</td><td>Monotherapies</td><td>Long-term combination safety</td></tr>
<tr><td>Paediatric NDO</td><td><span class="pill ph">3</span></td><td class="num">86</td><td>24 wk (primary)</td><td>Baseline (open-label)</td><td>Children 3–&lt;18 y with neurogenic DO</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Three pivotal 12-week trials established efficacy on the co-primary endpoints: incontinence episodes/24 h and micturitions/24 h.</li><li>TAURUS confirmed 12-month safety, with dry mouth about one-third the rate seen with tolterodine.</li><li>Combination trials (SYNERGY, SYNERGY II, BESIDE) showed additive benefit with solifenacin.</li></ul></div>`,
qa:[
{ id:"tr-scorpio", tag:"SCORPIO", q:"SCORPIO: design and results", keys:"scorpio khullar europe australia 046 tolterodine pivotal",
a:`<div class="eyebrow">Phase 3 · Khullar V et al. Eur Urol 2013 · NCT00689104</div><h3>SCORPIO</h3>
<div class="tblwrap"><table><tr><th>Design</th><td>Randomised, double-blind, double-dummy, placebo- and active-controlled; 12 weeks; Europe and Australia</td></tr>
<tr><th>Arms</th><td>Placebo · mirabegron 50 mg · mirabegron 100 mg · tolterodine ER 4 mg (active control, ~495 per arm)</td></tr>
<tr><th>Co-primary endpoints</th><td>Change from baseline to final visit in incontinence episodes/24 h and micturitions/24 h</td></tr>
<tr><th>Micturitions/24 h</th><td>Mirabegron 50 mg vs placebo: <b>−0.60</b> (95% CI −0.90 to −0.29)</td></tr>
<tr><th>Incontinence/24 h</th><td>Mirabegron 50 mg vs placebo: <b>−0.41</b>, statistically significant</td></tr></table></div>
<h4>Safety (placebo / M50 / M100 / tolterodine)</h4>
<div class="tblwrap"><table><tr><th>Event</th><th>Placebo</th><th>M50</th><th>M100</th><th>Tolterodine</th></tr>
<tr><td>Any AE</td><td class="num">43.3%</td><td class="num">42.8%</td><td class="num">40.1%</td><td class="num">46.7%</td></tr>
<tr><td>Hypertension</td><td class="num">7.7%</td><td class="num">5.9%</td><td class="num">5.4%</td><td class="num">8.1%</td></tr>
<tr><td>Dry mouth</td><td class="num">2.6%</td><td class="num">2.8%</td><td class="num">2.8%</td><td class="num">10.1%</td></tr></table></div>
<p>Tolterodine was an active control; the trial was not designed to compare mirabegron with tolterodine statistically.</p>`},
{ id:"tr-aries", tag:"ARIES", q:"ARIES: design and results", keys:"aries nitti north america usa canada 047",
a:`<div class="eyebrow">Phase 3 · Nitti VW et al. J Urol 2013 · NCT00662909</div><h3>ARIES</h3>
<div class="tblwrap"><table><tr><th>Design</th><td>Randomised, double-blind, placebo-controlled; 12 weeks; United States and Canada; n = 1,329</td></tr>
<tr><th>Arms</th><td>Placebo · mirabegron 50 mg · mirabegron 100 mg</td></tr>
<tr><th>Co-primary endpoints</th><td>Change in incontinence episodes/24 h and micturitions/24 h</td></tr>
<tr><th>Micturitions/24 h</th><td>Mirabegron 50 mg vs placebo: <b>−0.61</b> (95% CI −0.98 to −0.24)</td></tr>
<tr><th>Incontinence/24 h</th><td>Both doses significantly better than placebo (p&lt;0.05)</td></tr>
<tr><th>Secondary</th><td>Improvements in urgency and nocturia; benefit seen from week 4</td></tr></table></div>`},
{ id:"tr-capricorn", tag:"CAPRICORN", q:"CAPRICORN: design and results", keys:"capricorn herschorn 25 mg 074 dose",
a:`<div class="eyebrow">Phase 3 · Herschorn S et al. Urology 2013 · NCT00912964</div><h3>CAPRICORN</h3>
<p>The only phase 3 trial to test the <b>25 mg</b> dose, which supports the US starting dose.</p>
<div class="tblwrap"><table><tr><th>Design</th><td>Randomised 1:1:1, double-blind, placebo-controlled; 12 weeks; Europe and North America; n = 1,306</td></tr>
<tr><th>Arms</th><td>Placebo · mirabegron 25 mg · mirabegron 50 mg</td></tr></table></div>
<div class="tblwrap"><table><tr><th>Difference vs placebo</th><th>M25</th><th>M50</th></tr>
<tr><td>Micturitions/24 h</td><td class="num">−0.47 (p=0.007)</td><td class="num">−0.42 (p=0.015)</td></tr>
<tr><td>Incontinence episodes/24 h</td><td class="num">−0.40 (p=0.005)</td><td class="num">−0.42 (p=0.001)</td></tr>
<tr><td>Volume voided/micturition</td><td class="num">+4.6 mL (NS)</td><td class="num">+12.4 mL (p&lt;0.001)</td></tr></table></div>`},
{ id:"tr-pooled", tag:"Pooled", q:"What did the pooled phase 3 analysis show?", keys:"pooled analysis integrated three trials combined",
a:`<div class="eyebrow">Pre-specified pooled analysis · Nitti VW et al. Int J Clin Pract 2013; Nitti VW et al. Int J Clin Pract 2014 (safety)</div><h3>Pooled SCORPIO, ARIES and CAPRICORN</h3>
<div class="tblwrap"><table><tr><th>Mean change from baseline</th><th>Placebo</th><th>M50</th><th>M100</th></tr>
<tr><td>Incontinence episodes/24 h (FAS-I)</td><td class="num">−1.10</td><td class="num">−1.49</td><td class="num">−1.50</td></tr>
<tr><td>Micturitions/24 h (FAS, n=3,542)</td><td class="num">−1.20</td><td class="num">−1.75</td><td class="num">−1.74</td></tr></table></div>
<p>Micturitions difference M50 vs placebo: −0.55 (95% CI −0.75 to −0.36), p&lt;0.001. Improvements appeared by week 4 and extended to urgency and volume voided.</p>
<h4>Pooled safety</h4><ul><li>Placebo-adjusted mean increase of 0.4–0.6 mmHg in blood pressure and ~1 bpm in pulse with 50 mg, reversible after stopping.</li><li>Major adverse cardiovascular events (independently adjudicated): low and similar across groups.</li><li>Dry mouth on average about five times less frequent than with tolterodine ER 4 mg.</li></ul>`},
{ id:"tr-taurus", tag:"TAURUS", q:"TAURUS: 12-month safety results", keys:"taurus long term 12 month one year safety chapple 049",
a:`<div class="eyebrow">Phase 3 · Chapple CR et al. Eur Urol 2013 · NCT00688688</div><h3>TAURUS</h3>
<div class="tblwrap"><table><tr><th>Design</th><td>Randomised, double-blind, active-controlled; 12 months; 306 sites incl. Europe and US</td></tr>
<tr><th>Arms (treated)</th><td>Mirabegron 50 mg (812) · mirabegron 100 mg (820) · tolterodine ER 4 mg (812)</td></tr>
<tr><th>Primary endpoint</th><td>Incidence and severity of treatment-emergent AEs (TEAEs)</td></tr></table></div>
<div class="tblwrap"><table><tr><th>Outcome</th><th>M50</th><th>M100</th><th>Tolterodine</th></tr>
<tr><td>Any TEAE</td><td class="num">59.7%</td><td class="num">61.3%</td><td class="num">62.6%</td></tr>
<tr><td>Serious TEAE</td><td class="num">5.2%</td><td class="num">6.2%</td><td class="num">5.4%</td></tr>
<tr><td>Dry mouth</td><td class="num">2.8%</td><td class="num">2.3%</td><td class="num">8.6%</td></tr>
<tr><td>Morning SBP change</td><td class="num">+0.2 mmHg</td><td class="num">+0.4 mmHg</td><td class="num">−0.5 mmHg</td></tr></table></div>
<p>Efficacy improved from month 1 and was maintained to 12 months. <b>Limitation:</b> no placebo arm.</p>`},
{ id:"tr-japan", tag:"Japan", q:"Japanese phase 3 trial results", keys:"japan japanese yamaguchi betanis",
a:`<div class="eyebrow">Phase 3 · Yamaguchi O et al. BJU Int 2014 · NCT00966004</div><h3>Japanese phase 3</h3>
<div class="tblwrap"><table><tr><th>Design</th><td>Randomised, double-blind, placebo-controlled, 12 weeks; tolterodine 4 mg as reference (not tested for non-inferiority); n = 1,139 (placebo 381, M50 380, tolterodine 378)</td></tr>
<tr><th>Primary endpoint</th><td>Change in micturitions/24 h</td></tr></table></div>
<div class="tblwrap"><table><tr><th>Mean change</th><th>M50</th><th>Placebo</th><th>p</th></tr>
<tr><td>Micturitions/24 h</td><td class="num">−1.67</td><td class="num">−0.86</td><td class="num">&lt;0.001</td></tr>
<tr><td>Urgency episodes/24 h</td><td class="num">−1.85</td><td class="num">−1.37</td><td class="num">0.025</td></tr>
<tr><td>Incontinence episodes/24 h</td><td class="num">−1.12</td><td class="num">−0.66</td><td class="num">0.003</td></tr>
<tr><td>Urgency incontinence/24 h</td><td class="num">−1.01</td><td class="num">−0.60</td><td class="num">0.008</td></tr>
<tr><td>Volume voided (mL)</td><td class="num">+24.3</td><td class="num">+9.7</td><td class="num">&lt;0.001</td></tr></table></div>
<p>AE incidence with mirabegron was similar to placebo; most AEs were mild.</p>`},
{ id:"tr-asia", tag:"Asia", q:"Asian multinational phase 3 trial results", keys:"asia asian taiwan korea china india kuo",
a:`<div class="eyebrow">Phase 3 · Kuo HC et al. Neurourol Urodyn 2015</div><h3>Asian multinational trial</h3>
<div class="tblwrap"><table><tr><th>Design</th><td>Randomised, double-blind, placebo- and active-controlled; 12 weeks; Taiwan, Korea, China, India; n = 1,126</td></tr>
<tr><th>Arms</th><td>Placebo · mirabegron 50 mg · tolterodine ER 4 mg</td></tr>
<tr><th>Primary endpoint</th><td>Change in micturitions/24 h</td></tr>
<tr><th>Result</th><td>M50 vs placebo: <b>−0.57</b> (95% CI −1.04 to −0.09), p=0.019; significant at all time points</td></tr>
<tr><th>Secondary</th><td>No significant differences except volume voided per micturition</td></tr>
<tr><th>Drug-related AEs</th><td>Placebo 17.2% · M50 15.8% · tolterodine 21.3%</td></tr></table></div>
<p>A balanced message: the primary endpoint was met, but most secondary endpoints did not separate from placebo in this population.</p>`},
{ id:"tr-beyond", tag:"BEYOND", q:"BEYOND: mirabegron vs solifenacin", keys:"beyond batista solifenacin non inferiority noninferiority dissatisfied",
a:`<div class="eyebrow">Phase 3b · Batista JE et al. Ther Adv Urol 2015 · NCT01638000</div><h3>BEYOND</h3>
<div class="tblwrap"><table><tr><th>Population</th><td>Adults dissatisfied with a previous antimuscarinic (not solifenacin) because of lack of efficacy</td></tr>
<tr><th>Design</th><td>Randomised, double-blind, non-inferiority; 12 weeks; no placebo arm; n = 1,887 (M50 943, solifenacin 5 mg 944)</td></tr>
<tr><th>Primary endpoint</th><td>Change in micturitions/24 h; non-inferiority if lower 95% CI limit &gt; −0.20</td></tr>
<tr><th>Result</th><td>Adjusted difference <b>−0.18</b> (95% CI −0.42 to 0.06): <b>non-inferiority not demonstrated</b></td></tr>
<tr><th>Other findings</th><td>Both drugs gave clinically meaningful improvements with no statistically significant differences in key symptoms; dry mouth lower with mirabegron</td></tr></table></div>
<div class="warn"><strong>Present accurately.</strong> BEYOND did not meet its non-inferiority margin. Do not describe it as showing equivalence or superiority.</div>`},
{ id:"tr-beside", tag:"BESIDE", q:"BESIDE: mirabegron add-on to solifenacin", keys:"beside add on drake solifenacin 10 mg incontinent combination",
a:`<div class="eyebrow">Phase 3b · Drake MJ et al. Eur Urol 2016 · NCT01908829</div><h3>BESIDE</h3>
<div class="tblwrap"><table><tr><th>Population</th><td>Incontinent OAB patients still leaking after 4 weeks of solifenacin 5 mg</td></tr>
<tr><th>Design</th><td>Randomised 1:1:1, double-blind; 12 weeks; 281 centres; n = 2,174</td></tr>
<tr><th>Arms</th><td>Combination: solifenacin 5 mg + mirabegron 25 mg, up to 50 mg after week 4 (727) · solifenacin 5 mg (728) · solifenacin 10 mg (719)</td></tr>
<tr><th>Primary endpoint</th><td>Change in incontinence episodes/24 h, combination vs solifenacin 5 mg</td></tr>
<tr><th>Result</th><td>Combination reduced daily incontinence by 1.80 episodes and was <b>superior to solifenacin 5 mg</b> for incontinence (p=0.001), micturitions (p&lt;0.001) and 3-day diary incontinence (p=0.014)</td></tr>
<tr><th>vs solifenacin 10 mg</th><td>Non-inferior on key secondary endpoints; superior for daily micturitions</td></tr>
<tr><th>Safety</th><td>All arms well tolerated; constipation 4.6% (combination), 4.7% (S10), 3.0% (S5); &gt;97% of patients had no clinically significant PVR increase</td></tr></table></div>
<p>BESIDE underpins the EAU recommendation to offer mirabegron as add-on therapy after inadequate response to solifenacin 5 mg.</p>`},
{ id:"tr-synergy", tag:"SYNERGY", q:"SYNERGY: combination vs monotherapy", keys:"synergy herschorn combination monotherapy solifenacin 12 week",
a:`<div class="eyebrow">Phase 3 · Herschorn S et al. BJU Int 2017</div><h3>SYNERGY</h3>
<div class="tblwrap"><table><tr><th>Population</th><td>Wet OAB: ≥8 micturitions, ≥1 urgency episode/24 h and ≥3 incontinence episodes per 7-day diary, after a 4-week placebo run-in</td></tr>
<tr><th>Design</th><td>Randomised 2:2:1:1:1:1, double-blind; 12 weeks; ≈3,500 patients, the largest OAB trial at the time</td></tr>
<tr><th>Arms</th><td>S5+M25 · S5+M50 · solifenacin 5 mg · mirabegron 25 mg · mirabegron 50 mg · placebo</td></tr>
<tr><th>Co-primary endpoints</th><td>Change in incontinence episodes/24 h and micturitions/24 h (7-day e-diary)</td></tr></table></div>
<h4>Results</h4><ul><li>Incontinence: S5+M50 superior to solifenacin 5 mg (adjusted difference −0.20, p=0.033); vs mirabegron 50 mg −0.23, p=0.052 (not significant).</li><li>Micturitions, placebo-adjusted: S5+M50 −0.95 and S5+M25 −0.85 vs M50 −0.39, M25 −0.36, S5 −0.56; S5+M50 nominally superior to both monotherapies.</li><li>S5+M50 significantly better than both monotherapies for urgency incontinence, urgency and nocturia; effects appeared additive and were visible by week 4.</li></ul>
<h4>Safety</h4><p>Slightly more TEAEs with combination; slightly more dry mouth, constipation and dyspepsia; slightly more events suggesting urinary retention and a small PVR increase. No ECG or laboratory concerns.</p>`},
{ id:"tr-synergy2", tag:"SYNERGY II", q:"SYNERGY II: 12-month combination results", keys:"synergy ii 2 long term 12 month combination gratzke",
a:`<div class="eyebrow">Phase 3 · Gratzke C et al. Eur Urol 2018 · NCT02045862</div><h3>SYNERGY II</h3>
<div class="tblwrap"><table><tr><th>Design</th><td>Randomised 4:1:1, double-blind; 12 months; 1,829 randomised (FAS 1,794); 80% women, median age 60</td></tr>
<tr><th>Arms</th><td>Solifenacin 5 mg + mirabegron 50 mg · solifenacin 5 mg · mirabegron 50 mg</td></tr>
<tr><th>Primary objective</th><td>Safety (TEAEs); efficacy: incontinence episodes/24 h and micturitions/24 h</td></tr></table></div>
<div class="tblwrap"><table><tr><th>Safety</th><th>Combination</th><th>Solifenacin</th><th>Mirabegron</th></tr>
<tr><td>Any TEAE</td><td class="num">49%</td><td class="num">44%</td><td class="num">41%</td></tr>
<tr><td>Dry mouth</td><td class="num">6.1%</td><td class="num">5.9%</td><td class="num">3.9%</td></tr></table></div>
<p>Serious TEAEs: 3.7% overall; one judged possibly treatment-related (atrial fibrillation, mirabegron arm).</p>
<p><b>Efficacy:</b> combination was statistically superior to each monotherapy for incontinence (vs mirabegron −0.5, p&lt;0.001; vs solifenacin p=0.002) and micturitions (vs mirabegron −0.5, p&lt;0.001; vs solifenacin −0.4, p=0.004). A pre-specified age analysis showed consistent results in patients ≥65 and ≥75.</p>`},
{ id:"tr-peds", tag:"Paediatric", q:"Paediatric NDO phase 3 trial", keys:"paediatric pediatric children nda neurogenic ndo spina bifida",
a:`<div class="eyebrow">Phase 3 · Baka-Ostrowska M et al. Neurourol Urodyn 2021 · NCT02751931</div><h3>Children with neurogenic detrusor overactivity</h3>
<div class="tblwrap"><table><tr><th>Population</th><td>Ages 3 to &lt;18 using clean intermittent catheterisation; n = 86 treated (55 aged 3–&lt;12, 31 aged 12–&lt;18); 68 in efficacy analysis</td></tr>
<tr><th>Design</th><td>Open-label, baseline-controlled, dose-titration; weight-based paediatric equivalent of 25 mg, titrated to 50 mg equivalent</td></tr>
<tr><th>Primary endpoint</th><td>Change in maximum cystometric capacity at week 24</td></tr>
<tr><th>Result</th><td><b>+87.2 mL</b> (95% CI 66.1 to 108.3), p&lt;0.001; evident from week 4</td></tr>
<tr><th>Secondary</th><td>Improved compliance, lower detrusor pressure, fewer leakage episodes, more dry days</td></tr></table></div>
<p>Supported US approval of mirabegron for paediatric NDO (≥3 years) in 2021. Check local indication status.</p>`},
{ id:"tr-other", tag:"Other studies", q:"Which other mirabegron studies should I know?", keys:"pillar elderly phase 2 phase 4 dragon blossom symphony milai older men",
a:`<h3>Supporting studies (not phase 3)</h3><div class="tblwrap"><table><tr><th>Study</th><th>Phase</th><th>Key point</th></tr>
<tr><td>BLOSSOM</td><td>2</td><td>Proof of concept, 4 weeks, twice-daily dosing vs placebo and tolterodine</td></tr>
<tr><td>DRAGON</td><td>2b</td><td>Dose-ranging 25–200 mg, n = 919; informed the 25/50 mg doses</td></tr>
<tr><td>SYMPHONY</td><td>2</td><td>Dose-ranging combinations with solifenacin; basis for SYNERGY</td></tr>
<tr><td><b>PILLAR</b></td><td>4</td><td>n = 888, age ≥65 (target ≥30% &gt;75), US/Canada; flexible 25→50 mg vs placebo; both co-primary endpoints met; TEAEs 39.4% placebo, 44.2% M25, 49.8% M50; no adverse cognitive effects reported</td></tr>
<tr><td>MILAI II</td><td>4</td><td>Japan, open-label, 52 weeks: antimuscarinic add-on after suboptimal response to mirabegron</td></tr>
<tr><td>Male pooled analysis (Tubaro 2017)</td><td>Post hoc</td><td>Men from 5 trials: M50 reduced micturitions vs placebo (−0.37); comparable to solifenacin in BEYOND; well tolerated</td></tr></table></div>`}
],
quiz:[
{ q:"Which phase 3 trial was the only one to study mirabegron 25 mg?", o:["SCORPIO","ARIES","CAPRICORN","TAURUS"], c:2, e:"CAPRICORN compared mirabegron 25 mg and 50 mg with placebo."},
{ q:"What was the outcome of BEYOND?", o:["Mirabegron was superior to solifenacin","Non-inferiority to solifenacin was not demonstrated","Mirabegron was inferior to placebo","The trial was stopped early for harm"], c:1, e:"The lower CI limit (−0.42) crossed the −0.20 margin, so non-inferiority was not shown, although both drugs improved symptoms."},
{ q:"In TAURUS, dry mouth with mirabegron 50 mg versus tolterodine ER 4 mg was:", o:["2.8% vs 8.6%","8.6% vs 2.8%","Equal at 5%","Not reported"], c:0, e:"TAURUS: 2.8% with M50, 2.3% with M100, 8.6% with tolterodine over 12 months."},
{ q:"What did BESIDE test?", o:["Mirabegron vs placebo in men","Adding mirabegron to solifenacin 5 mg in patients still incontinent","Mirabegron in children","12-month safety vs tolterodine"], c:1, e:"BESIDE randomised patients still incontinent after 4 weeks of solifenacin 5 mg to combination, solifenacin 5 mg or solifenacin 10 mg."}
],
src:"Khullar V, Eur Urol 2013; Nitti VW, J Urol 2013; Herschorn S, Urology 2013; Nitti VW, Int J Clin Pract 2013 & 2014; Chapple CR, Eur Urol 2013; Yamaguchi O, BJU Int 2014; Kuo HC, Neurourol Urodyn 2015; Batista JE, Ther Adv Urol 2015; Drake MJ, Eur Urol 2016; Herschorn S, BJU Int 2017; Gratzke C, Eur Urol 2018; Baka-Ostrowska M, Neurourol Urodyn 2021; Wagg A / Herschorn S, Drugs Aging 2020 (PILLAR); Tubaro A, Ther Adv Urol 2017; NICE TA290."},

/* ---------- 10 SAFETY ---------- */
{ id:"safety", part:"Part C · Mirabegron", title:"Safety & tolerability",
intro:`<div class="eyebrow">Module 10 · Safety</div>
<h2>Mirabegron safety profile</h2>
<div class="tblwrap"><table><tr><th>Topic</th><th>What the data show</th></tr>
<tr><td>Most common TEAEs</td><td>Hypertension, nasopharyngitis, urinary tract infection; also headache, tachycardia</td></tr>
<tr><td>Dry mouth</td><td>Placebo-like; ~1/3 to 1/5 of tolterodine rates (SCORPIO, TAURUS, pooled)</td></tr>
<tr><td>Blood pressure</td><td>Pooled 12-week: +0.4–0.6 mmHg vs placebo; TAURUS morning SBP +0.2 mmHg at 12 months</td></tr>
<tr><td>Pulse</td><td>≈+1 bpm vs placebo, reversible</td></tr>
<tr><td>Cardiovascular events</td><td>Adjudicated MACE low and similar to placebo and tolterodine</td></tr>
<tr><td>Urinary retention</td><td>Rare; caution with bladder outlet obstruction or concurrent antimuscarinics</td></tr>
<tr><td>Older adults</td><td>PILLAR (≥65 y): well tolerated; TEAEs early and not dose-related; no adverse cognitive signal</td></tr></table></div>
<div class="keybox"><strong>Key takeaways</strong><ul><li>Measure blood pressure before starting and periodically.</li><li>Contraindicated in severe uncontrolled hypertension (EU).</li><li>Watch CYP2D6 substrates with a narrow therapeutic index.</li></ul></div>`,
qa:[
{ id:"sf-bp", q:"How should blood pressure concerns be handled?", keys:"blood pressure hypertension bp cardiovascular heart",
a:`<h3>Blood pressure in practice</h3><ul><li>Average changes in trials were small (&lt;1 mmHg vs placebo) and reversible.</li><li>Hypertension was nevertheless one of the most reported AEs, partly because of high baseline prevalence in the OAB population (7.7% with placebo in SCORPIO).</li><li>Check BP at baseline and periodically, especially in people with hypertension.</li><li>Do not use in severe uncontrolled hypertension (SBP ≥180 and/or DBP ≥110 mmHg).</li></ul>`},
{ id:"sf-elderly", q:"Is mirabegron suitable for older patients?", keys:"elderly older cognitive dementia frail pillar",
a:`<h3>Older adults</h3><p>PILLAR was the first study designed specifically for people ≥65 with OAB-wet: flexible-dose mirabegron beat placebo on both co-primary endpoints and was well tolerated. Because mirabegron has no anticholinergic activity, it does not add to anticholinergic burden, which aligns with the EAU call to assess that burden before antimuscarinics. Observational data link cumulative anticholinergic exposure with dementia risk, but these studies cannot prove causation.</p>`},
{ id:"sf-combo", q:"Is combination with solifenacin safe?", keys:"combination safety solifenacin retention pvr",
a:`<h3>Combination safety</h3><p>Across SYNERGY, SYNERGY II and BESIDE, combination therapy had a slightly higher TEAE rate than either monotherapy (e.g. 49% vs 44% vs 41% over 12 months in SYNERGY II), with more dry mouth and constipation and slightly more retention-related events. Most events were mild or moderate. Monitor emptying in at-risk patients.</p>`}
],
quiz:[
{ q:"In the pooled 12-week analysis, the placebo-adjusted BP increase with mirabegron 50 mg was approximately:", o:["0.4–0.6 mmHg","5–6 mmHg","10 mmHg","No change at all"], c:0, e:"Pooled data show mean increases of 0.4–0.6 mmHg vs placebo, reversible on stopping."},
{ q:"In which situation is mirabegron contraindicated in the EU?", o:["Controlled hypertension on one drug","Severe uncontrolled hypertension (≥180/110 mmHg)","Age over 75","Mild renal impairment"], c:1, e:"The EU SmPC contraindicates mirabegron in severe uncontrolled hypertension."}
],
src:"Nitti VW et al. Int J Clin Pract 2014; Chapple CR et al. Eur Urol 2013; Herschorn S et al. Drugs Aging 2020; Gratzke C et al. Eur Urol 2018; Betmiga EU SmPC."},

/* ---------- 11 FINAL ---------- */
{ id:"assessment", part:"Assessment", title:"Final knowledge check",
intro:`<div class="eyebrow">Module 11 · Final assessment</div>
<h2>Test yourself across all modules</h2>
<p>Work through the quick checks below. Each one draws on a different module. Your score appears in the side panel.</p>
<div class="keybox"><strong>Before you start</strong><ul><li>Aim for at least 80%.</li><li>Missed a question? The explanation tells you which module to revisit.</li></ul></div>`,
qa:[],
quiz:[
{ q:"Which EAU recommendation is rated Strong?", o:["Offer mirabegron add-on after solifenacin 5 mg","Offer β3-agonists after failed conservative management","Offer augmentation cystoplasty","Consider acupuncture"], c:1, e:"Module 7: β3-agonists after conservative failure is Strong; the others listed are Weak."},
{ q:"Which co-primary endpoints were used in SCORPIO, ARIES and CAPRICORN?", o:["Urgency episodes and nocturia","Incontinence episodes/24 h and micturitions/24 h","Volume voided and OAB-q","PVR and Qmax"], c:1, e:"Module 9: all three pivotal trials used incontinence episodes and micturitions per 24 h."},
{ q:"Which mirabegron trial enrolled children?", o:["PILLAR","BEYOND","NCT02751931 (paediatric NDO)","SYNERGY II"], c:2, e:"Module 9: the open-label phase 3 study NCT02751931 enrolled children 3–<18 with NDO."},
{ q:"A man with storage LUTS has persistent urgency on tamsulosin. What does EAU suggest?", o:["Stop all treatment","Add mirabegron (Weak)","Urodynamics before any change","Add desmopressin"], c:1, e:"Module 7: EAU male LUTS suggests adding mirabegron to an α1-blocker for persistent storage LUTS (Weak)."},
{ q:"Which patient would most benefit from avoiding anticholinergic burden?", o:["A 35-year-old athlete","An 80-year-old with mild cognitive impairment","A 45-year-old with OAB-dry","A 50-year-old with controlled hypertension"], c:1, e:"Modules 5 and 10: EAU advises caution with long-term anticholinergics in older people with cognitive dysfunction."},
{ q:"What is the terminal half-life of mirabegron?", o:["≈5 h","≈12 h","≈50 h","≈7 days"], c:2, e:"Module 8: about 50 hours, supporting once-daily dosing."}
],
src:"Content of Modules 1–10."}
];
