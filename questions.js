var questionBank = [
  {
    "id": 1,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "A company requires managers to approve all requests for privileged access before the accounts are created. Which classification BEST describes this requirement?",
    "options": [
      "Managerial preventive control",
      "Technical detective control",
      "Operational corrective control",
      "Physical deterrent control"
    ],
    "correctIndex": 0,
    "explanation": "Management approval is a managerial control, and it prevents unauthorized privileged access before it is granted."
  },
  {
    "id": 2,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "Security guards review visitor badges at the entrance to a data center. Which pair BEST classifies the control?",
    "options": [
      "Physical and preventive",
      "Technical and corrective",
      "Managerial and detective",
      "Operational and compensating"
    ],
    "correctIndex": 0,
    "explanation": "Guards are a physical control and checking badges is intended to prevent unauthorized entry."
  },
  {
    "id": 3,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "A SIEM generates an alert when an administrator adds a user to the domain administrators group. Which control function is being performed?",
    "options": [
      "Detective",
      "Corrective",
      "Directive",
      "Compensating"
    ],
    "correctIndex": 0,
    "explanation": "The SIEM is detecting and reporting a potentially risky change after or as it occurs."
  },
  {
    "id": 4,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "An organization cannot deploy multifactor authentication to a legacy application, so it restricts access to a hardened jump server and increases session monitoring. What type of controls are these?",
    "options": [
      "Compensating controls",
      "Directive controls",
      "Deterrent controls",
      "Recovery controls"
    ],
    "correctIndex": 0,
    "explanation": "The jump server and additional monitoring compensate for the unavailable primary control."
  },
  {
    "id": 5,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "A policy states that employees must lock their screens whenever they leave their desks. What type of control is the policy itself?",
    "options": [
      "Directive managerial control",
      "Detective technical control",
      "Corrective physical control",
      "Preventive operational control"
    ],
    "correctIndex": 0,
    "explanation": "The policy directs expected behavior and is established through management."
  },
  {
    "id": 6,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "A warning banner states that all activity on a corporate system is monitored and unauthorized use may be prosecuted. What control function is MOST directly intended?",
    "options": [
      "Deterrent",
      "Corrective",
      "Recovery",
      "Compensating"
    ],
    "correctIndex": 0,
    "explanation": "The warning is intended to discourage prohibited behavior before it occurs."
  },
  {
    "id": 7,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "After ransomware damages a file server, administrators restore the affected data from a known-good backup. Which control function is demonstrated?",
    "options": [
      "Corrective",
      "Detective",
      "Directive",
      "Deterrent"
    ],
    "correctIndex": 0,
    "explanation": "Restoring from backup corrects damage and returns the system to an operational state."
  },
  {
    "id": 8,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "A host-based intrusion prevention system blocks a process from modifying protected operating system files. How should the control be classified?",
    "options": [
      "Technical preventive control",
      "Managerial detective control",
      "Operational corrective control",
      "Physical compensating control"
    ],
    "correctIndex": 0,
    "explanation": "The host control is technical and actively prevents an unauthorized action."
  },
  {
    "id": 9,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "Quarterly access reviews are performed by system owners to identify accounts that no longer require access. Which classification is MOST accurate?",
    "options": [
      "Operational detective control",
      "Physical preventive control",
      "Technical corrective control",
      "Managerial deterrent control"
    ],
    "correctIndex": 0,
    "explanation": "The recurring review is an operational process used to detect inappropriate or stale access."
  },
  {
    "id": 10,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "A locked equipment rack protects network switches from tampering. Which type of control is this?",
    "options": [
      "Physical preventive",
      "Managerial corrective",
      "Technical detective",
      "Operational directive"
    ],
    "correctIndex": 0,
    "explanation": "The lock is a physical barrier that prevents unauthorized access to equipment."
  },
  {
    "id": 11,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "A security team deploys a file-integrity monitor that reports unexpected changes but does not block them. Which function does the control provide?",
    "options": [
      "Detective",
      "Preventive",
      "Corrective",
      "Directive"
    ],
    "correctIndex": 0,
    "explanation": "The tool identifies changes and alerts personnel, so its primary function is detective."
  },
  {
    "id": 12,
    "domain": "1.0 General Security Concepts",
    "objective": "1.1 Security Controls",
    "question": "A company requires two employees to be present whenever cryptographic recovery keys are retrieved from a vault. Which control concept is MOST directly supported?",
    "options": [
      "Dual control",
      "Open design",
      "Implicit trust",
      "Fail-open operation"
    ],
    "correctIndex": 0,
    "explanation": "Dual control requires two authorized people to complete a sensitive action."
  },
  {
    "id": 13,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A digital evidence repository must prevent investigators from altering files after upload. Which security objective is the PRIMARY concern?",
    "options": [
      "Integrity",
      "Availability",
      "Confidentiality",
      "Obfuscation"
    ],
    "correctIndex": 0,
    "explanation": "Integrity protects data from unauthorized or undetected modification."
  },
  {
    "id": 14,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A hospital deploys redundant network links so clinicians can reach patient records during an ISP outage. Which part of the CIA triad is improved?",
    "options": [
      "Availability",
      "Confidentiality",
      "Integrity",
      "Non-repudiation"
    ],
    "correctIndex": 0,
    "explanation": "Redundant connectivity keeps systems and data accessible during a failure."
  },
  {
    "id": 15,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A database administrator encrypts salary records so only authorized HR personnel can read them. Which security objective is MOST directly supported?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Accounting"
    ],
    "correctIndex": 0,
    "explanation": "Encryption restricts disclosure of sensitive information to authorized users."
  },
  {
    "id": 16,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A procurement system must provide evidence that an executive approved a purchase order and cannot later deny the approval. Which mechanism BEST supports this requirement?",
    "options": [
      "Digital signature",
      "Full-disk encryption",
      "Data masking",
      "Load balancing"
    ],
    "correctIndex": 0,
    "explanation": "A protected digital signature provides integrity, signer authentication, and non-repudiation."
  },
  {
    "id": 17,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A user presents a smart card and PIN before connecting to a VPN. Which AAA function occurs FIRST?",
    "options": [
      "Authentication",
      "Authorization",
      "Accounting",
      "Attestation"
    ],
    "correctIndex": 0,
    "explanation": "Authentication establishes the user's identity before permissions are evaluated."
  },
  {
    "id": 18,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "After a user signs in, the application checks whether the user belongs to the payroll-readers group. Which AAA function is this?",
    "options": [
      "Authorization",
      "Authentication",
      "Accounting",
      "Federation"
    ],
    "correctIndex": 0,
    "explanation": "Authorization determines what an authenticated identity is permitted to access."
  },
  {
    "id": 19,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A RADIUS server records connection start time, duration, and bytes transferred for each remote-access session. Which AAA function is demonstrated?",
    "options": [
      "Accounting",
      "Authorization",
      "Authentication",
      "Availability"
    ],
    "correctIndex": 0,
    "explanation": "Accounting records activity for auditing, billing, and investigation."
  },
  {
    "id": 20,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A security manager compares the current environment with a required NIST control baseline and documents missing safeguards. What is the manager performing?",
    "options": [
      "Gap analysis",
      "Threat hunting",
      "Root-cause analysis",
      "Business impact analysis"
    ],
    "correctIndex": 0,
    "explanation": "Gap analysis identifies differences between the current and desired security states."
  },
  {
    "id": 21,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A remote employee is connected through the corporate VPN, but access to each application is still evaluated using identity, device health, and risk. Which principle is being applied?",
    "options": [
      "Never trust, always verify",
      "Trust internal networks by default",
      "Implicit allow",
      "Security through obscurity"
    ],
    "correctIndex": 0,
    "explanation": "Zero trust does not grant broad trust based only on network location."
  },
  {
    "id": 22,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "In a zero-trust architecture, which component makes access decisions using identity, device posture, and policy inputs?",
    "options": [
      "Policy engine",
      "Policy enforcement point",
      "Data plane",
      "Load balancer"
    ],
    "correctIndex": 0,
    "explanation": "The policy engine evaluates inputs and determines whether access should be allowed."
  },
  {
    "id": 23,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "Which zero-trust component establishes or terminates a connection based on a decision from the policy administrator?",
    "options": [
      "Policy enforcement point",
      "Policy engine",
      "Certificate authority",
      "Data owner"
    ],
    "correctIndex": 0,
    "explanation": "The policy enforcement point applies the access decision to the actual connection."
  },
  {
    "id": 24,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A help-desk technician receives permission to reset user passwords but cannot create domain administrators. Which principle is demonstrated?",
    "options": [
      "Least privilege",
      "Transitive trust",
      "Fail open",
      "Job rotation"
    ],
    "correctIndex": 0,
    "explanation": "Least privilege grants only the permissions required to perform assigned duties."
  },
  {
    "id": 25,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A developer can submit code, but a separate release manager must approve deployment to production. Which concept is MOST directly demonstrated?",
    "options": [
      "Separation of duties",
      "Single sign-on",
      "Data minimization",
      "Implicit deny"
    ],
    "correctIndex": 0,
    "explanation": "Separating development and deployment approval reduces fraud and error."
  },
  {
    "id": 26,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A company installs vehicle barriers around the main entrance to reduce the risk of a truck striking the building. What physical control was installed?",
    "options": [
      "Bollards",
      "Mantraps",
      "Faraday cages",
      "Air gaps"
    ],
    "correctIndex": 0,
    "explanation": "Bollards are barriers designed to stop or redirect vehicles."
  },
  {
    "id": 27,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A secure entry area allows only one person through the first door before the second door opens. Which physical security control is this?",
    "options": [
      "Access control vestibule",
      "Honeynet",
      "Hot aisle",
      "Screened subnet"
    ],
    "correctIndex": 0,
    "explanation": "An access control vestibule, often called a mantrap, controls passage between two doors."
  },
  {
    "id": 28,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A security team places fake administrator credentials in a source-code repository and alerts if those credentials are ever used. What is this BEST described as?",
    "options": [
      "Honeytoken",
      "Honeynet",
      "Sandbox",
      "Digital watermark"
    ],
    "correctIndex": 0,
    "explanation": "A honeytoken is decoy data or a credential designed to trigger detection when used."
  },
  {
    "id": 29,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "Several decoy systems are connected to resemble a small production environment so attacker behavior can be observed. What has been deployed?",
    "options": [
      "Honeynet",
      "Jump server",
      "Screened subnet",
      "Content delivery network"
    ],
    "correctIndex": 0,
    "explanation": "A honeynet is a network of decoy systems used for detection and research."
  },
  {
    "id": 30,
    "domain": "1.0 General Security Concepts",
    "objective": "1.2 Security Concepts",
    "question": "A defensive system returns believable but false records to a process suspected of scraping sensitive data. Which goal does this technique serve?",
    "options": [
      "Deception",
      "Availability",
      "Key escrow",
      "Data deduplication"
    ],
    "correctIndex": 0,
    "explanation": "Deception provides misleading information to expose or slow malicious activity."
  },
  {
    "id": 31,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "A network engineer proposes a firewall rule change that could interrupt customer traffic. What should occur BEFORE the change is implemented?",
    "options": [
      "Risk and impact analysis",
      "Deletion of the previous configuration",
      "Immediate production deployment",
      "Removal of the rollback plan"
    ],
    "correctIndex": 0,
    "explanation": "Change management requires evaluating business and technical impact before implementation."
  },
  {
    "id": 32,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "Which item is MOST important for restoring service if a software upgrade causes unexpected failures?",
    "options": [
      "Rollback plan",
      "Risk acceptance memo",
      "Asset label",
      "Data classification matrix"
    ],
    "correctIndex": 0,
    "explanation": "A rollback plan defines how to return to the last known-good state."
  },
  {
    "id": 33,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "A routine operating system update has been tested, preapproved, and follows a documented repeatable process. How is this change BEST classified?",
    "options": [
      "Standard change",
      "Emergency change",
      "Unauthorized change",
      "Material breach"
    ],
    "correctIndex": 0,
    "explanation": "Standard changes are low-risk, repeatable, documented, and preapproved."
  },
  {
    "id": 34,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "A critical zero-day is being actively exploited, and the vendor has released an emergency patch. Which change process is MOST appropriate?",
    "options": [
      "Emergency change with expedited approval and documentation",
      "Wait for the next annual maintenance cycle",
      "Bypass all testing and recordkeeping",
      "Treat the patch as an asset-disposal event"
    ],
    "correctIndex": 0,
    "explanation": "Emergency changes use expedited controls but still require authorization, testing when feasible, and documentation."
  },
  {
    "id": 35,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "Why should application owners and business stakeholders review a major database change?",
    "options": [
      "They can identify business impact and dependencies",
      "They replace the need for technical testing",
      "They can waive all security requirements",
      "They determine certificate key length"
    ],
    "correctIndex": 0,
    "explanation": "Stakeholders understand business processes, dependencies, and acceptable outage risk."
  },
  {
    "id": 36,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "A team deploys a configuration change to a small group of systems before expanding it enterprise-wide. What approach is being used?",
    "options": [
      "Pilot deployment",
      "Fail-open design",
      "Data masking",
      "Key rotation"
    ],
    "correctIndex": 0,
    "explanation": "A pilot limits exposure while validating the change in a representative environment."
  },
  {
    "id": 37,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "Which artifact provides the BEST evidence of who changed a configuration, what was changed, and when?",
    "options": [
      "Version-control history",
      "User awareness poster",
      "Data retention schedule",
      "Business partnership agreement"
    ],
    "correctIndex": 0,
    "explanation": "Version-control history provides traceability for configuration changes."
  },
  {
    "id": 38,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "An administrator modifies a production router without an approved ticket, causing an outage. Which process failure MOST directly occurred?",
    "options": [
      "Unauthorized change",
      "Data minimization failure",
      "Certificate revocation failure",
      "Vendor due diligence failure"
    ],
    "correctIndex": 0,
    "explanation": "The administrator bypassed the required change authorization process."
  },
  {
    "id": 39,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "What is the PRIMARY reason to define a maintenance window for a disruptive infrastructure change?",
    "options": [
      "To reduce business impact and coordinate support",
      "To guarantee the change cannot fail",
      "To remove the need for backups",
      "To avoid documenting the change"
    ],
    "correctIndex": 0,
    "explanation": "Maintenance windows place disruptive work at an approved time when impact and support can be managed."
  },
  {
    "id": 40,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "A change advisory board asks whether a proposed authentication update will break a legacy application. Which change-management activity addresses this concern?",
    "options": [
      "Dependency analysis",
      "Media sanitization",
      "Threat attribution",
      "Data tokenization"
    ],
    "correctIndex": 0,
    "explanation": "Dependency analysis identifies systems and processes that may be affected by the change."
  },
  {
    "id": 41,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "After a successful production change, which action BEST supports future troubleshooting and audits?",
    "options": [
      "Update diagrams, baselines, and procedures",
      "Delete test results",
      "Disable change logging",
      "Remove the previous ticket"
    ],
    "correctIndex": 0,
    "explanation": "Documentation should reflect the implemented state so operations and audits remain accurate."
  },
  {
    "id": 42,
    "domain": "1.0 General Security Concepts",
    "objective": "1.3 Change Management",
    "question": "A security engineer notices that a deployed firewall rule differs from the approved request. What should the engineer do FIRST?",
    "options": [
      "Stop or roll back the change according to procedure",
      "Ignore the difference if traffic is flowing",
      "Delete the audit logs",
      "Create a shared administrator account"
    ],
    "correctIndex": 0,
    "explanation": "A change that does not match the approved scope should be halted or rolled back to limit risk."
  },
  {
    "id": 43,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A company needs to encrypt a large backup file as efficiently as possible. Which approach is MOST appropriate?",
    "options": [
      "Symmetric encryption",
      "Asymmetric encryption for the entire file",
      "Hashing only",
      "Digital signing only"
    ],
    "correctIndex": 0,
    "explanation": "Symmetric encryption is efficient for protecting large amounts of data."
  },
  {
    "id": 44,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "Two parties need to establish a shared secret over an untrusted network without previously sharing a key. Which mechanism BEST addresses this need?",
    "options": [
      "Diffie-Hellman key exchange",
      "SHA-256 hashing",
      "Data masking",
      "RAID mirroring"
    ],
    "correctIndex": 0,
    "explanation": "Diffie-Hellman allows parties to derive a shared secret over an insecure channel."
  },
  {
    "id": 45,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A software vendor publishes a SHA-256 value beside a download. What can a user verify with the value?",
    "options": [
      "File integrity",
      "File confidentiality",
      "User authorization",
      "Service availability"
    ],
    "correctIndex": 0,
    "explanation": "A matching cryptographic hash indicates that the file has not changed."
  },
  {
    "id": 46,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "Which method is BEST for storing user passwords?",
    "options": [
      "Unique salts with a slow adaptive hash",
      "Reversible encryption with a shared key",
      "Base64 encoding",
      "Unsalted MD5"
    ],
    "correctIndex": 0,
    "explanation": "Salts and slow adaptive hashing resist precomputed and high-speed password attacks."
  },
  {
    "id": 47,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "Which key does a sender use to create a digital signature?",
    "options": [
      "The sender's private key",
      "The sender's public key",
      "The recipient's private key",
      "The certificate authority's public key"
    ],
    "correctIndex": 0,
    "explanation": "A signer creates a signature with the signer's private key."
  },
  {
    "id": 48,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "Which key is used to verify a digital signature created by a business partner?",
    "options": [
      "The partner's public key",
      "The partner's private key",
      "The verifier's private key",
      "A shared symmetric key"
    ],
    "correctIndex": 0,
    "explanation": "The signer's public key verifies a signature created with the corresponding private key."
  },
  {
    "id": 49,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "Which PKI role validates an applicant's identity before a certificate is issued?",
    "options": [
      "Registration authority",
      "Certificate revocation list",
      "Key escrow agent",
      "OCSP responder"
    ],
    "correctIndex": 0,
    "explanation": "A registration authority verifies identity and approves certificate requests for a certificate authority."
  },
  {
    "id": 50,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A browser needs to determine whether a website certificate was revoked recently. Which service provides a near-real-time status response?",
    "options": [
      "OCSP",
      "CSR",
      "HSTS",
      "SPF"
    ],
    "correctIndex": 0,
    "explanation": "The Online Certificate Status Protocol provides certificate revocation status without downloading a full list."
  },
  {
    "id": 51,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "What is contained in a certificate signing request?",
    "options": [
      "The applicant's public key and identifying information",
      "The applicant's private key in plaintext",
      "A list of all revoked certificates",
      "The certificate authority's root private key"
    ],
    "correctIndex": 0,
    "explanation": "A CSR contains the public key and identity information to be signed; the private key remains protected."
  },
  {
    "id": 52,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A browser accepts a server certificate because it can build a valid chain to a trusted root. What is the browser validating?",
    "options": [
      "Certificate path",
      "Password history",
      "Data residency",
      "Network segmentation"
    ],
    "correctIndex": 0,
    "explanation": "Path validation confirms a chain of signatures from the leaf certificate to a trusted root."
  },
  {
    "id": 53,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A web server certificate expires tonight. Which action should be completed BEFORE expiration?",
    "options": [
      "Renew and install the replacement certificate",
      "Publish the server's private key",
      "Disable TLS permanently",
      "Add the certificate to a CRL"
    ],
    "correctIndex": 0,
    "explanation": "The certificate should be renewed and replaced before clients reject it as expired."
  },
  {
    "id": 54,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "Which device is specifically designed to generate, protect, and use high-value cryptographic keys in tamper-resistant hardware?",
    "options": [
      "HSM",
      "Load balancer",
      "NAC appliance",
      "Web proxy"
    ],
    "correctIndex": 0,
    "explanation": "A hardware security module protects cryptographic keys and performs cryptographic operations."
  },
  {
    "id": 55,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A company changes database encryption keys on a scheduled basis and immediately after suspected exposure. What practice is this?",
    "options": [
      "Key rotation",
      "Key stretching",
      "Data deduplication",
      "Certificate pinning"
    ],
    "correctIndex": 0,
    "explanation": "Key rotation limits the period and amount of data exposed by a single key."
  },
  {
    "id": 56,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A laptop must remain protected if its drive is removed and connected to another computer. Which control BEST meets the requirement?",
    "options": [
      "Full-disk encryption",
      "Screen lock",
      "Host-based firewall",
      "Application allow list"
    ],
    "correctIndex": 0,
    "explanation": "Full-disk encryption protects data at rest even if the storage device is removed."
  },
  {
    "id": 57,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A software developer renames variables and restructures code to make reverse engineering more difficult without changing program behavior. What technique is being used?",
    "options": [
      "Obfuscation",
      "Tokenization",
      "Hash collision",
      "Key escrow"
    ],
    "correctIndex": 0,
    "explanation": "Obfuscation makes code harder to understand while preserving its function."
  },
  {
    "id": 58,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A malicious user hides an encrypted message inside the least significant bits of an image. Which technique is being used?",
    "options": [
      "Steganography",
      "Salting",
      "Key stretching",
      "Data masking"
    ],
    "correctIndex": 0,
    "explanation": "Steganography conceals the existence of data inside another medium."
  },
  {
    "id": 59,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "Why does changing an old blockchain record typically invalidate later blocks?",
    "options": [
      "Each block includes a hash related to the previous block",
      "Every block uses the same password",
      "Blockchains use only symmetric encryption",
      "All records are stored in volatile memory"
    ],
    "correctIndex": 0,
    "explanation": "Chained hashes make later blocks dependent on the integrity of earlier blocks."
  },
  {
    "id": 60,
    "domain": "1.0 General Security Concepts",
    "objective": "1.4 Cryptographic Solutions",
    "question": "A sender wants only the recipient to read a message and also wants the recipient to verify who sent it. Which approach BEST meets both goals?",
    "options": [
      "Encrypt with the recipient's public key and sign with the sender's private key",
      "Encrypt with the sender's public key and sign with the recipient's private key",
      "Hash the message without a key",
      "Encrypt and sign with the recipient's public key"
    ],
    "correctIndex": 0,
    "explanation": "The recipient's public key provides confidentiality, while the sender's private key provides signature verification."
  },
  {
    "id": 61,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A highly resourced group conducts a multiyear campaign to steal military research and maintains access with custom malware. Which threat actor is MOST likely responsible?",
    "options": [
      "Nation-state",
      "Unskilled attacker",
      "Hacktivist",
      "Shadow IT user"
    ],
    "correctIndex": 0,
    "explanation": "Nation-state actors commonly have substantial resources, persistence, and espionage objectives."
  },
  {
    "id": 62,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A criminal group deploys ransomware against hospitals and demands cryptocurrency. What is the MOST likely primary motivation?",
    "options": [
      "Financial gain",
      "Ideological protest",
      "Academic research",
      "Service improvement"
    ],
    "correctIndex": 0,
    "explanation": "Organized cybercrime commonly uses ransomware for financial gain."
  },
  {
    "id": 63,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "An attacker defaces a government website to promote a political cause. Which threat actor category BEST fits?",
    "options": [
      "Hacktivist",
      "Competitor",
      "Insider",
      "Nation-state contractor"
    ],
    "correctIndex": 0,
    "explanation": "Hacktivists are typically motivated by political or social ideology."
  },
  {
    "id": 64,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A departing employee copies customer records using access that is still valid. Which actor type is demonstrated?",
    "options": [
      "Malicious insider",
      "Unskilled external attacker",
      "Hacktivist",
      "Third-party auditor"
    ],
    "correctIndex": 0,
    "explanation": "An insider misuses authorized access and organizational knowledge."
  },
  {
    "id": 65,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A business unit begins using an unapproved cloud storage service without informing IT. Which threat source does this represent?",
    "options": [
      "Shadow IT",
      "Nation-state espionage",
      "Authorized penetration testing",
      "Hacktivism"
    ],
    "correctIndex": 0,
    "explanation": "Shadow IT consists of technology adopted outside approved IT governance."
  },
  {
    "id": 66,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A teenager downloads a public exploit tool and attacks random internet hosts without understanding the underlying vulnerability. Which actor type BEST applies?",
    "options": [
      "Unskilled attacker",
      "Organized crime",
      "Nation-state",
      "Insider threat"
    ],
    "correctIndex": 0,
    "explanation": "Unskilled attackers often rely on publicly available tools with limited technical understanding."
  },
  {
    "id": 67,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A competitor hires a contractor to obtain a rival company's product plans. What is the MOST likely motivation?",
    "options": [
      "Economic espionage",
      "Service availability",
      "Regulatory compliance",
      "Public safety"
    ],
    "correctIndex": 0,
    "explanation": "Stealing proprietary plans for competitive advantage is economic espionage."
  },
  {
    "id": 68,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "An employee accidentally uploads a confidential document to a public repository. How should this threat actor be classified?",
    "options": [
      "Unintentional insider",
      "Organized crime",
      "Hacktivist",
      "Nation-state"
    ],
    "correctIndex": 0,
    "explanation": "Insider threats can be negligent or accidental, not only malicious."
  },
  {
    "id": 69,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A group compromises a utility during an international conflict to disrupt power delivery. Which motivation is MOST likely?",
    "options": [
      "War or geopolitical disruption",
      "Personal curiosity",
      "Training compliance",
      "Bug bounty participation"
    ],
    "correctIndex": 0,
    "explanation": "Disrupting critical infrastructure during conflict aligns with geopolitical or warfare objectives."
  },
  {
    "id": 70,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A system administrator creates a backdoor because the administrator fears being terminated and wants future access. Which motivation BEST fits?",
    "options": [
      "Revenge or personal grievance",
      "Financial investment",
      "Regulatory audit",
      "Ethical disclosure"
    ],
    "correctIndex": 0,
    "explanation": "A disgruntled insider may create persistence for retaliation or revenge."
  },
  {
    "id": 71,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A criminal purchases stolen credentials and uses them to conduct fraudulent purchases at scale. Which actor category is MOST likely?",
    "options": [
      "Organized crime",
      "Security researcher",
      "Auditor",
      "Hacktivist"
    ],
    "correctIndex": 0,
    "explanation": "Organized criminal groups monetize stolen access through fraud and resale."
  },
  {
    "id": 72,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A vendor technician with legitimate remote access installs unauthorized cryptocurrency-mining software on customer servers. Which threat type is this?",
    "options": [
      "Third-party insider threat",
      "Nation-state attack",
      "Hacktivist campaign",
      "Unskilled scanning"
    ],
    "correctIndex": 0,
    "explanation": "The technician is a trusted third party who misuses authorized access."
  },
  {
    "id": 73,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A researcher discovers a vulnerability and privately reports it to the vendor under a coordinated disclosure policy. How should the researcher be classified?",
    "options": [
      "Authorized security researcher",
      "Malicious insider",
      "Organized criminal",
      "Hacktivist"
    ],
    "correctIndex": 0,
    "explanation": "Coordinated disclosure through an authorized process is legitimate security research."
  },
  {
    "id": 74,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A group steals diplomatic communications but does not attempt to sell them or disrupt systems. Which objective is MOST consistent with the activity?",
    "options": [
      "Espionage",
      "Extortion",
      "Availability",
      "Advertising"
    ],
    "correctIndex": 0,
    "explanation": "Secretly collecting diplomatic information is espionage."
  },
  {
    "id": 75,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "A former contractor retains cloud access because offboarding was incomplete and later downloads project files. Which factor MOST increased the threat?",
    "options": [
      "Residual third-party access",
      "Certificate transparency",
      "Data deduplication",
      "Network address translation"
    ],
    "correctIndex": 0,
    "explanation": "Failure to remove third-party access created an exploitable insider-like condition."
  },
  {
    "id": 76,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.1 Threat Actors",
    "question": "An attacker steals data and threatens to publish it unless the victim pays. Which motivation is MOST directly demonstrated?",
    "options": [
      "Extortion",
      "Ideology",
      "Academic recognition",
      "System resilience"
    ],
    "correctIndex": 0,
    "explanation": "Threatening disclosure to force payment is extortion."
  },
  {
    "id": 77,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "An employee receives a text message claiming the employee's payroll account is locked and providing a login link. Which attack vector is being used?",
    "options": [
      "Smishing",
      "Vishing",
      "Tailgating",
      "Watering-hole attack"
    ],
    "correctIndex": 0,
    "explanation": "Smishing is phishing delivered through SMS or similar text messaging."
  },
  {
    "id": 78,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "A caller impersonates the help desk and asks a user to read a one-time passcode aloud. Which social-engineering method is this?",
    "options": [
      "Vishing",
      "Smishing",
      "Pharming",
      "Typosquatting"
    ],
    "correctIndex": 0,
    "explanation": "Vishing uses voice calls to manipulate victims into revealing information or taking action."
  },
  {
    "id": 79,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "A senior executive receives a highly tailored email requesting an urgent confidential wire transfer. Which attack type BEST describes this?",
    "options": [
      "Whaling",
      "Generic spam",
      "Bluejacking",
      "Wardriving"
    ],
    "correctIndex": 0,
    "explanation": "Whaling is targeted phishing aimed at senior executives or other high-value individuals."
  },
  {
    "id": 80,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "A poster in an office lobby contains a malicious QR code that directs users to a fake Microsoft 365 login page. Which vector is being used?",
    "options": [
      "QR-code phishing",
      "DNSSEC",
      "Pass-the-hash",
      "MAC flooding"
    ],
    "correctIndex": 0,
    "explanation": "The attacker uses a QR code to deliver a phishing destination, often called quishing."
  },
  {
    "id": 81,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "A resume document emailed to recruiting prompts the user to enable macros and then downloads malware. Which vector initiated the compromise?",
    "options": [
      "Malicious file",
      "Unsecured wireless network",
      "Voice call",
      "Removable media only"
    ],
    "correctIndex": 0,
    "explanation": "The malicious document is a file-based attack vector."
  },
  {
    "id": 82,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "An attacker leaves infected USB drives labeled 'Payroll 2026' in a company parking lot. Which technique is being used?",
    "options": [
      "Baiting",
      "Shoulder surfing",
      "Pharming",
      "Credential stuffing"
    ],
    "correctIndex": 0,
    "explanation": "Baiting uses an attractive item or promise to entice a victim into taking an unsafe action."
  },
  {
    "id": 83,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "A traveler connects to an open airport Wi-Fi network and an attacker intercepts unencrypted traffic. Which attack surface created the exposure?",
    "options": [
      "Unsecured wireless network",
      "Hardened jump server",
      "Air-gapped network",
      "Private VLAN"
    ],
    "correctIndex": 0,
    "explanation": "Open wireless networks create an attack surface for interception and impersonation."
  },
  {
    "id": 84,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "A trusted software library is modified upstream, and the malicious version is later incorporated into many customer applications. Which vector is this?",
    "options": [
      "Software supply chain",
      "Shoulder surfing",
      "Physical tailgating",
      "Password spraying"
    ],
    "correctIndex": 0,
    "explanation": "Compromising a dependency before it reaches downstream users is a software supply-chain attack."
  },
  {
    "id": 85,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "Attackers compromise a managed service provider and use its remote-management tool to access multiple customers. Which vector BEST describes the initial path into the customers?",
    "options": [
      "Third-party access",
      "Local removable media",
      "Direct physical intrusion",
      "Certificate pinning"
    ],
    "correctIndex": 0,
    "explanation": "Trusted third-party access can become a pathway into customer environments."
  },
  {
    "id": 86,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "An attacker invents a believable story about being a new employee who urgently needs a password reset. Which technique is this?",
    "options": [
      "Pretexting",
      "Salting",
      "Tokenization",
      "Jamming"
    ],
    "correctIndex": 0,
    "explanation": "Pretexting uses a fabricated scenario to persuade a victim to disclose information or perform an action."
  },
  {
    "id": 87,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "An attacker follows an employee through a secure door without presenting a badge. Which technique is this?",
    "options": [
      "Tailgating",
      "Dumpster diving",
      "Pharming",
      "Password spraying"
    ],
    "correctIndex": 0,
    "explanation": "Tailgating is gaining physical access by following an authorized person."
  },
  {
    "id": 88,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "An attacker observes a user's screen and keyboard while the user signs in at a public kiosk. Which technique is being used?",
    "options": [
      "Shoulder surfing",
      "Smishing",
      "Watering-hole attack",
      "Session fixation"
    ],
    "correctIndex": 0,
    "explanation": "Shoulder surfing obtains information by direct visual observation."
  },
  {
    "id": 89,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "Attackers compromise a professional association website frequently visited by employees of a target company. What attack type is this?",
    "options": [
      "Watering-hole attack",
      "Credential stuffing",
      "Evil twin",
      "Spear phishing"
    ],
    "correctIndex": 0,
    "explanation": "A watering-hole attack compromises a site commonly used by the intended victims."
  },
  {
    "id": 90,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "An attacker registers micros0ft-support.example to capture users who mistype a legitimate address. Which technique is this?",
    "options": [
      "Typosquatting",
      "Domain fronting",
      "DNSSEC",
      "Key stretching"
    ],
    "correctIndex": 0,
    "explanation": "Typosquatting relies on look-alike or mistyped domain names."
  },
  {
    "id": 91,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "An internet-facing application has an outdated component with a known remote-code-execution flaw. Which attack surface is MOST directly exposed?",
    "options": [
      "Vulnerable software",
      "Physical perimeter",
      "Paper records",
      "Cold-site infrastructure"
    ],
    "correctIndex": 0,
    "explanation": "Known flaws in exposed software provide a direct attack surface."
  },
  {
    "id": 92,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "A development team publishes an API endpoint without authentication or rate limiting. Which attack surface has increased?",
    "options": [
      "Public cloud application interface",
      "Physical access-control system",
      "Offline backup media",
      "Air-gapped enclave"
    ],
    "correctIndex": 0,
    "explanation": "An exposed API is an externally reachable application attack surface."
  },
  {
    "id": 93,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "A company deploys modern endpoint protection but never trains employees to recognize fraudulent support calls. Which attack surface remains MOST exposed?",
    "options": [
      "People",
      "Hypervisor memory",
      "Backup tapes",
      "Network cabling"
    ],
    "correctIndex": 0,
    "explanation": "Users remain vulnerable to social engineering when awareness and verification processes are weak."
  },
  {
    "id": 94,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.2 Threat Vectors and Attack Surfaces",
    "question": "Which action MOST directly reduces the attack surface of an internet-facing server?",
    "options": [
      "Disable unused services and close unnecessary ports",
      "Increase log retention",
      "Add more user accounts",
      "Publish a detailed network diagram"
    ],
    "correctIndex": 0,
    "explanation": "Removing unnecessary services and ports reduces the number of reachable entry points."
  },
  {
    "id": 95,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A web application constructs database queries by concatenating untrusted user input. Which vulnerability is MOST likely?",
    "options": [
      "SQL injection",
      "Cross-site request forgery",
      "Race condition",
      "Certificate pinning"
    ],
    "correctIndex": 0,
    "explanation": "Concatenating untrusted input into SQL statements can let an attacker alter query logic."
  },
  {
    "id": 96,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A comment entered by one user is stored and later executes as JavaScript in other users' browsers. Which vulnerability is present?",
    "options": [
      "Stored cross-site scripting",
      "Server-side request forgery",
      "Directory traversal",
      "Memory leak"
    ],
    "correctIndex": 0,
    "explanation": "Stored XSS persists malicious script content and serves it to later visitors."
  },
  {
    "id": 97,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A malicious website causes a logged-in user's browser to submit an unwanted funds-transfer request to another site. Which flaw is being exploited?",
    "options": [
      "Cross-site request forgery",
      "SQL injection",
      "Buffer overflow",
      "DNS poisoning"
    ],
    "correctIndex": 0,
    "explanation": "CSRF abuses a victim's authenticated browser session to perform an unauthorized action."
  },
  {
    "id": 98,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A server accepts a user-supplied URL and retrieves the cloud metadata service on the attacker's behalf. Which vulnerability is this?",
    "options": [
      "Server-side request forgery",
      "Stored XSS",
      "Race condition",
      "Credential stuffing"
    ],
    "correctIndex": 0,
    "explanation": "SSRF causes a vulnerable server to make attacker-controlled requests."
  },
  {
    "id": 99,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "An application allows `../../../../etc/passwd` in a file parameter and returns the file. Which vulnerability is present?",
    "options": [
      "Directory traversal",
      "Session fixation",
      "Integer overflow",
      "Cross-site request forgery"
    ],
    "correctIndex": 0,
    "explanation": "Directory traversal uses crafted paths to access files outside an intended directory."
  },
  {
    "id": 100,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A program copies user input into a fixed-size memory buffer without checking length. Which vulnerability may result?",
    "options": [
      "Buffer overflow",
      "Broken access control",
      "DNS rebinding",
      "XML signing"
    ],
    "correctIndex": 0,
    "explanation": "Unbounded input can overwrite adjacent memory and potentially alter program execution."
  },
  {
    "id": 101,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "Two requests update the same account balance at nearly the same time, allowing a withdrawal limit to be bypassed. Which vulnerability class is this?",
    "options": [
      "Race condition",
      "Improper certificate validation",
      "Memory leak",
      "Cross-site scripting"
    ],
    "correctIndex": 0,
    "explanation": "Race conditions exploit unsafe timing or ordering between operations."
  },
  {
    "id": 102,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A user changes `/invoice/1001` to `/invoice/1002` and views another customer's bill because the server checks only that the user is logged in. Which flaw is present?",
    "options": [
      "Broken access control",
      "Input encoding",
      "Certificate revocation",
      "Resource exhaustion"
    ],
    "correctIndex": 0,
    "explanation": "The server failed to authorize access to the requested object."
  },
  {
    "id": 103,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A production application still uses the vendor's default administrator password. Which weakness BEST describes this condition?",
    "options": [
      "Insecure default configuration",
      "Hash collision",
      "Race condition",
      "Side-channel leakage"
    ],
    "correctIndex": 0,
    "explanation": "Default credentials are a common insecure configuration vulnerability."
  },
  {
    "id": 104,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A network appliance is no longer supported and cannot receive security updates. What is the PRIMARY vulnerability concern?",
    "options": [
      "Unpatched known flaws will persist",
      "The device will use too much bandwidth",
      "The device cannot be inventoried",
      "All traffic will become encrypted"
    ],
    "correctIndex": 0,
    "explanation": "End-of-life devices retain vulnerabilities because fixes are no longer available."
  },
  {
    "id": 105,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "Malicious firmware is installed on a device before it reaches the customer. Which vulnerability source is MOST likely?",
    "options": [
      "Hardware supply chain compromise",
      "Password spraying",
      "Cross-site scripting",
      "Data minimization"
    ],
    "correctIndex": 0,
    "explanation": "Tampering before delivery is a hardware or firmware supply-chain risk."
  },
  {
    "id": 106,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "An attacker infers cryptographic key material by measuring a device's power consumption during encryption. What type of vulnerability is being exploited?",
    "options": [
      "Side-channel vulnerability",
      "Directory traversal",
      "Improper authorization",
      "DNS cache poisoning"
    ],
    "correctIndex": 0,
    "explanation": "Side-channel attacks use physical characteristics such as power, timing, or electromagnetic emissions."
  },
  {
    "id": 107,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A user installs an application package from an unofficial website instead of an approved app store. Which risk is MOST directly introduced?",
    "options": [
      "Sideloaded malicious software",
      "Certificate transparency",
      "RAID failure",
      "Route poisoning"
    ],
    "correctIndex": 0,
    "explanation": "Sideloading bypasses normal application vetting and can introduce malicious apps."
  },
  {
    "id": 108,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A phone has been jailbroken so applications can bypass operating-system restrictions. What security concern is MOST significant?",
    "options": [
      "Platform security controls may be circumvented",
      "The device cannot use cellular networks",
      "The screen cannot be locked",
      "The battery cannot be charged"
    ],
    "correctIndex": 0,
    "explanation": "Jailbreaking or rooting weakens platform isolation and policy enforcement."
  },
  {
    "id": 109,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "An application requests access to contacts, microphone, location, and text messages even though it only displays weather. Which issue should concern an analyst MOST?",
    "options": [
      "Excessive permissions",
      "Certificate expiration",
      "Packet fragmentation",
      "Load balancing"
    ],
    "correctIndex": 0,
    "explanation": "Permissions that exceed business need increase privacy and compromise risk."
  },
  {
    "id": 110,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A compromised virtual machine executes code on the host hypervisor. Which vulnerability has occurred?",
    "options": [
      "VM escape",
      "VM sprawl",
      "Snapshot rollback",
      "Data deduplication"
    ],
    "correctIndex": 0,
    "explanation": "VM escape breaks isolation between a guest and the hypervisor or host."
  },
  {
    "id": 111,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "Hundreds of forgotten virtual machines remain powered on and unpatched. Which condition BEST describes the problem?",
    "options": [
      "VM sprawl",
      "Hypervisor hardening",
      "Container signing",
      "Resource pooling"
    ],
    "correctIndex": 0,
    "explanation": "VM sprawl creates unmanaged and often vulnerable virtual systems."
  },
  {
    "id": 112,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A cloud storage bucket containing customer records is configured for anonymous public read access. What is the vulnerability?",
    "options": [
      "Misconfigured access control",
      "Memory corruption",
      "Radio-frequency jamming",
      "Certificate pinning"
    ],
    "correctIndex": 0,
    "explanation": "The cloud resource is exposed because its permissions are incorrectly configured."
  },
  {
    "id": 113,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A developer commits a long-lived cloud access key to a public source-code repository. Which vulnerability is MOST directly created?",
    "options": [
      "Exposed secret",
      "Weak physical perimeter",
      "Improper media disposal",
      "ARP cache poisoning"
    ],
    "correctIndex": 0,
    "explanation": "A publicly exposed access key can be used to access cloud resources."
  },
  {
    "id": 114,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A serverless function has permission to read every storage bucket even though it needs only one. Which weakness is present?",
    "options": [
      "Excessive privileges",
      "Improper input encoding",
      "Weak wireless encryption",
      "Data remanence"
    ],
    "correctIndex": 0,
    "explanation": "Overly broad permissions violate least privilege and increase blast radius."
  },
  {
    "id": 115,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A session cookie lacks the Secure attribute. What risk is MOST directly increased?",
    "options": [
      "The cookie may be transmitted over an unencrypted connection",
      "The cookie cannot be deleted",
      "The server cannot validate certificates",
      "The user's password will be hashed twice"
    ],
    "correctIndex": 0,
    "explanation": "The Secure attribute restricts a cookie to HTTPS transport."
  },
  {
    "id": 116,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A session identifier remains valid after a user signs in and can be set by an attacker beforehand. Which vulnerability is this?",
    "options": [
      "Session fixation",
      "SQL injection",
      "DNSSEC failure",
      "Buffer overflow"
    ],
    "correctIndex": 0,
    "explanation": "Session fixation allows an attacker to predetermine a session identifier later associated with the victim."
  },
  {
    "id": 117,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "A workstation continues running an operating system after the vendor ends security support. Which condition BEST describes the risk?",
    "options": [
      "Unsupported operating system",
      "Zero trust",
      "High availability",
      "Tokenization"
    ],
    "correctIndex": 0,
    "explanation": "Unsupported operating systems no longer receive security fixes."
  },
  {
    "id": 118,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.3 Types of Vulnerabilities",
    "question": "An application imports a dependency with a known critical flaw even though the application's own code is secure. What type of vulnerability is this?",
    "options": [
      "Vulnerable third-party component",
      "Physical intrusion",
      "Password reuse",
      "Data sovereignty"
    ],
    "correctIndex": 0,
    "explanation": "Applications inherit risk from vulnerable libraries and dependencies."
  },
  {
    "id": 119,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "Files on multiple servers are encrypted and a note demands payment for a decryption key. Which malware type is MOST likely involved?",
    "options": [
      "Ransomware",
      "Adware",
      "Rootkit",
      "Logic bomb"
    ],
    "correctIndex": 0,
    "explanation": "Ransomware encrypts data or systems and demands payment for restoration."
  },
  {
    "id": 120,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A malicious program disguises itself as a legitimate PDF reader and installs a backdoor when executed. What type of malware is this?",
    "options": [
      "Trojan",
      "Worm",
      "Rootkit",
      "Adware"
    ],
    "correctIndex": 0,
    "explanation": "A Trojan appears legitimate but performs malicious actions when run."
  },
  {
    "id": 121,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "Malware spreads automatically between vulnerable hosts without requiring a user to open a file. Which type is this?",
    "options": [
      "Worm",
      "Trojan",
      "Logic bomb",
      "Spyware"
    ],
    "correctIndex": 0,
    "explanation": "Worms self-propagate across networks by exploiting vulnerabilities."
  },
  {
    "id": 122,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A malicious kernel module hides processes, files, and network connections from the operating system. Which malware type is MOST likely?",
    "options": [
      "Rootkit",
      "Adware",
      "Macro virus",
      "Bot"
    ],
    "correctIndex": 0,
    "explanation": "Rootkits conceal malicious activity by modifying or subverting low-level system functions."
  },
  {
    "id": 123,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A program records keystrokes and sends captured credentials to an attacker. Which malware function is demonstrated?",
    "options": [
      "Keylogging",
      "Cryptomining",
      "Worm propagation",
      "Fileless persistence"
    ],
    "correctIndex": 0,
    "explanation": "Keyloggers capture keyboard input, often to steal credentials."
  },
  {
    "id": 124,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A malicious script runs primarily in PowerShell memory and leaves little or no executable file on disk. Which technique BEST describes it?",
    "options": [
      "Fileless malware",
      "Boot-sector virus",
      "Adware",
      "Firmware rootkit"
    ],
    "correctIndex": 0,
    "explanation": "Fileless malware relies on memory and legitimate system tools rather than traditional disk executables."
  },
  {
    "id": 125,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "Malware activates only when a specific employee account is deleted. Which type of malicious logic is this?",
    "options": [
      "Logic bomb",
      "Worm",
      "Spyware",
      "Adware"
    ],
    "correctIndex": 0,
    "explanation": "A logic bomb triggers when a defined condition or time is met."
  },
  {
    "id": 126,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "Thousands of infected devices receive commands from the same controller and participate in a denial-of-service attack. What do the devices collectively form?",
    "options": [
      "Botnet",
      "Honeynet",
      "VLAN",
      "Certificate chain"
    ],
    "correctIndex": 0,
    "explanation": "A botnet is a group of compromised devices controlled by an attacker."
  },
  {
    "id": 127,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker tries every possible character combination against one administrator account. Which attack is this?",
    "options": [
      "Brute-force attack",
      "Password spraying",
      "Credential stuffing",
      "Pass-the-hash"
    ],
    "correctIndex": 0,
    "explanation": "Brute force systematically attempts many possible passwords against an account."
  },
  {
    "id": 128,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker tries one common password against thousands of user accounts to avoid lockouts. Which technique is being used?",
    "options": [
      "Password spraying",
      "Credential stuffing",
      "Rainbow-table attack",
      "Pass-the-ticket"
    ],
    "correctIndex": 0,
    "explanation": "Password spraying uses a small number of passwords across many accounts."
  },
  {
    "id": 129,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker uses username and password pairs obtained from a previous breach against a different website. Which attack is this?",
    "options": [
      "Credential stuffing",
      "Password spraying",
      "Brute-force cracking",
      "Kerberoasting"
    ],
    "correctIndex": 0,
    "explanation": "Credential stuffing reuses known breached credentials on other services."
  },
  {
    "id": 130,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker authenticates to a Windows service using a captured NTLM hash without recovering the plaintext password. Which technique is this?",
    "options": [
      "Pass-the-hash",
      "Pass-the-ticket",
      "Rainbow-table attack",
      "Password spraying"
    ],
    "correctIndex": 0,
    "explanation": "Pass-the-hash reuses a password hash as authentication material."
  },
  {
    "id": 131,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker requests Kerberos service tickets for service accounts and attempts to crack the ticket data offline. Which technique is this?",
    "options": [
      "Kerberoasting",
      "Credential stuffing",
      "Session fixation",
      "Golden image"
    ],
    "correctIndex": 0,
    "explanation": "Kerberoasting targets service-account ticket material for offline password cracking."
  },
  {
    "id": 132,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "Precomputed tables are used to match unsalted password hashes to likely plaintext values. Which attack is being performed?",
    "options": [
      "Rainbow-table attack",
      "Password spraying",
      "Pass-the-ticket",
      "Credential stuffing"
    ],
    "correctIndex": 0,
    "explanation": "Rainbow tables are precomputed hash-to-plaintext mappings that salts are designed to defeat."
  },
  {
    "id": 133,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A malicious input causes a web server to execute `; cat /etc/passwd`. Which attack is MOST likely?",
    "options": [
      "Command injection",
      "Cross-site request forgery",
      "Credential stuffing",
      "Session replay"
    ],
    "correctIndex": 0,
    "explanation": "Command injection causes an application to execute attacker-supplied operating-system commands."
  },
  {
    "id": 134,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker submits a serialized object that executes code when the server deserializes it. Which attack is this?",
    "options": [
      "Insecure deserialization exploitation",
      "SQL injection",
      "Clickjacking",
      "DNS tunneling"
    ],
    "correctIndex": 0,
    "explanation": "Unsafe deserialization can execute attacker-controlled code or alter application state."
  },
  {
    "id": 135,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A hidden transparent frame tricks a user into clicking an approval button on another website. Which attack is being used?",
    "options": [
      "Clickjacking",
      "Directory traversal",
      "Buffer overflow",
      "Password spraying"
    ],
    "correctIndex": 0,
    "explanation": "Clickjacking overlays or hides interface elements to redirect a victim's clicks."
  },
  {
    "id": 136,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A host sends forged ARP replies so traffic for the default gateway is delivered to the attacker's MAC address. Which attack is occurring?",
    "options": [
      "ARP poisoning",
      "DNS poisoning",
      "BGP hijacking",
      "VLAN hopping"
    ],
    "correctIndex": 0,
    "explanation": "ARP poisoning corrupts local IP-to-MAC mappings."
  },
  {
    "id": 137,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A resolver cache is altered so requests for a bank domain return an attacker's IP address. Which attack is this?",
    "options": [
      "DNS poisoning",
      "ARP poisoning",
      "DHCP starvation",
      "MAC flooding"
    ],
    "correctIndex": 0,
    "explanation": "DNS poisoning corrupts name-resolution results."
  },
  {
    "id": 138,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker positions a system between a client and server and relays both sides' traffic. Which attack is being performed?",
    "options": [
      "On-path attack",
      "Password spraying",
      "Logic bomb",
      "SQL injection"
    ],
    "correctIndex": 0,
    "explanation": "An on-path attacker intercepts and may modify communication between two parties."
  },
  {
    "id": 139,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A botnet sends traffic from thousands of sources to exhaust an online service. Which attack is this?",
    "options": [
      "Distributed denial-of-service",
      "Cross-site scripting",
      "Privilege escalation",
      "Session fixation"
    ],
    "correctIndex": 0,
    "explanation": "A DDoS attack uses many systems to overwhelm service availability."
  },
  {
    "id": 140,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A malicious access point advertises the same SSID as a nearby hotel network to capture user traffic. What is it?",
    "options": [
      "Evil twin",
      "Rogue DHCP server",
      "Honeypot",
      "Load balancer"
    ],
    "correctIndex": 0,
    "explanation": "An evil twin impersonates a legitimate wireless network."
  },
  {
    "id": 141,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "Forged 802.11 management frames repeatedly disconnect users from a wireless network. Which attack is occurring?",
    "options": [
      "Deauthentication attack",
      "Bluejacking",
      "NFC relay",
      "DNS poisoning"
    ],
    "correctIndex": 0,
    "explanation": "Deauthentication attacks abuse wireless management frames to force clients offline."
  },
  {
    "id": 142,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker exhausts all addresses in a DHCP scope and then offers addresses from an unauthorized DHCP server. Which attacks are being combined?",
    "options": [
      "DHCP starvation and rogue DHCP",
      "ARP poisoning and DNSSEC",
      "VLAN hopping and jamming",
      "Credential stuffing and phishing"
    ],
    "correctIndex": 0,
    "explanation": "The attacker first depletes legitimate leases, then directs clients to a malicious DHCP service."
  },
  {
    "id": 143,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A switch's MAC address table is flooded with bogus entries, causing frames to be broadcast more broadly. Which attack is this?",
    "options": [
      "MAC flooding",
      "BGP hijacking",
      "DNS tunneling",
      "Password spraying"
    ],
    "correctIndex": 0,
    "explanation": "MAC flooding can overflow a switch table and force hub-like forwarding behavior."
  },
  {
    "id": 144,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker injects a false route advertisement so internet traffic for a victim's prefix is redirected. Which attack is this?",
    "options": [
      "BGP hijacking",
      "ARP poisoning",
      "Session fixation",
      "Bluejacking"
    ],
    "correctIndex": 0,
    "explanation": "BGP hijacking uses false route announcements to redirect or blackhole traffic."
  },
  {
    "id": 145,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker forces a client and server to use an older, weaker protocol version. Which attack is this?",
    "options": [
      "Downgrade attack",
      "Birthday attack",
      "Replay attack",
      "Key stretching"
    ],
    "correctIndex": 0,
    "explanation": "A downgrade attack negotiates weaker cryptographic protections."
  },
  {
    "id": 146,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker captures a valid authentication exchange and transmits it again later to gain access. Which attack is this?",
    "options": [
      "Replay attack",
      "Collision attack",
      "Downgrade attack",
      "Salting attack"
    ],
    "correctIndex": 0,
    "explanation": "Replay attacks reuse previously captured valid messages or tokens."
  },
  {
    "id": 147,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker attempts to find two different inputs that produce the same hash value. What is the attacker seeking?",
    "options": [
      "Collision",
      "Key escrow",
      "Perfect forward secrecy",
      "Certificate pinning"
    ],
    "correctIndex": 0,
    "explanation": "A hash collision occurs when different inputs produce the same digest."
  },
  {
    "id": 148,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "Which attack uses the probability of collisions to reduce the work needed to find two matching hash outputs?",
    "options": [
      "Birthday attack",
      "Replay attack",
      "Downgrade attack",
      "Padding oracle only"
    ],
    "correctIndex": 0,
    "explanation": "Birthday attacks exploit collision probability in hash functions."
  },
  {
    "id": 149,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An attacker searches discarded documents for passwords and network diagrams. Which technique is this?",
    "options": [
      "Dumpster diving",
      "Tailgating",
      "Shoulder surfing",
      "Vishing"
    ],
    "correctIndex": 0,
    "explanation": "Dumpster diving obtains sensitive information from discarded materials."
  },
  {
    "id": 150,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A person wearing a delivery uniform persuades an employee to hold open a secure door. Which attack is this?",
    "options": [
      "Tailgating using pretexting",
      "Password spraying",
      "Session replay",
      "DNS poisoning"
    ],
    "correctIndex": 0,
    "explanation": "The attacker combines a fabricated role with following an authorized person into a secure area."
  },
  {
    "id": 151,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "An endpoint begins contacting a newly registered domain every 60 seconds with nearly identical small requests. Which activity is MOST likely?",
    "options": [
      "Command-and-control beaconing",
      "Normal software updating",
      "Database replication",
      "Certificate validation"
    ],
    "correctIndex": 0,
    "explanation": "Regular periodic outbound traffic to an unusual domain is characteristic of command-and-control beaconing."
  },
  {
    "id": 152,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.4 Indicators of Malicious Activity",
    "question": "A server's CPU remains near 100% while an unknown process connects to a cryptocurrency mining pool. Which activity is MOST likely?",
    "options": [
      "Cryptojacking",
      "Data masking",
      "Key rotation",
      "Load balancing"
    ],
    "correctIndex": 0,
    "explanation": "Cryptojacking uses victim computing resources to mine cryptocurrency."
  },
  {
    "id": 153,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which control BEST limits an attacker from moving directly from a compromised user workstation to a payment database?",
    "options": [
      "Network segmentation",
      "Longer log retention",
      "Data deduplication",
      "Public DNS"
    ],
    "correctIndex": 0,
    "explanation": "Segmentation restricts communication between security zones and limits lateral movement."
  },
  {
    "id": 154,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which development practice MOST directly mitigates SQL injection?",
    "options": [
      "Parameterized queries",
      "Client-side validation only",
      "Longer session timeouts",
      "Disabling audit logs"
    ],
    "correctIndex": 0,
    "explanation": "Parameterized queries separate user data from executable SQL logic."
  },
  {
    "id": 155,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which control BEST reduces the risk of stored cross-site scripting in user comments?",
    "options": [
      "Context-aware output encoding",
      "RAID mirroring",
      "Network address translation",
      "Password history"
    ],
    "correctIndex": 0,
    "explanation": "Output encoding prevents untrusted content from being interpreted as executable script."
  },
  {
    "id": 156,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "A critical vendor patch cannot be applied immediately to an internet-facing service. Which action is the BEST temporary mitigation?",
    "options": [
      "Apply a compensating WAF rule and restrict exposure",
      "Disable logging",
      "Publish the vulnerability details",
      "Create a shared administrator account"
    ],
    "correctIndex": 0,
    "explanation": "A compensating control can reduce exploitability until the permanent fix is deployed."
  },
  {
    "id": 157,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which control MOST directly prevents unapproved executables from running on a server?",
    "options": [
      "Application allowlisting",
      "File compression",
      "Load balancing",
      "Data classification"
    ],
    "correctIndex": 0,
    "explanation": "Allowlisting permits only explicitly approved applications to execute."
  },
  {
    "id": 158,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "A suspicious attachment must be examined without risking production systems. What is the BEST approach?",
    "options": [
      "Detonate it in an isolated sandbox",
      "Open it on a domain controller",
      "Email it to all analysts",
      "Disable endpoint protection first"
    ],
    "correctIndex": 0,
    "explanation": "A sandbox isolates potentially malicious behavior from production assets."
  },
  {
    "id": 159,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which control BEST reduces successful credential-stuffing attacks?",
    "options": [
      "Multifactor authentication",
      "Longer DNS TTLs",
      "Disabling account logging",
      "Increasing screen brightness"
    ],
    "correctIndex": 0,
    "explanation": "MFA reduces reliance on passwords that may have been exposed elsewhere."
  },
  {
    "id": 160,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "A security team wants devices to meet patch and endpoint-protection requirements before joining the corporate network. Which control should be implemented?",
    "options": [
      "Network access control",
      "Content delivery network",
      "Data masking",
      "Certificate transparency"
    ],
    "correctIndex": 0,
    "explanation": "NAC evaluates identity and device posture before permitting network access."
  },
  {
    "id": 161,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which measure BEST mitigates risk from lost company smartphones?",
    "options": [
      "MDM-enforced encryption and remote wipe",
      "Open Bluetooth pairing",
      "Shared unlock PINs",
      "Disabled screen locks"
    ],
    "correctIndex": 0,
    "explanation": "Mobile-device management can enforce encryption and remotely protect or erase data."
  },
  {
    "id": 162,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which control is MOST appropriate for blocking known malicious domain lookups across an enterprise?",
    "options": [
      "DNS filtering",
      "RAID 10",
      "USB write blocking",
      "Data tokenization"
    ],
    "correctIndex": 0,
    "explanation": "DNS filtering blocks resolution of malicious or prohibited domains."
  },
  {
    "id": 163,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which action BEST reduces risk from unused services on a server?",
    "options": [
      "Disable or remove them",
      "Increase their privileges",
      "Expose them through NAT",
      "Share their default credentials"
    ],
    "correctIndex": 0,
    "explanation": "Removing unnecessary services reduces attack surface."
  },
  {
    "id": 164,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which mitigation BEST protects against an exploit that targets a known operating-system vulnerability?",
    "options": [
      "Apply the vendor patch",
      "Increase password length only",
      "Archive the logs",
      "Rename the host"
    ],
    "correctIndex": 0,
    "explanation": "Patching removes or reduces the vulnerable condition addressed by the vendor."
  },
  {
    "id": 165,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "A company wants to prevent employees from emailing customer Social Security numbers to external recipients. Which control is MOST appropriate?",
    "options": [
      "Data loss prevention",
      "Network load balancing",
      "RAID parity",
      "Certificate pinning"
    ],
    "correctIndex": 0,
    "explanation": "DLP identifies sensitive data and can block unauthorized transmission."
  },
  {
    "id": 166,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which control BEST limits damage if an internet-facing web server is compromised?",
    "options": [
      "Place it in a segmented DMZ with restricted internal access",
      "Join it to every internal VLAN",
      "Store domain-admin credentials on it",
      "Disable outbound filtering"
    ],
    "correctIndex": 0,
    "explanation": "A restricted DMZ limits the server's access to internal resources."
  },
  {
    "id": 167,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "An organization needs to enforce approved security settings continuously across thousands of servers. Which technique is MOST appropriate?",
    "options": [
      "Configuration enforcement",
      "Manual annual review only",
      "Shared local administrator passwords",
      "Open-source intelligence collection"
    ],
    "correctIndex": 0,
    "explanation": "Configuration enforcement detects and corrects drift from approved baselines."
  },
  {
    "id": 168,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which control BEST reduces the impact of a compromised service account?",
    "options": [
      "Least privilege and restricted logon scope",
      "Permanent domain-admin membership",
      "Password sharing",
      "Disabled auditing"
    ],
    "correctIndex": 0,
    "explanation": "Limiting permissions and where the account may log on reduces blast radius."
  },
  {
    "id": 169,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "A workstation is confirmed to be communicating with a command-and-control server. What should an analyst do FIRST to limit damage?",
    "options": [
      "Isolate the workstation",
      "Delete all evidence",
      "Reimage every server",
      "Notify the media"
    ],
    "correctIndex": 0,
    "explanation": "Isolation contains the threat while preserving the system for analysis."
  },
  {
    "id": 170,
    "domain": "2.0 Threats, Vulnerabilities, and Mitigations",
    "objective": "2.5 Mitigation Techniques",
    "question": "Which combination BEST mitigates malicious email attachments before they reach users?",
    "options": [
      "Attachment sandboxing and content filtering",
      "RAID and load balancing",
      "NAT and VLAN trunking",
      "Data masking and tokenization"
    ],
    "correctIndex": 0,
    "explanation": "Email filtering and sandbox detonation can detect or block malicious files before delivery."
  },
  {
    "id": 171,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "An organization keeps sensitive databases in its own data center but uses a public cloud for customer-facing web servers. Which deployment model is this?",
    "options": [
      "Hybrid cloud",
      "Community cloud",
      "Private cloud only",
      "SaaS only"
    ],
    "correctIndex": 0,
    "explanation": "A hybrid model combines on-premises or private resources with public cloud services."
  },
  {
    "id": 172,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A customer manages virtual machines, operating systems, and applications while the provider manages physical servers and the hypervisor. Which service model is being used?",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "DaaS only"
    ],
    "correctIndex": 0,
    "explanation": "In IaaS, the provider manages underlying infrastructure while the customer manages guest operating systems and applications."
  },
  {
    "id": 173,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A development team deploys code to a managed runtime without administering the operating system. Which service model BEST fits?",
    "options": [
      "PaaS",
      "IaaS",
      "SaaS",
      "Colocation"
    ],
    "correctIndex": 0,
    "explanation": "PaaS provides a managed platform and runtime for application deployment."
  },
  {
    "id": 174,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "Employees use a browser-based CRM application and the vendor manages the application, platform, and infrastructure. Which model is this?",
    "options": [
      "SaaS",
      "IaaS",
      "PaaS",
      "Private hosting"
    ],
    "correctIndex": 0,
    "explanation": "SaaS delivers a complete provider-managed application to customers."
  },
  {
    "id": 175,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "In an IaaS environment, which task is typically the customer's responsibility?",
    "options": [
      "Patching the guest operating system",
      "Securing the physical data center",
      "Maintaining the hypervisor hardware",
      "Providing redundant power to the facility"
    ],
    "correctIndex": 0,
    "explanation": "IaaS customers generally manage the guest OS, applications, identities, and data."
  },
  {
    "id": 176,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "In a SaaS environment, which responsibility usually remains with the customer?",
    "options": [
      "User access and data configuration",
      "Patching the SaaS application code",
      "Maintaining the hypervisor",
      "Replacing failed storage drives"
    ],
    "correctIndex": 0,
    "explanation": "SaaS customers still manage identities, access, data, and tenant configuration."
  },
  {
    "id": 177,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A function runs only when a file is uploaded, and the cloud provider automatically allocates compute resources. Which architecture is this?",
    "options": [
      "Serverless",
      "Bare metal",
      "Colocation",
      "Cold site"
    ],
    "correctIndex": 0,
    "explanation": "Serverless computing executes event-driven functions without customer-managed servers."
  },
  {
    "id": 178,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "An application is divided into independently deployable services communicating through APIs. Which architecture is being used?",
    "options": [
      "Microservices",
      "Monolithic mainframe only",
      "Air-gapped enclave",
      "Cold standby"
    ],
    "correctIndex": 0,
    "explanation": "Microservices break an application into smaller independently managed services."
  },
  {
    "id": 179,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "Which control BEST protects service-to-service communication in a microservices environment?",
    "options": [
      "Mutual TLS with service identities",
      "Shared anonymous access",
      "Telnet between containers",
      "A single hard-coded root password"
    ],
    "correctIndex": 0,
    "explanation": "Mutual TLS authenticates both services and encrypts their communication."
  },
  {
    "id": 180,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "Multiple isolated guest operating systems share one physical server through a hypervisor. Which technology is this?",
    "options": [
      "Virtualization",
      "Tokenization",
      "Data masking",
      "Sharding"
    ],
    "correctIndex": 0,
    "explanation": "Virtualization abstracts physical resources so multiple guest systems can run on one host."
  },
  {
    "id": 181,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "Which statement BEST distinguishes containers from traditional virtual machines?",
    "options": [
      "Containers generally share the host operating-system kernel",
      "Containers always include a separate hypervisor",
      "Containers cannot be isolated",
      "Containers require dedicated physical hardware"
    ],
    "correctIndex": 0,
    "explanation": "Containers typically share a host kernel while isolating processes and filesystems."
  },
  {
    "id": 182,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "Which practice MOST directly improves container supply-chain security?",
    "options": [
      "Use signed images from an approved registry",
      "Run every container as root",
      "Disable image scanning",
      "Use mutable latest tags only"
    ],
    "correctIndex": 0,
    "explanation": "Signed, approved images help verify origin and integrity."
  },
  {
    "id": 183,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A team defines cloud networks and access rules in version-controlled Terraform files. Which concept is this?",
    "options": [
      "Infrastructure as code",
      "Manual provisioning",
      "Data masking",
      "Network forensics"
    ],
    "correctIndex": 0,
    "explanation": "IaC represents infrastructure configuration in code that can be reviewed and versioned."
  },
  {
    "id": 184,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "Which control BEST identifies a publicly exposed database before an infrastructure-as-code template is deployed?",
    "options": [
      "Static IaC security scanning",
      "Disk defragmentation",
      "Password expiration",
      "Packet capture after deployment only"
    ],
    "correctIndex": 0,
    "explanation": "IaC scanning detects insecure definitions before resources are created."
  },
  {
    "id": 185,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A smart building contains sensors with weak default credentials and infrequent firmware updates. Which architecture type creates this risk?",
    "options": [
      "IoT",
      "Mainframe",
      "Cold site",
      "Data warehouse"
    ],
    "correctIndex": 0,
    "explanation": "IoT devices often have constrained management, default credentials, and long patch cycles."
  },
  {
    "id": 186,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "Which design BEST limits the impact of a compromised smart camera?",
    "options": [
      "Place IoT devices on a restricted network segment",
      "Join them to the domain-admin subnet",
      "Allow unrestricted east-west traffic",
      "Store administrator credentials in the camera configuration"
    ],
    "correctIndex": 0,
    "explanation": "Segmentation limits an IoT compromise from reaching sensitive systems."
  },
  {
    "id": 187,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A manufacturing controller requires continuous operation and cannot tolerate unplanned reboots. Which security consideration is MOST important?",
    "options": [
      "Availability and carefully tested changes",
      "Frequent uncontrolled patching",
      "Public internet exposure",
      "Shared default passwords"
    ],
    "correctIndex": 0,
    "explanation": "ICS environments prioritize safety and availability, requiring controlled testing and maintenance."
  },
  {
    "id": 188,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "Which action is MOST appropriate when securing a legacy PLC that cannot support modern endpoint agents?",
    "options": [
      "Segment it and monitor traffic through an industrial firewall",
      "Install consumer antivirus without testing",
      "Expose it directly to the internet",
      "Use the same password on all controllers"
    ],
    "correctIndex": 0,
    "explanation": "Segmentation and network monitoring are common compensating controls for constrained ICS devices."
  },
  {
    "id": 189,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A medical device runs a specialized operating system with fixed functionality and limited resources. Which architecture category BEST fits?",
    "options": [
      "Embedded system",
      "General-purpose workstation",
      "Public cloud",
      "Hot site"
    ],
    "correctIndex": 0,
    "explanation": "Embedded systems are purpose-built devices with constrained hardware and software."
  },
  {
    "id": 190,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "Which requirement is MOST characteristic of a real-time operating system in an industrial environment?",
    "options": [
      "Predictable response within strict timing constraints",
      "Maximum graphical performance",
      "Unlimited background processing",
      "Frequent feature updates"
    ],
    "correctIndex": 0,
    "explanation": "RTOS platforms prioritize deterministic timing and predictable response."
  },
  {
    "id": 191,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A factory analyzes sensor data near production equipment instead of sending every event to a distant cloud region. Which model is this?",
    "options": [
      "Edge computing",
      "Cold backup",
      "Centralized mainframe only",
      "Data tokenization"
    ],
    "correctIndex": 0,
    "explanation": "Edge computing processes data near its source to reduce latency and bandwidth use."
  },
  {
    "id": 192,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A classified network has no direct electronic connection to lower-trust networks. Which architecture concept is being used?",
    "options": [
      "Air gap",
      "Split tunneling",
      "Federation",
      "Load balancing"
    ],
    "correctIndex": 0,
    "explanation": "An air gap physically or logically separates a system from other networks."
  },
  {
    "id": 193,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A security team is designing controls for a GPU cluster used for sensitive AI workloads. Which concern is MOST relevant?",
    "options": [
      "Protecting shared compute resources and training data",
      "Disabling all monitoring",
      "Using public anonymous storage",
      "Removing access controls"
    ],
    "correctIndex": 0,
    "explanation": "Specialized compute environments still require isolation, access control, and data protection."
  },
  {
    "id": 194,
    "domain": "3.0 Security Architecture",
    "objective": "3.1 Architecture Models",
    "question": "A company chooses a managed cloud database to reduce administrative overhead but accepts less control over the underlying platform. What is this decision BEST described as?",
    "options": [
      "Security and operational tradeoff",
      "Hash collision",
      "Chain of custody",
      "Physical deterrence"
    ],
    "correctIndex": 0,
    "explanation": "Architecture choices balance control, responsibility, cost, scalability, and operational effort."
  },
  {
    "id": 195,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "A company separates finance, engineering, guest, and IoT devices into distinct security zones with firewall rules between them. Which design principle is being applied?",
    "options": [
      "Network segmentation",
      "Flat networking",
      "Implicit trust",
      "Data deduplication"
    ],
    "correctIndex": 0,
    "explanation": "Segmentation limits communication between zones and reduces lateral movement."
  },
  {
    "id": 196,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Where should an internet-facing web server be placed to reduce direct exposure of the internal network?",
    "options": [
      "DMZ",
      "Domain controller subnet",
      "Backup network",
      "User workstation VLAN"
    ],
    "correctIndex": 0,
    "explanation": "A DMZ hosts public services in a controlled zone separated from internal systems."
  },
  {
    "id": 197,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "A public application is placed between external and internal firewalls, with tightly limited connections to a backend database. What architecture is this?",
    "options": [
      "Screened subnet",
      "Flat network",
      "Peer-to-peer mesh",
      "Cold site"
    ],
    "correctIndex": 0,
    "explanation": "A screened subnet uses layered filtering around a public-facing segment."
  },
  {
    "id": 198,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Administrators must connect through a hardened, monitored system before managing production servers. What is this system called?",
    "options": [
      "Jump server",
      "Load balancer",
      "Honeypot",
      "Content delivery node"
    ],
    "correctIndex": 0,
    "explanation": "A jump server centralizes and controls privileged administrative access."
  },
  {
    "id": 199,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which design BEST protects network-device administration interfaces?",
    "options": [
      "Place them on a dedicated management network",
      "Expose them to the public internet",
      "Allow access from every user VLAN",
      "Use shared default credentials"
    ],
    "correctIndex": 0,
    "explanation": "A dedicated management network limits access to sensitive administrative interfaces."
  },
  {
    "id": 200,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which technology BEST protects traffic between two offices across the public internet?",
    "options": [
      "Site-to-site IPsec VPN",
      "Open FTP",
      "Public Wi-Fi",
      "DNS round robin"
    ],
    "correctIndex": 0,
    "explanation": "A site-to-site IPsec VPN encrypts and authenticates IP traffic between networks."
  },
  {
    "id": 201,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which IPsec mode encapsulates the entire original IP packet and is commonly used between gateways?",
    "options": [
      "Tunnel mode",
      "Transport mode",
      "Passive mode",
      "Promiscuous mode"
    ],
    "correctIndex": 0,
    "explanation": "Tunnel mode protects the full original packet and adds a new outer IP header."
  },
  {
    "id": 202,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Remote employees need access only to specific internal web applications, not the entire corporate network. Which solution BEST fits?",
    "options": [
      "ZTNA",
      "Full-tunnel layer 2 bridge",
      "Open proxy",
      "Telnet gateway"
    ],
    "correctIndex": 0,
    "explanation": "ZTNA grants identity- and context-based access to specific applications."
  },
  {
    "id": 203,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "A company wants cloud-delivered secure web gateway, CASB, ZTNA, and SD-WAN capabilities. Which architecture BEST matches?",
    "options": [
      "SASE",
      "RAID",
      "PKI",
      "Honeynet"
    ],
    "correctIndex": 0,
    "explanation": "SASE converges networking and security services in a cloud-delivered model."
  },
  {
    "id": 204,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "A business dynamically selects among MPLS, broadband, and cellular links based on policy and performance. Which technology is being used?",
    "options": [
      "SD-WAN",
      "NAC",
      "HSM",
      "DLP"
    ],
    "correctIndex": 0,
    "explanation": "SD-WAN centrally manages and optimizes traffic across multiple WAN transports."
  },
  {
    "id": 205,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which device acts on behalf of internal clients when they access external websites and can enforce URL policy?",
    "options": [
      "Forward proxy",
      "Reverse proxy",
      "Layer 2 switch",
      "HSM"
    ],
    "correctIndex": 0,
    "explanation": "A forward proxy represents clients and can filter outbound web access."
  },
  {
    "id": 206,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which component receives client requests for a web application and forwards them to backend servers while hiding those servers?",
    "options": [
      "Reverse proxy",
      "Forward proxy",
      "DHCP relay",
      "Network tap"
    ],
    "correctIndex": 0,
    "explanation": "A reverse proxy fronts servers and can provide TLS termination, filtering, and load distribution."
  },
  {
    "id": 207,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which control is specifically designed to inspect HTTP requests for attacks such as SQL injection and cross-site scripting?",
    "options": [
      "WAF",
      "NAC",
      "HSM",
      "UPS"
    ],
    "correctIndex": 0,
    "explanation": "A web application firewall applies application-layer rules to web traffic."
  },
  {
    "id": 208,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which device distributes client requests across multiple application servers to improve availability?",
    "options": [
      "Load balancer",
      "Packet broker",
      "Certificate authority",
      "RADIUS server"
    ],
    "correctIndex": 0,
    "explanation": "Load balancers spread requests and can remove failed backends from service."
  },
  {
    "id": 209,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "A security team wants to block malicious traffic before it reaches internal servers. How should an IPS be deployed?",
    "options": [
      "Inline",
      "Out of band only",
      "On backup media",
      "Behind an air gap with no traffic path"
    ],
    "correctIndex": 0,
    "explanation": "An IPS must be inline to actively block traffic."
  },
  {
    "id": 210,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "A passive sensor must receive copies of switch traffic without becoming part of the forwarding path. Which feature should be used?",
    "options": [
      "Port mirroring",
      "NAT overload",
      "Link aggregation",
      "DHCP reservation"
    ],
    "correctIndex": 0,
    "explanation": "Port mirroring copies traffic to a monitoring interface."
  },
  {
    "id": 211,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "A network requires device certificates and current endpoint protection before granting access. Which control enforces this?",
    "options": [
      "NAC",
      "CDN",
      "RAID",
      "HSM"
    ],
    "correctIndex": 0,
    "explanation": "Network access control evaluates identity and posture before admission."
  },
  {
    "id": 212,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which wireless configuration provides certificate-based mutual authentication for enterprise users?",
    "options": [
      "WPA3-Enterprise with EAP-TLS",
      "Open Wi-Fi with captive portal",
      "WEP with a shared key",
      "WPA2-Personal with one common password"
    ],
    "correctIndex": 0,
    "explanation": "EAP-TLS provides strong mutual certificate authentication in enterprise wireless."
  },
  {
    "id": 213,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which WPA3-Personal feature replaces the traditional pre-shared-key exchange and improves resistance to offline guessing?",
    "options": [
      "SAE",
      "WPS",
      "TKIP",
      "PAP"
    ],
    "correctIndex": 0,
    "explanation": "Simultaneous Authentication of Equals is used by WPA3-Personal."
  },
  {
    "id": 214,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which protocol is commonly used to centralize authentication for network access and VPN connections?",
    "options": [
      "RADIUS",
      "SMTP",
      "NTP",
      "TFTP"
    ],
    "correctIndex": 0,
    "explanation": "RADIUS provides centralized authentication, authorization, and accounting for network access."
  },
  {
    "id": 215,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which protocol is often preferred for detailed command authorization on network devices?",
    "options": [
      "TACACS+",
      "POP3",
      "SIP",
      "SNMPv1"
    ],
    "correctIndex": 0,
    "explanation": "TACACS+ separates AAA functions and supports granular command authorization."
  },
  {
    "id": 216,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which protocol should replace Telnet for encrypted command-line administration?",
    "options": [
      "SSH",
      "HTTP",
      "TFTP",
      "Rlogin"
    ],
    "correctIndex": 0,
    "explanation": "SSH encrypts remote administrative sessions."
  },
  {
    "id": 217,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which protocol secures web sessions and is the foundation of HTTPS?",
    "options": [
      "TLS",
      "FTP",
      "RIP",
      "SNMPv1"
    ],
    "correctIndex": 0,
    "explanation": "TLS provides confidentiality and integrity for HTTPS."
  },
  {
    "id": 218,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which SNMP version supports authentication and encryption?",
    "options": [
      "SNMPv3",
      "SNMPv1",
      "SNMPv2c",
      "All versions equally"
    ],
    "correctIndex": 0,
    "explanation": "SNMPv3 adds authentication and privacy protections."
  },
  {
    "id": 219,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "Which technology allows a resolver to validate that DNS responses were signed by the authoritative zone?",
    "options": [
      "DNSSEC",
      "DoH only",
      "NAT",
      "DHCP snooping"
    ],
    "correctIndex": 0,
    "explanation": "DNSSEC provides origin authentication and integrity for DNS data."
  },
  {
    "id": 220,
    "domain": "3.0 Security Architecture",
    "objective": "3.2 Applying Security Principles",
    "question": "A mail administrator wants servers to prefer encrypted SMTP connections while detecting downgrade attempts through published policy. Which combination BEST fits?",
    "options": [
      "MTA-STS with TLS reporting",
      "POP3 with basic authentication",
      "TFTP with IPsec disabled",
      "SNMPv1 with community strings"
    ],
    "correctIndex": 0,
    "explanation": "MTA-STS and TLS reporting strengthen SMTP transport policy and visibility."
  },
  {
    "id": 221,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "Customer Social Security numbers require the strongest handling restrictions in an organization's classification scheme. Which label is MOST appropriate?",
    "options": [
      "Restricted",
      "Public",
      "Internal",
      "Unclassified"
    ],
    "correctIndex": 0,
    "explanation": "Highly sensitive regulated data is commonly assigned the most restrictive classification."
  },
  {
    "id": 222,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "Engineering drawings for an unreleased product are BEST categorized as which data type?",
    "options": [
      "Intellectual property",
      "Public information",
      "Authentication metadata only",
      "Operational telemetry only"
    ],
    "correctIndex": 0,
    "explanation": "Product designs are proprietary intellectual property and trade-secret material."
  },
  {
    "id": 223,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A patient's diagnosis and treatment history are examples of which regulated data type?",
    "options": [
      "Protected health information",
      "Public records",
      "Open-source intelligence",
      "Anonymous telemetry"
    ],
    "correctIndex": 0,
    "explanation": "Medical records tied to an individual are protected health information."
  },
  {
    "id": 224,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A database field is being processed by an application in system memory. In which state is the data?",
    "options": [
      "Data in use",
      "Data at rest",
      "Data in transit",
      "Data in escrow"
    ],
    "correctIndex": 0,
    "explanation": "Data actively being processed in memory is data in use."
  },
  {
    "id": 225,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "Files stored on an offline backup tape are in which state?",
    "options": [
      "Data at rest",
      "Data in transit",
      "Data in use",
      "Data in motion only"
    ],
    "correctIndex": 0,
    "explanation": "Stored data that is not actively moving or processing is at rest."
  },
  {
    "id": 226,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A client sends account information to an API over the network. In which state is the information?",
    "options": [
      "Data in transit",
      "Data at rest",
      "Data in use only",
      "Data remanence"
    ],
    "correctIndex": 0,
    "explanation": "Data moving between systems is in transit."
  },
  {
    "id": 227,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "Which control BEST protects confidential data stored on a database volume if the physical disk is stolen?",
    "options": [
      "Encryption at rest",
      "Network segmentation only",
      "Load balancing",
      "DNSSEC"
    ],
    "correctIndex": 0,
    "explanation": "Encryption at rest protects stored data from unauthorized access to the media."
  },
  {
    "id": 228,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "Which control BEST protects credentials from eavesdropping between a browser and web server?",
    "options": [
      "TLS",
      "RAID",
      "File compression",
      "Data deduplication"
    ],
    "correctIndex": 0,
    "explanation": "TLS encrypts and authenticates application traffic in transit."
  },
  {
    "id": 229,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A payment system replaces card numbers with random values while storing the original values in a protected vault. Which technique is this?",
    "options": [
      "Tokenization",
      "Hashing",
      "Steganography",
      "Obfuscation"
    ],
    "correctIndex": 0,
    "explanation": "Tokenization substitutes sensitive values with non-sensitive tokens linked to originals in a secure system."
  },
  {
    "id": 230,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A support representative sees only the last four digits of a customer's account number. Which protection method is being used?",
    "options": [
      "Data masking",
      "Key stretching",
      "Sharding",
      "Certificate pinning"
    ],
    "correctIndex": 0,
    "explanation": "Masking hides portions of sensitive data from users who do not need the full value."
  },
  {
    "id": 231,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A research dataset is modified so records cannot reasonably be linked back to specific individuals. Which technique is this?",
    "options": [
      "Anonymization",
      "Pseudonymization",
      "Token replay",
      "Certificate chaining"
    ],
    "correctIndex": 0,
    "explanation": "Anonymization removes or alters identifiers so individuals cannot reasonably be reidentified."
  },
  {
    "id": 232,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A clinical study replaces patient names with coded identifiers, but an authorized team retains a separate reidentification key. Which technique is this?",
    "options": [
      "Pseudonymization",
      "Anonymization",
      "Hash collision",
      "Data destruction"
    ],
    "correctIndex": 0,
    "explanation": "Pseudonymization replaces direct identifiers but preserves a controlled way to reidentify records."
  },
  {
    "id": 233,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A security tool blocks uploads containing confidential project labels to personal cloud storage. Which control is this?",
    "options": [
      "DLP",
      "NAC",
      "HSM",
      "NTP"
    ],
    "correctIndex": 0,
    "explanation": "Data loss prevention detects and restricts unauthorized movement of sensitive information."
  },
  {
    "id": 234,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A document remains encrypted and prevents printing even after it is emailed outside the company. Which technology BEST provides this?",
    "options": [
      "Digital rights management",
      "RAID mirroring",
      "Network address translation",
      "Certificate transparency"
    ],
    "correctIndex": 0,
    "explanation": "DRM applies persistent usage restrictions to protected content."
  },
  {
    "id": 235,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A regulation requires customer data to remain within a specific country's legal jurisdiction. Which consideration is this?",
    "options": [
      "Data sovereignty",
      "Data deduplication",
      "Load balancing",
      "Hash salting"
    ],
    "correctIndex": 0,
    "explanation": "Data sovereignty concerns the laws and jurisdiction governing where data is stored or processed."
  },
  {
    "id": 236,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A contract states that backups must physically reside in data centers located in Canada. Which requirement is being specified?",
    "options": [
      "Data residency",
      "Certificate revocation",
      "Non-repudiation",
      "Access federation"
    ],
    "correctIndex": 0,
    "explanation": "Data residency specifies the geographic location where data must be stored."
  },
  {
    "id": 237,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "Which policy determines how long financial records must be kept before approved disposal?",
    "options": [
      "Data retention policy",
      "Password policy",
      "Remote-access policy",
      "Change-management policy"
    ],
    "correctIndex": 0,
    "explanation": "Retention policies define required storage periods and disposal timelines."
  },
  {
    "id": 238,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "A self-encrypting drive is being retired. Which action can rapidly render the data unreadable if the encryption implementation is trusted?",
    "options": [
      "Cryptographic erase",
      "Quick format",
      "Delete files to the recycle bin",
      "Rename the volume"
    ],
    "correctIndex": 0,
    "explanation": "Cryptographic erase destroys the encryption key, making encrypted data inaccessible."
  },
  {
    "id": 239,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "Encrypted archives must remain readable for seven years. Which consideration is MOST important?",
    "options": [
      "Preserve and rotate keys according to a managed lifecycle",
      "Delete all old keys immediately",
      "Use one shared password in email",
      "Disable backup verification"
    ],
    "correctIndex": 0,
    "explanation": "Long-term access requires secure retention, rotation, escrow, and recovery of encryption keys."
  },
  {
    "id": 240,
    "domain": "3.0 Security Architecture",
    "objective": "3.3 Protecting Data",
    "question": "An application collects birth dates even though age is not needed for the service. Which privacy principle should be applied?",
    "options": [
      "Data minimization",
      "Maximum retention",
      "Implicit consent",
      "Open access"
    ],
    "correctIndex": 0,
    "explanation": "Data minimization limits collection to information necessary for the stated purpose."
  },
  {
    "id": 241,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Two application servers operate simultaneously and both process production traffic. Which availability model is this?",
    "options": [
      "Active-active",
      "Active-passive",
      "Cold standby",
      "Offline backup"
    ],
    "correctIndex": 0,
    "explanation": "In an active-active design, multiple nodes serve traffic at the same time."
  },
  {
    "id": 242,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "A secondary database remains synchronized but serves traffic only after the primary fails. Which model is this?",
    "options": [
      "Active-passive",
      "Active-active",
      "Cold site",
      "Tape rotation"
    ],
    "correctIndex": 0,
    "explanation": "An active-passive design keeps a standby ready to assume service."
  },
  {
    "id": 243,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "A server has two power supplies connected to separate electrical circuits. Which resilience principle is demonstrated?",
    "options": [
      "Redundancy",
      "Obfuscation",
      "Data minimization",
      "Single point of failure"
    ],
    "correctIndex": 0,
    "explanation": "Redundant power paths reduce dependence on a single component."
  },
  {
    "id": 244,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which statement about RAID is MOST accurate?",
    "options": [
      "RAID improves availability but does not replace backups",
      "RAID guarantees recovery from ransomware",
      "RAID provides geographic redundancy",
      "RAID eliminates the need for restore testing"
    ],
    "correctIndex": 0,
    "explanation": "RAID can tolerate some disk failures but does not protect against deletion, corruption, or site loss."
  },
  {
    "id": 245,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which device provides immediate short-term power so systems can continue operating or shut down cleanly during an outage?",
    "options": [
      "UPS",
      "Generator only",
      "Load balancer",
      "HSM"
    ],
    "correctIndex": 0,
    "explanation": "A UPS supplies near-instant battery power during interruptions."
  },
  {
    "id": 246,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which system is MOST appropriate for providing extended electrical power during a long utility outage?",
    "options": [
      "Generator",
      "UPS battery alone",
      "Network tap",
      "KVM switch"
    ],
    "correctIndex": 0,
    "explanation": "Generators provide sustained power after startup for longer outages."
  },
  {
    "id": 247,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which backup copies all selected data regardless of previous backup activity?",
    "options": [
      "Full backup",
      "Incremental backup",
      "Differential backup",
      "Synthetic log only"
    ],
    "correctIndex": 0,
    "explanation": "A full backup copies the entire selected dataset."
  },
  {
    "id": 248,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which backup copies data changed since the most recent backup of any type?",
    "options": [
      "Incremental backup",
      "Differential backup",
      "Full backup",
      "Archive bit reset only"
    ],
    "correctIndex": 0,
    "explanation": "Incremental backups capture changes since the last backup, whether full or incremental."
  },
  {
    "id": 249,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which backup copies all changes made since the last full backup?",
    "options": [
      "Differential backup",
      "Incremental backup",
      "Snapshot only",
      "Mirror without versioning"
    ],
    "correctIndex": 0,
    "explanation": "Differential backups accumulate changes since the last full backup."
  },
  {
    "id": 250,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which design BEST protects backups from ransomware that compromises production administrator accounts?",
    "options": [
      "Immutable or offline backups with separate credentials",
      "Backups mounted read-write with shared domain credentials",
      "One online copy on the same server",
      "No restore testing"
    ],
    "correctIndex": 0,
    "explanation": "Isolation, immutability, and separate access reduce the chance ransomware can alter backup copies."
  },
  {
    "id": 251,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "A business can tolerate losing no more than 30 minutes of transaction data. Which metric defines this requirement?",
    "options": [
      "RPO",
      "RTO",
      "MTTR",
      "MTBF"
    ],
    "correctIndex": 0,
    "explanation": "Recovery point objective defines the maximum acceptable amount of data loss measured in time."
  },
  {
    "id": 252,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "A payroll system must be restored within two hours of an outage. Which metric defines this requirement?",
    "options": [
      "RTO",
      "RPO",
      "SLE",
      "ARO"
    ],
    "correctIndex": 0,
    "explanation": "Recovery time objective defines the maximum acceptable restoration time."
  },
  {
    "id": 253,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which metric measures the average time a repairable system operates between failures?",
    "options": [
      "MTBF",
      "MTTR",
      "RPO",
      "ALE"
    ],
    "correctIndex": 0,
    "explanation": "Mean time between failures measures average operational time between failures."
  },
  {
    "id": 254,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which metric measures the average time required to restore a failed system?",
    "options": [
      "MTTR",
      "MTBF",
      "RPO",
      "SLE"
    ],
    "correctIndex": 0,
    "explanation": "Mean time to repair or recover measures restoration duration."
  },
  {
    "id": 255,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which recovery site is fully equipped, has current data, and can assume operations rapidly?",
    "options": [
      "Hot site",
      "Warm site",
      "Cold site",
      "Reciprocal agreement only"
    ],
    "correctIndex": 0,
    "explanation": "A hot site has operational systems, connectivity, and current or near-current data."
  },
  {
    "id": 256,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which recovery site provides space and basic utilities but requires equipment installation and data restoration?",
    "options": [
      "Cold site",
      "Hot site",
      "Active-active site",
      "Warm site"
    ],
    "correctIndex": 0,
    "explanation": "A cold site offers facilities with minimal preinstalled technology."
  },
  {
    "id": 257,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "A team discusses a disaster scenario and walks through decisions without interrupting production. What type of test is this?",
    "options": [
      "Tabletop exercise",
      "Full interruption test",
      "Parallel processing test",
      "Destructive test"
    ],
    "correctIndex": 0,
    "explanation": "A tabletop exercise is a discussion-based review of roles, decisions, and procedures."
  },
  {
    "id": 258,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "A recovery environment is brought online and processes test workloads while production continues operating. What type of test is this?",
    "options": [
      "Parallel test",
      "Tabletop exercise",
      "Checklist review",
      "Full interruption"
    ],
    "correctIndex": 0,
    "explanation": "A parallel test validates recovery capability without shutting down production."
  },
  {
    "id": 259,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Why should redundant data centers be placed in different geographic regions?",
    "options": [
      "To reduce exposure to a single regional disaster",
      "To ensure both use the same power grid",
      "To eliminate data encryption",
      "To increase shared physical dependencies"
    ],
    "correctIndex": 0,
    "explanation": "Geographic diversity reduces the chance one event disables all sites."
  },
  {
    "id": 260,
    "domain": "3.0 Security Architecture",
    "objective": "3.4 Resiliency and Recovery",
    "question": "Which plan focuses on sustaining critical business functions during and after a disruptive event?",
    "options": [
      "Continuity of operations plan",
      "Password policy",
      "Acceptable use policy",
      "Certificate practice statement"
    ],
    "correctIndex": 0,
    "explanation": "A continuity plan defines how essential functions continue through disruption."
  },
  {
    "id": 261,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "A company deploys servers from an approved image that disables unnecessary services, configures audit settings, and applies required patches. What is this image BEST called?",
    "options": [
      "Secure baseline or golden image",
      "Honeypot",
      "Cold backup",
      "Packet capture"
    ],
    "correctIndex": 0,
    "explanation": "A secure baseline or golden image provides a repeatable hardened starting configuration."
  },
  {
    "id": 262,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "A server's configuration is compared nightly with an approved standard and unauthorized differences are corrected automatically. What process is this?",
    "options": [
      "Configuration enforcement",
      "Data classification",
      "Certificate enrollment",
      "Threat attribution"
    ],
    "correctIndex": 0,
    "explanation": "Configuration enforcement identifies and remediates drift from approved baselines."
  },
  {
    "id": 263,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "Which action MOST directly hardens a newly installed operating system?",
    "options": [
      "Disable unused accounts and services",
      "Enable every network service",
      "Retain vendor default credentials",
      "Grant users local administrator access"
    ],
    "correctIndex": 0,
    "explanation": "Removing unnecessary functionality and defaults reduces attack surface."
  },
  {
    "id": 264,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "A database server should accept connections only from application servers on TCP port 5432. Which control should enforce this on the host?",
    "options": [
      "Host-based firewall rule",
      "Full-disk encryption",
      "Screen lock",
      "BIOS password"
    ],
    "correctIndex": 0,
    "explanation": "A host firewall can restrict inbound traffic by source and destination port."
  },
  {
    "id": 265,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "Which endpoint technology detects suspicious behavior, preserves telemetry, and can isolate a compromised host?",
    "options": [
      "EDR",
      "RAID",
      "NTP",
      "UPS"
    ],
    "correctIndex": 0,
    "explanation": "Endpoint detection and response provides behavioral monitoring and response actions."
  },
  {
    "id": 266,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "A corporate laptop is lost while powered off. Which control MOST directly protects the data on the internal drive?",
    "options": [
      "Full-disk encryption",
      "Host firewall",
      "Application allowlisting",
      "DNS filtering"
    ],
    "correctIndex": 0,
    "explanation": "Full-disk encryption protects stored data if the device is lost or stolen."
  },
  {
    "id": 267,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "Which feature verifies the digital signatures of boot components before allowing them to execute?",
    "options": [
      "Secure Boot",
      "Split tunneling",
      "Port mirroring",
      "RAID striping"
    ],
    "correctIndex": 0,
    "explanation": "Secure Boot helps prevent untrusted bootloaders and low-level malware from loading."
  },
  {
    "id": 268,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "Which hardware component can securely store measured-boot values and disk-encryption key material?",
    "options": [
      "TPM",
      "NIC",
      "UPS",
      "Load balancer"
    ],
    "correctIndex": 0,
    "explanation": "A Trusted Platform Module provides protected cryptographic storage and platform measurement capabilities."
  },
  {
    "id": 269,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "A company needs to enforce screen locks, encryption, and remote wipe on employee phones. Which solution is MOST appropriate?",
    "options": [
      "MDM",
      "SIEM",
      "HSM",
      "WAF"
    ],
    "correctIndex": 0,
    "explanation": "Mobile device management applies and enforces device security policies."
  },
  {
    "id": 270,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "A company wants to remove corporate email and documents from a personal phone without erasing the user's photos. Which capability BEST meets the requirement?",
    "options": [
      "Selective wipe through MAM or containerization",
      "Full device destruction",
      "RAID rebuild",
      "DNSSEC validation"
    ],
    "correctIndex": 0,
    "explanation": "Managed application containers allow corporate data to be removed separately from personal data."
  },
  {
    "id": 271,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "Which control BEST separates corporate data from personal applications on a BYOD device?",
    "options": [
      "Work profile or secure container",
      "Shared device PIN",
      "Open Bluetooth",
      "Disabled encryption"
    ],
    "correctIndex": 0,
    "explanation": "A secure work profile or container isolates managed corporate data and applications."
  },
  {
    "id": 272,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "A company wants the strongest enterprise wireless authentication with unique user or device credentials. Which method should be used?",
    "options": [
      "802.1X with EAP-TLS",
      "WEP",
      "One shared WPA2 password",
      "Open Wi-Fi"
    ],
    "correctIndex": 0,
    "explanation": "EAP-TLS provides certificate-based mutual authentication for enterprise wireless."
  },
  {
    "id": 273,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "Which practice detects vulnerable open-source packages during a software build?",
    "options": [
      "Software composition analysis",
      "Disk imaging",
      "Port mirroring",
      "Data masking"
    ],
    "correctIndex": 0,
    "explanation": "Software composition analysis inventories dependencies and identifies known vulnerabilities."
  },
  {
    "id": 274,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "Which testing method analyzes source code without executing the application?",
    "options": [
      "Static application security testing",
      "Dynamic application security testing",
      "Packet capture",
      "Penetration test only"
    ],
    "correctIndex": 0,
    "explanation": "SAST examines source or compiled code without running the application."
  },
  {
    "id": 275,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "Which testing method evaluates a running web application from the outside for exploitable behavior?",
    "options": [
      "Dynamic application security testing",
      "Static application security testing",
      "Code formatting",
      "Disk sanitization"
    ],
    "correctIndex": 0,
    "explanation": "DAST tests a running application through its exposed interfaces."
  },
  {
    "id": 276,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "An unknown executable must be observed safely before it is allowed on production systems. What should the analyst use?",
    "options": [
      "Sandbox",
      "Domain controller",
      "Production database",
      "Public file share"
    ],
    "correctIndex": 0,
    "explanation": "A sandbox isolates execution while analysts observe behavior."
  },
  {
    "id": 277,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "A point-of-sale terminal should run only the payment application and approved operating-system processes. Which control is BEST?",
    "options": [
      "Application allowlisting",
      "Password spraying",
      "Port forwarding",
      "Data deduplication"
    ],
    "correctIndex": 0,
    "explanation": "Allowlisting restricts execution to explicitly approved software."
  },
  {
    "id": 278,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "What should occur BEFORE a major endpoint patch is deployed to all users?",
    "options": [
      "Test it on a representative pilot group",
      "Delete rollback files",
      "Disable backups",
      "Remove change approval"
    ],
    "correctIndex": 0,
    "explanation": "Pilot testing reduces the risk of broad compatibility or availability problems."
  },
  {
    "id": 279,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "A file-integrity monitor reports that a protected system binary changed outside an approved maintenance window. What should an analyst do FIRST?",
    "options": [
      "Validate whether the change was authorized",
      "Immediately delete all logs",
      "Disable the monitoring tool",
      "Publish the alert externally"
    ],
    "correctIndex": 0,
    "explanation": "The analyst should determine whether the alert represents approved activity or possible compromise."
  },
  {
    "id": 280,
    "domain": "4.0 Security Operations",
    "objective": "4.1 Security Techniques",
    "question": "Which configuration BEST protects a service account used by one scheduled task?",
    "options": [
      "Deny interactive logon and grant only required permissions",
      "Add it to domain administrators",
      "Allow use on every workstation",
      "Share its password with the team"
    ],
    "correctIndex": 0,
    "explanation": "Restricting logon type and privileges reduces misuse and lateral movement."
  },
  {
    "id": 281,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "A vulnerability team cannot determine whether a newly disclosed flaw affects the organization. Which missing capability is MOST likely responsible?",
    "options": [
      "Accurate hardware and software inventory",
      "Longer password history",
      "More public IP addresses",
      "Additional file compression"
    ],
    "correctIndex": 0,
    "explanation": "An accurate inventory is necessary to identify affected products and owners."
  },
  {
    "id": 282,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "Who should be accountable for defining the security requirements and acceptable use of a business application?",
    "options": [
      "Asset owner",
      "Data custodian only",
      "Internet service provider",
      "Certificate revocation authority"
    ],
    "correctIndex": 0,
    "explanation": "The asset owner is accountable for value, classification, and security requirements."
  },
  {
    "id": 283,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "What is the PRIMARY purpose of assigning a unique asset tag to each laptop?",
    "options": [
      "Track assignment and lifecycle",
      "Encrypt the drive",
      "Authenticate users",
      "Block malicious DNS"
    ],
    "correctIndex": 0,
    "explanation": "Asset tags support inventory, ownership, location, and lifecycle tracking."
  },
  {
    "id": 284,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "Which record BEST helps identify unauthorized or unlicensed applications installed across endpoints?",
    "options": [
      "Software inventory",
      "Network diagram only",
      "Data retention policy",
      "Certificate practice statement"
    ],
    "correctIndex": 0,
    "explanation": "A software inventory identifies installed applications, versions, ownership, and licensing status."
  },
  {
    "id": 285,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "Which security activity should occur BEFORE purchasing an internet-connected building-control device?",
    "options": [
      "Evaluate support lifecycle and security requirements",
      "Disable all logging requirements",
      "Accept default credentials permanently",
      "Connect it directly to production first"
    ],
    "correctIndex": 0,
    "explanation": "Security and lifecycle requirements should be considered during procurement."
  },
  {
    "id": 286,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "An employee receives a company laptop. Which record should be updated to support accountability?",
    "options": [
      "Asset assignment record",
      "Certificate revocation list",
      "DNS zone file",
      "Risk appetite statement"
    ],
    "correctIndex": 0,
    "explanation": "Assignment records identify who is responsible for an asset and where it is located."
  },
  {
    "id": 287,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "A network scan discovers an unmanaged server not listed in the configuration management database. What is the BEST next action?",
    "options": [
      "Identify the owner and place the asset under management",
      "Ignore it because it is operational",
      "Publish its credentials",
      "Delete all network logs"
    ],
    "correctIndex": 0,
    "explanation": "Unknown assets should be identified, authorized, inventoried, and secured."
  },
  {
    "id": 288,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "Which inventory attribute is MOST important for determining how a database backup should be protected?",
    "options": [
      "Data classification",
      "Rack position",
      "Monitor size",
      "Printer model"
    ],
    "correctIndex": 0,
    "explanation": "Classification drives handling, encryption, access, retention, and disposal requirements."
  },
  {
    "id": 289,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "A hard drive containing sensitive data is being retired and cannot be reused. Which disposal method is MOST appropriate?",
    "options": [
      "Physical destruction with documented custody",
      "Quick format",
      "Delete the files",
      "Remove the drive letter"
    ],
    "correctIndex": 0,
    "explanation": "Physical destruction with documented handling prevents recovery when reuse is not required."
  },
  {
    "id": 290,
    "domain": "4.0 Security Operations",
    "objective": "4.2 Asset Management",
    "question": "Which event should trigger removal of an asset from active inventory?",
    "options": [
      "Verified disposal or transfer out of organizational control",
      "Routine patching",
      "A user password reset",
      "A successful backup"
    ],
    "correctIndex": 0,
    "explanation": "Inventory should reflect the asset's lifecycle through verified disposal or transfer."
  },
  {
    "id": 291,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "Which scan type generally provides the MOST accurate information about missing patches and local configuration weaknesses?",
    "options": [
      "Credentialed scan",
      "Unauthenticated external scan",
      "Passive DNS review",
      "Port mirror only"
    ],
    "correctIndex": 0,
    "explanation": "Credentialed scans can inspect installed software, patch state, and local settings."
  },
  {
    "id": 292,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "What is the PRIMARY advantage of an unauthenticated external vulnerability scan?",
    "options": [
      "It shows what an outside attacker can observe",
      "It guarantees exploitation",
      "It reads every local configuration file",
      "It replaces penetration testing"
    ],
    "correctIndex": 0,
    "explanation": "An external unauthenticated scan approximates the exposure visible from outside."
  },
  {
    "id": 293,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "A scanner reports a critical vulnerability, but manual verification shows the affected component is not installed. What is this result?",
    "options": [
      "False positive",
      "False negative",
      "True positive",
      "Compensating control"
    ],
    "correctIndex": 0,
    "explanation": "A false positive reports a vulnerability that is not actually present."
  },
  {
    "id": 294,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "A vulnerable service is present, but the scanner fails to report it. What is this result?",
    "options": [
      "False negative",
      "False positive",
      "True negative",
      "Risk acceptance"
    ],
    "correctIndex": 0,
    "explanation": "A false negative misses a vulnerability that actually exists."
  },
  {
    "id": 295,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "What does a CVE identifier primarily provide?",
    "options": [
      "A standardized reference for a publicly known vulnerability",
      "A guaranteed exploitability score",
      "A vendor patch installation command",
      "A legal compliance waiver"
    ],
    "correctIndex": 0,
    "explanation": "CVE identifiers provide common names for publicly disclosed vulnerabilities."
  },
  {
    "id": 296,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "What does a CVSS base score primarily communicate?",
    "options": [
      "Technical severity",
      "Asset business value",
      "Patch deployment cost",
      "Annualized loss expectancy"
    ],
    "correctIndex": 0,
    "explanation": "CVSS provides a standardized technical severity measure."
  },
  {
    "id": 297,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "Two vulnerabilities both have a CVSS score of 9.8. Which additional factor should MOST influence which one is remediated first?",
    "options": [
      "Active exploitation and asset exposure",
      "Alphabetical order of hostnames",
      "The age of the analyst",
      "The color of the dashboard"
    ],
    "correctIndex": 0,
    "explanation": "Exploit activity, internet exposure, asset criticality, and compensating controls affect real risk."
  },
  {
    "id": 298,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "A vulnerability appears in CISA's Known Exploited Vulnerabilities catalog and affects an internet-facing system. What should the organization do?",
    "options": [
      "Prioritize remediation urgently",
      "Treat it as informational only",
      "Wait for a yearly review",
      "Disable vulnerability scanning"
    ],
    "correctIndex": 0,
    "explanation": "Known active exploitation and public exposure significantly increase risk."
  },
  {
    "id": 299,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "A vendor patch fixes a vulnerable service, but the application owner cannot tolerate downtime this week. Which action is BEST?",
    "options": [
      "Apply a documented compensating control and schedule the patch",
      "Ignore the vulnerability indefinitely",
      "Delete all logs",
      "Grant broader access"
    ],
    "correctIndex": 0,
    "explanation": "A temporary compensating control can reduce risk until the permanent remediation is applied."
  },
  {
    "id": 300,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "What should occur AFTER a critical patch is installed?",
    "options": [
      "Rescan or otherwise validate that the vulnerability is resolved",
      "Delete the change record",
      "Disable monitoring",
      "Remove the asset from inventory"
    ],
    "correctIndex": 0,
    "explanation": "Validation confirms that remediation succeeded and did not leave the issue exposed."
  },
  {
    "id": 301,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "A business owner accepts a vulnerability temporarily because remediation would interrupt a critical process. What should be created?",
    "options": [
      "Documented risk exception with expiration and owner",
      "Shared administrator password",
      "Permanent scanner exclusion without review",
      "Public vulnerability disclosure"
    ],
    "correctIndex": 0,
    "explanation": "Exceptions should be formally approved, time-bounded, tracked, and periodically reviewed."
  },
  {
    "id": 302,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "Which vulnerability report is MOST useful to an executive audience?",
    "options": [
      "Risk trends, critical exposure, and remediation status",
      "Raw packet captures only",
      "Every scanner plugin output without context",
      "A list of MAC addresses only"
    ],
    "correctIndex": 0,
    "explanation": "Executives need concise business-risk and remediation information."
  },
  {
    "id": 303,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "Which vulnerability report is MOST useful to a system administrator responsible for remediation?",
    "options": [
      "Affected hosts, evidence, severity, and fix guidance",
      "Only the annual risk appetite statement",
      "Employee training attendance",
      "Marketing analytics"
    ],
    "correctIndex": 0,
    "explanation": "Technical owners need actionable host-level details and remediation guidance."
  },
  {
    "id": 304,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "Which activity actively attempts to exploit weaknesses under defined rules of engagement?",
    "options": [
      "Penetration test",
      "Vulnerability scan",
      "Configuration inventory",
      "Business impact analysis"
    ],
    "correctIndex": 0,
    "explanation": "A penetration test validates exploitability and impact within an authorized scope."
  },
  {
    "id": 305,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "Why should vulnerability-scanning scope be approved before scanning begins?",
    "options": [
      "To avoid disrupting or testing unauthorized systems",
      "To guarantee zero false positives",
      "To eliminate the need for credentials",
      "To bypass change control"
    ],
    "correctIndex": 0,
    "explanation": "Approved scope defines authorization, targets, timing, and safety constraints."
  },
  {
    "id": 306,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "A fragile industrial controller may fail under aggressive scanning. What is the BEST approach?",
    "options": [
      "Use vendor-approved passive or carefully tuned methods",
      "Run every intrusive plugin immediately",
      "Disable segmentation first",
      "Expose the controller to the internet"
    ],
    "correctIndex": 0,
    "explanation": "Sensitive OT systems often require passive discovery or carefully controlled scanning."
  },
  {
    "id": 307,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "Which sequence BEST represents a vulnerability-management lifecycle?",
    "options": [
      "Identify, analyze, remediate, validate, report",
      "Report, ignore, exploit, delete, repeat",
      "Encrypt, archive, print, scan, discard",
      "Purchase, advertise, decommission, recover, classify"
    ],
    "correctIndex": 0,
    "explanation": "Vulnerability management includes discovery, analysis, remediation, validation, and reporting."
  },
  {
    "id": 308,
    "domain": "4.0 Security Operations",
    "objective": "4.3 Vulnerability Management",
    "question": "Repeated findings show the same insecure configuration reappearing after every server rebuild. Which action BEST addresses the root cause?",
    "options": [
      "Correct the deployment baseline or automation",
      "Continue fixing each server manually forever",
      "Suppress the finding",
      "Reduce log retention"
    ],
    "correctIndex": 0,
    "explanation": "Updating the source baseline prevents recurrence across future deployments."
  },
  {
    "id": 309,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "Which platform centralizes logs from many systems, correlates events, and generates security alerts?",
    "options": [
      "SIEM",
      "UPS",
      "RAID",
      "HSM"
    ],
    "correctIndex": 0,
    "explanation": "A SIEM aggregates and analyzes security event data from multiple sources."
  },
  {
    "id": 310,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "A phishing alert automatically enriches indicators, opens a ticket, and removes the message from user mailboxes. Which technology enables this workflow?",
    "options": [
      "SOAR",
      "NAT",
      "PKI",
      "RAID"
    ],
    "correctIndex": 0,
    "explanation": "SOAR orchestrates tools and automates repeatable response processes."
  },
  {
    "id": 311,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "A user who normally downloads 20 MB per day suddenly transfers 30 GB at 3 a.m. Which capability is BEST suited to detect this anomaly?",
    "options": [
      "UEBA",
      "RAID",
      "DNSSEC",
      "Tokenization"
    ],
    "correctIndex": 0,
    "explanation": "User and entity behavior analytics detects deviations from established behavior."
  },
  {
    "id": 312,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "A detection rule generates hundreds of alerts from an approved vulnerability scanner. What should the analyst do?",
    "options": [
      "Tune the rule using documented exceptions or context",
      "Disable all monitoring",
      "Delete the scanner",
      "Ignore every alert permanently"
    ],
    "correctIndex": 0,
    "explanation": "Tuning reduces known benign alerts while preserving meaningful detection."
  },
  {
    "id": 313,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "A SIEM alert indicates malware, but investigation confirms the activity came from an approved administrative script. How should the alert be classified?",
    "options": [
      "False positive",
      "False negative",
      "True positive",
      "Residual risk"
    ],
    "correctIndex": 0,
    "explanation": "The alert fired, but the activity was benign and authorized."
  },
  {
    "id": 314,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "Why is a baseline of normal network traffic useful?",
    "options": [
      "It helps identify anomalous behavior",
      "It encrypts traffic",
      "It patches endpoints",
      "It replaces authentication"
    ],
    "correctIndex": 0,
    "explanation": "A baseline provides a reference for detecting deviations and unusual patterns."
  },
  {
    "id": 315,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "Why should servers, network devices, and security tools use synchronized time?",
    "options": [
      "To correlate events accurately across systems",
      "To increase encryption key length",
      "To replace backups",
      "To prevent all phishing"
    ],
    "correctIndex": 0,
    "explanation": "Consistent timestamps are essential for investigation timelines and correlation."
  },
  {
    "id": 316,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "What is the PRIMARY security benefit of forwarding logs to a centralized remote collector?",
    "options": [
      "Central analysis and reduced risk of local tampering",
      "Automatic data encryption at rest in every case",
      "Removal of all false positives",
      "Elimination of retention requirements"
    ],
    "correctIndex": 0,
    "explanation": "Central collection supports correlation and preserves evidence if a host is compromised."
  },
  {
    "id": 317,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "What should MOST directly determine how long authentication logs are retained?",
    "options": [
      "Legal, regulatory, operational, and investigative requirements",
      "The analyst's personal preference",
      "The number of monitor screens",
      "The network cable color"
    ],
    "correctIndex": 0,
    "explanation": "Retention periods should reflect compliance, business, and investigation needs."
  },
  {
    "id": 318,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "A SIEM receives a feed of known malicious domains and compares them with DNS logs. What capability is being added?",
    "options": [
      "Threat-intelligence enrichment",
      "Data deduplication",
      "Load balancing",
      "Key escrow"
    ],
    "correctIndex": 0,
    "explanation": "Threat intelligence adds context that helps identify known malicious indicators."
  },
  {
    "id": 319,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "A rule alerts when a new administrator account is created and then used from an unusual country. What type of detection is this?",
    "options": [
      "Correlation of multiple events",
      "Single static signature only",
      "Data masking",
      "Backup validation"
    ],
    "correctIndex": 0,
    "explanation": "The rule combines identity, timing, and location events to detect a suspicious sequence."
  },
  {
    "id": 320,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "Which metric BEST identifies systems that are not sending expected logs to the SIEM?",
    "options": [
      "Log-source coverage or heartbeat status",
      "Password length",
      "RTO",
      "Asset depreciation"
    ],
    "correctIndex": 0,
    "explanation": "Heartbeat and coverage monitoring reveal missing or failed telemetry sources."
  },
  {
    "id": 321,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "An alert concerns a confirmed compromise of an internet-facing domain controller. Which factor should MOST increase its priority?",
    "options": [
      "Asset criticality and confirmed impact",
      "The alert's alphabetical position",
      "The user's screen resolution",
      "The length of the hostname"
    ],
    "correctIndex": 0,
    "explanation": "Priority should reflect confidence, exposure, asset importance, and business impact."
  },
  {
    "id": 322,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "Which dashboard content is MOST useful for a security operations manager?",
    "options": [
      "Alert trends, response times, backlog, and high-risk incidents",
      "Only raw hexadecimal packet data",
      "Employee vacation schedules",
      "Printer toner levels"
    ],
    "correctIndex": 0,
    "explanation": "Operational dashboards should summarize workload, risk, performance, and trends."
  },
  {
    "id": 323,
    "domain": "4.0 Security Operations",
    "objective": "4.4 Security Monitoring",
    "question": "A cloud account is compromised, but the organization has no record of API calls. Which control was MOST likely missing?",
    "options": [
      "Cloud audit logging",
      "Full-disk encryption",
      "RAID 5",
      "Screen privacy filters"
    ],
    "correctIndex": 0,
    "explanation": "Cloud audit logs record management and API activity needed for detection and investigation."
  },
  {
    "id": 324,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "A public web server should accept HTTPS from any internet address and SSH only from the administrator subnet. Which rule set is BEST?",
    "options": [
      "Allow TCP 443 from any, allow TCP 22 from the admin subnet, then deny other inbound traffic",
      "Allow all inbound traffic and log it",
      "Allow TCP 22 from any and block TCP 443",
      "Block all outbound traffic only"
    ],
    "correctIndex": 0,
    "explanation": "The rule set permits required services, restricts management access, and applies a default deny."
  },
  {
    "id": 325,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "A newly added firewall rule permits traffic that should have matched an earlier deny rule. What should an administrator review FIRST?",
    "options": [
      "Rule order",
      "Disk encryption status",
      "Password history",
      "Data classification"
    ],
    "correctIndex": 0,
    "explanation": "Firewalls commonly process rules in order, so placement can change the effective policy."
  },
  {
    "id": 326,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "A network sensor detects malicious traffic and sends an alert but does not block the connection. How is it operating?",
    "options": [
      "IDS",
      "IPS",
      "WAF in blocking mode",
      "NAC enforcement point"
    ],
    "correctIndex": 0,
    "explanation": "An IDS detects and alerts, while an inline IPS can block."
  },
  {
    "id": 327,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "Which deployment enables a network prevention system to stop traffic before it reaches a protected server?",
    "options": [
      "Inline IPS",
      "Passive IDS on a mirrored port",
      "Offline packet capture",
      "Log collector only"
    ],
    "correctIndex": 0,
    "explanation": "An IPS must sit inline with the traffic path to block packets."
  },
  {
    "id": 328,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "Which control prevents users from resolving domains known to distribute malware?",
    "options": [
      "DNS filtering",
      "RAID",
      "NTP",
      "Certificate pinning"
    ],
    "correctIndex": 0,
    "explanation": "DNS filtering blocks or redirects requests for prohibited or malicious domains."
  },
  {
    "id": 329,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "A company needs to block uploads to personal file-sharing sites while allowing approved business SaaS applications. Which control BEST fits?",
    "options": [
      "Secure web gateway",
      "UPS",
      "HSM",
      "Layer 1 repeater"
    ],
    "correctIndex": 0,
    "explanation": "A secure web gateway can enforce URL, application, and content policy for web traffic."
  },
  {
    "id": 330,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "A DLP system finds tax identification numbers in an outbound email. What should the policy do if external transmission is prohibited?",
    "options": [
      "Block the message and alert",
      "Increase the email's priority",
      "Disable encryption",
      "Add the recipient to domain administrators"
    ],
    "correctIndex": 0,
    "explanation": "DLP can identify regulated data and stop unauthorized disclosure."
  },
  {
    "id": 331,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "A contractor's laptop lacks required endpoint protection. Which NAC response is MOST appropriate?",
    "options": [
      "Place the device in a remediation network",
      "Grant unrestricted production access",
      "Add the user to privileged groups",
      "Disable all network logging"
    ],
    "correctIndex": 0,
    "explanation": "A remediation or quarantine network allows the device to become compliant without exposing production."
  },
  {
    "id": 332,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "Which capability distinguishes XDR from a tool focused only on endpoint telemetry?",
    "options": [
      "Correlation across endpoints, identity, email, network, or cloud sources",
      "Use of only local antivirus signatures",
      "Removal of all cloud data",
      "Requirement for no central management"
    ],
    "correctIndex": 0,
    "explanation": "XDR correlates detections and response across multiple security layers."
  },
  {
    "id": 333,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "Which DNS record identifies servers authorized to send mail for a domain?",
    "options": [
      "SPF",
      "DKIM",
      "DMARC",
      "PTR only"
    ],
    "correctIndex": 0,
    "explanation": "SPF publishes authorized sending hosts for a domain."
  },
  {
    "id": 334,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "Which mechanism adds a cryptographic signature to email so recipients can verify that signed content was not altered?",
    "options": [
      "DKIM",
      "SPF",
      "DMARC",
      "POP3"
    ],
    "correctIndex": 0,
    "explanation": "DKIM signs selected message headers and content using a domain-controlled private key."
  },
  {
    "id": 335,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "Which policy tells receiving systems how to handle messages that fail aligned SPF or DKIM checks?",
    "options": [
      "DMARC",
      "SMTP AUTH",
      "IMAP",
      "S/MIME only"
    ],
    "correctIndex": 0,
    "explanation": "DMARC publishes handling and reporting policy based on aligned SPF and DKIM results."
  },
  {
    "id": 336,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "An employee receives an executable attachment inside a password-protected archive. Which control is MOST useful for detecting malicious behavior?",
    "options": [
      "Attachment sandboxing after controlled extraction",
      "RAID mirroring",
      "NTP synchronization",
      "Network address translation"
    ],
    "correctIndex": 0,
    "explanation": "Sandboxing can execute and observe suspicious content in isolation."
  },
  {
    "id": 337,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "A reverse proxy terminates TLS and forwards requests to internal application servers. Which security benefit does this provide?",
    "options": [
      "It hides backend systems and centralizes inspection",
      "It replaces all authorization",
      "It eliminates patching",
      "It prevents every insider threat"
    ],
    "correctIndex": 0,
    "explanation": "A reverse proxy reduces direct backend exposure and can centralize TLS and filtering."
  },
  {
    "id": 338,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "Which firewall policy BEST supports least privilege between a user VLAN and a database VLAN?",
    "options": [
      "Allow only required application-server flows and deny direct user access",
      "Allow all east-west traffic",
      "Use one shared VLAN",
      "Disable logging between zones"
    ],
    "correctIndex": 0,
    "explanation": "Tightly defined interzone rules restrict unnecessary access and lateral movement."
  },
  {
    "id": 339,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "Which control alerts when a protected configuration file changes unexpectedly?",
    "options": [
      "File integrity monitoring",
      "Load balancing",
      "Data tokenization",
      "NAT"
    ],
    "correctIndex": 0,
    "explanation": "File integrity monitoring compares files against trusted values or approved changes."
  },
  {
    "id": 340,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "A fake database record triggers an alert if queried or exported. Which enterprise security control is this?",
    "options": [
      "Honeytoken",
      "RAID parity",
      "Certificate authority",
      "Forward proxy"
    ],
    "correctIndex": 0,
    "explanation": "A honeytoken is decoy data designed to reveal unauthorized access."
  },
  {
    "id": 341,
    "domain": "4.0 Security Operations",
    "objective": "4.5 Enterprise Security",
    "question": "After modifying firewall rules, what should the administrator do NEXT?",
    "options": [
      "Test permitted and denied paths and document the result",
      "Delete the previous configuration immediately",
      "Disable logging",
      "Share the administrator password"
    ],
    "correctIndex": 0,
    "explanation": "Validation confirms that the change enforces the intended policy without unintended impact."
  },
  {
    "id": 342,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "A new employee is assigned access based on job title and department. Which process is being performed?",
    "options": [
      "Provisioning",
      "Deprovisioning",
      "Federation",
      "Accounting"
    ],
    "correctIndex": 0,
    "explanation": "Provisioning creates accounts and grants approved access for a user."
  },
  {
    "id": 343,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "An employee leaves the company. What should occur FIRST to reduce access risk?",
    "options": [
      "Disable accounts and revoke active sessions",
      "Wait for the next quarterly review",
      "Transfer the password to a coworker",
      "Increase the employee's privileges"
    ],
    "correctIndex": 0,
    "explanation": "Prompt deprovisioning prevents continued use of accounts and tokens."
  },
  {
    "id": 344,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "A user transfers from finance to marketing. Which action BEST prevents privilege accumulation?",
    "options": [
      "Remove finance access before or while granting marketing access",
      "Keep all previous access indefinitely",
      "Create a shared marketing account",
      "Disable audit logging"
    ],
    "correctIndex": 0,
    "explanation": "Access should be adjusted for the new role so old privileges do not accumulate."
  },
  {
    "id": 345,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "Employees authenticate once and then access several internal applications without entering credentials again. Which capability is this?",
    "options": [
      "Single sign-on",
      "Password spraying",
      "Key escrow",
      "Network segmentation"
    ],
    "correctIndex": 0,
    "explanation": "SSO allows one authentication event to support access to multiple applications."
  },
  {
    "id": 346,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "A company uses its own identity provider to authenticate users to a partner's SaaS application. Which concept is being used?",
    "options": [
      "Federation",
      "Local-only authentication",
      "Data masking",
      "Certificate revocation"
    ],
    "correctIndex": 0,
    "explanation": "Federation allows one trusted identity domain to provide assertions to another service."
  },
  {
    "id": 347,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "Which technology is commonly used to exchange browser-based authentication assertions between an identity provider and a service provider?",
    "options": [
      "SAML",
      "SNMP",
      "NTP",
      "TFTP"
    ],
    "correctIndex": 0,
    "explanation": "SAML is commonly used for enterprise web federation and SSO."
  },
  {
    "id": 348,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "A user allows a photo-printing application to read selected cloud photos without giving the application the user's password. Which framework is MOST associated with this?",
    "options": [
      "OAuth",
      "Kerberos",
      "LDAP",
      "RADIUS"
    ],
    "correctIndex": 0,
    "explanation": "OAuth supports delegated authorization to limited resources."
  },
  {
    "id": 349,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "An application needs authentication information about a user in addition to OAuth authorization. Which protocol is MOST appropriate?",
    "options": [
      "OpenID Connect",
      "TACACS+",
      "SNMPv3",
      "IPsec AH"
    ],
    "correctIndex": 0,
    "explanation": "OpenID Connect adds an identity layer and ID token to OAuth 2.0."
  },
  {
    "id": 350,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "A user signs in with a password and a hardware security key. Why is this multifactor authentication?",
    "options": [
      "It combines knowledge and possession factors",
      "It uses two passwords",
      "It uses two possession factors",
      "It uses only location"
    ],
    "correctIndex": 0,
    "explanation": "The password is something the user knows, and the key is something the user has."
  },
  {
    "id": 351,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "Which item is an inherence factor?",
    "options": [
      "Fingerprint",
      "PIN",
      "Smart card",
      "Security token"
    ],
    "correctIndex": 0,
    "explanation": "Inherence factors are biometric characteristics—something the user is."
  },
  {
    "id": 352,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "Which technology BEST supports phishing-resistant passwordless authentication with a hardware-backed public-key credential?",
    "options": [
      "FIDO2/WebAuthn",
      "PAP",
      "WEP",
      "SNMPv2c"
    ],
    "correctIndex": 0,
    "explanation": "FIDO2/WebAuthn uses asymmetric credentials bound to authenticators and origins."
  },
  {
    "id": 353,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "Administrators receive time-limited privileged credentials, and their sessions are recorded. Which solution provides this?",
    "options": [
      "PAM",
      "DLP",
      "NAC",
      "CDN"
    ],
    "correctIndex": 0,
    "explanation": "Privileged access management controls, monitors, and audits high-risk administrative access."
  },
  {
    "id": 354,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "An administrator receives database-owner rights only for a two-hour approved maintenance window. Which concept is this?",
    "options": [
      "Just-in-time access",
      "Permanent privilege",
      "Implicit trust",
      "Data residency"
    ],
    "correctIndex": 0,
    "explanation": "Just-in-time access grants elevated rights only when needed and for a limited duration."
  },
  {
    "id": 355,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "Permissions are assigned to roles such as nurse, pharmacist, and billing specialist. Which access-control model is this?",
    "options": [
      "RBAC",
      "DAC",
      "MAC",
      "ABAC only"
    ],
    "correctIndex": 0,
    "explanation": "Role-based access control assigns permissions according to job functions."
  },
  {
    "id": 356,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "Access is allowed only when the user is in the finance department, the device is compliant, and the request occurs from an approved country. Which model is this?",
    "options": [
      "ABAC",
      "RBAC only",
      "DAC",
      "MAC"
    ],
    "correctIndex": 0,
    "explanation": "Attribute-based access control evaluates multiple subject, object, action, and environmental attributes."
  },
  {
    "id": 357,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "A system uses security labels and clearances, and individual file owners cannot change the access policy. Which model is this?",
    "options": [
      "MAC",
      "DAC",
      "RBAC",
      "Rule-based firewall only"
    ],
    "correctIndex": 0,
    "explanation": "Mandatory access control enforces centrally defined labels and clearances."
  },
  {
    "id": 358,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "What is the PRIMARY purpose of a periodic user-access review?",
    "options": [
      "Confirm access remains appropriate and remove excess privileges",
      "Increase the number of shared accounts",
      "Disable all audit records",
      "Replace encryption keys"
    ],
    "correctIndex": 0,
    "explanation": "Access reviews identify stale, excessive, or inappropriate permissions."
  },
  {
    "id": 359,
    "domain": "4.0 Security Operations",
    "objective": "4.6 Identity and Access Management",
    "question": "A fingerprint reader frequently rejects authorized users. Which biometric metric is too high?",
    "options": [
      "False rejection rate",
      "False acceptance rate",
      "Crossover error rate only",
      "Hash collision rate"
    ],
    "correctIndex": 0,
    "explanation": "A false rejection occurs when a legitimate user is denied."
  },
  {
    "id": 360,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "A script disables accounts automatically when HR marks an employee as terminated. What is the PRIMARY security benefit?",
    "options": [
      "Faster and more consistent deprovisioning",
      "Elimination of all insider threats",
      "Longer password reuse",
      "Removal of audit trails"
    ],
    "correctIndex": 0,
    "explanation": "Automation reduces delay and inconsistency in repetitive access-control tasks."
  },
  {
    "id": 361,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "A playbook receives a malware alert, enriches the file hash, isolates the endpoint, and opens a case. Which capability is demonstrated?",
    "options": [
      "Security orchestration",
      "Data deduplication",
      "Certificate pinning",
      "RAID striping"
    ],
    "correctIndex": 0,
    "explanation": "Orchestration coordinates multiple tools and response actions in a defined workflow."
  },
  {
    "id": 362,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "Which benefit is MOST directly gained by automating repetitive firewall-rule validation?",
    "options": [
      "Consistency and reduced human error",
      "Guaranteed absence of vulnerabilities",
      "Removal of change management",
      "Unlimited network bandwidth"
    ],
    "correctIndex": 0,
    "explanation": "Automation performs repeatable checks consistently and reduces manual mistakes."
  },
  {
    "id": 363,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "What is the GREATEST risk of deploying an untested remediation script across thousands of endpoints?",
    "options": [
      "Rapidly propagating an incorrect action",
      "Increasing encryption strength",
      "Improving asset inventory",
      "Reducing privilege"
    ],
    "correctIndex": 0,
    "explanation": "Automation can amplify mistakes quickly at enterprise scale."
  },
  {
    "id": 364,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "Which control BEST reduces the risk of a security automation playbook taking destructive action on a false positive?",
    "options": [
      "Human approval for high-impact steps",
      "Permanent domain-admin credentials in the script",
      "Disabled logging",
      "No rollback capability"
    ],
    "correctIndex": 0,
    "explanation": "Approval gates are appropriate for actions with significant operational impact."
  },
  {
    "id": 365,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "A script needs an API credential to quarantine endpoints. Where should the credential be stored?",
    "options": [
      "A secrets vault",
      "Directly in source code",
      "A public repository",
      "A shared chat message"
    ],
    "correctIndex": 0,
    "explanation": "Secrets should be stored in a protected vault and retrieved securely at runtime."
  },
  {
    "id": 366,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "Why should security scripts and playbooks be stored in version control?",
    "options": [
      "To track changes, review code, and support rollback",
      "To eliminate testing",
      "To make secrets public",
      "To disable accountability"
    ],
    "correctIndex": 0,
    "explanation": "Version control provides traceability, collaboration, and recovery of prior versions."
  },
  {
    "id": 367,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "A SOAR platform needs to quarantine a host through an EDR product. What is the MOST likely integration method?",
    "options": [
      "Vendor API",
      "Screen scraping only",
      "Physical cable swap",
      "DNS zone transfer"
    ],
    "correctIndex": 0,
    "explanation": "Security platforms commonly integrate through authenticated APIs."
  },
  {
    "id": 368,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "Which practice BEST prevents an insecure cloud firewall rule from being automatically deployed?",
    "options": [
      "Policy checks in the CI/CD pipeline",
      "Disabling code review",
      "Using shared root credentials",
      "Removing test environments"
    ],
    "correctIndex": 0,
    "explanation": "Automated policy validation can block insecure infrastructure definitions before deployment."
  },
  {
    "id": 369,
    "domain": "4.0 Security Operations",
    "objective": "4.7 Automation and Orchestration",
    "question": "After an automated containment action runs, what should be recorded?",
    "options": [
      "Trigger, actions, results, and approvals",
      "Only the script filename",
      "No audit information",
      "The analyst's personal password"
    ],
    "correctIndex": 0,
    "explanation": "Detailed logs provide accountability, troubleshooting, and evidence of automated actions."
  },
  {
    "id": 370,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "A security team develops contact lists, tools, playbooks, and training before an incident occurs. Which incident-response phase is this?",
    "options": [
      "Preparation",
      "Containment",
      "Eradication",
      "Recovery"
    ],
    "correctIndex": 0,
    "explanation": "Preparation establishes people, processes, and technology before an incident."
  },
  {
    "id": 371,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "Analysts confirm that an alert represents an actual compromise and determine affected systems. Which phase is this?",
    "options": [
      "Detection and analysis",
      "Recovery",
      "Lessons learned",
      "Preparation"
    ],
    "correctIndex": 0,
    "explanation": "Detection and analysis validate the incident and establish scope and impact."
  },
  {
    "id": 372,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "A compromised workstation is disconnected from the network to stop lateral movement. Which phase is this?",
    "options": [
      "Containment",
      "Eradication",
      "Recovery",
      "Preparation"
    ],
    "correctIndex": 0,
    "explanation": "Containment limits spread and further damage."
  },
  {
    "id": 373,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "Malware persistence mechanisms are removed and the exploited vulnerability is patched. Which phase is this?",
    "options": [
      "Eradication",
      "Containment",
      "Preparation",
      "Notification only"
    ],
    "correctIndex": 0,
    "explanation": "Eradication removes malicious artifacts and addresses the root cause."
  },
  {
    "id": 374,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "A rebuilt server is returned to production and monitored closely for signs of reinfection. Which phase is this?",
    "options": [
      "Recovery",
      "Detection",
      "Preparation",
      "Triage only"
    ],
    "correctIndex": 0,
    "explanation": "Recovery restores normal operations and verifies that systems remain clean."
  },
  {
    "id": 375,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "After an incident, the team updates controls and playbooks based on what occurred. What activity is this?",
    "options": [
      "Lessons learned",
      "Initial containment",
      "Evidence acquisition",
      "Risk transfer"
    ],
    "correctIndex": 0,
    "explanation": "Lessons learned identifies improvements after recovery."
  },
  {
    "id": 376,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "Which incident should receive the HIGHEST priority?",
    "options": [
      "Confirmed ransomware spreading through domain controllers",
      "A blocked phishing email with no user interaction",
      "An expired test certificate in a lab",
      "A single failed login from a known user"
    ],
    "correctIndex": 0,
    "explanation": "Active widespread compromise of critical identity infrastructure has the greatest impact and urgency."
  },
  {
    "id": 377,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "A web server was repeatedly compromised because an insecure deployment template recreated the same vulnerable setting. What should root-cause analysis identify?",
    "options": [
      "The defective deployment template",
      "Only the latest attacker IP",
      "The color of the server rack",
      "The analyst's shift schedule"
    ],
    "correctIndex": 0,
    "explanation": "Root-cause analysis addresses the underlying process or control failure that allowed recurrence."
  },
  {
    "id": 378,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "An analyst proactively searches endpoint and network telemetry for evidence of credential dumping even though no alert has fired. What activity is this?",
    "options": [
      "Threat hunting",
      "Vulnerability scanning",
      "Risk acceptance",
      "Data masking"
    ],
    "correctIndex": 0,
    "explanation": "Threat hunting proactively searches for hidden malicious activity using hypotheses and telemetry."
  },
  {
    "id": 379,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "Executives and technical staff discuss how they would respond to a simulated data breach without changing production systems. What is this?",
    "options": [
      "Tabletop exercise",
      "Full interruption test",
      "Penetration test",
      "Forensic acquisition"
    ],
    "correctIndex": 0,
    "explanation": "A tabletop exercise is a discussion-based incident-response test."
  },
  {
    "id": 380,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "Who should coordinate public statements during a major breach?",
    "options": [
      "Designated legal and communications personnel",
      "Any available analyst",
      "The attacker",
      "An unrelated vendor"
    ],
    "correctIndex": 0,
    "explanation": "Approved communications and legal teams manage accurate, consistent, and compliant messaging."
  },
  {
    "id": 381,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "An investigator records who collected a drive, when it was transferred, and where it was stored. What is being maintained?",
    "options": [
      "Chain of custody",
      "Key escrow",
      "Data residency",
      "Load balancing"
    ],
    "correctIndex": 0,
    "explanation": "Chain of custody documents evidence possession and handling."
  },
  {
    "id": 382,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "What should an investigator do BEFORE analyzing a suspect hard drive?",
    "options": [
      "Create a forensic image and verify its hash",
      "Modify the original files",
      "Install tools directly on the drive",
      "Delete temporary files"
    ],
    "correctIndex": 0,
    "explanation": "Analysis should be performed on a verified forensic copy to preserve the original."
  },
  {
    "id": 383,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "Which evidence should generally be collected FIRST when a running system may be powered down?",
    "options": [
      "Volatile memory",
      "Archived tape backup",
      "Printed policy",
      "Decommissioned disk"
    ],
    "correctIndex": 0,
    "explanation": "RAM and other volatile data may disappear when power is lost."
  },
  {
    "id": 384,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "A company receives notice of litigation involving employee email. What should it do?",
    "options": [
      "Suspend normal deletion for relevant records",
      "Delete older messages immediately",
      "Disable all email logging",
      "Publish the messages publicly"
    ],
    "correctIndex": 0,
    "explanation": "A legal hold preserves potentially relevant evidence despite normal retention schedules."
  },
  {
    "id": 385,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "Why is a cryptographic hash calculated when evidence is acquired?",
    "options": [
      "To demonstrate the evidence has not changed",
      "To encrypt the evidence",
      "To classify the evidence",
      "To compress the evidence"
    ],
    "correctIndex": 0,
    "explanation": "Matching hashes support integrity verification of forensic copies."
  },
  {
    "id": 386,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "A compromised production server supports a critical medical service. What should guide the containment decision?",
    "options": [
      "Balance operational impact with the risk of continued compromise",
      "Always power it off immediately regardless of impact",
      "Ignore the incident until maintenance",
      "Delete all logs before isolation"
    ],
    "correctIndex": 0,
    "explanation": "Containment must consider safety, availability, evidence, and the risk of further harm."
  },
  {
    "id": 387,
    "domain": "4.0 Security Operations",
    "objective": "4.8 Incident Response",
    "question": "Which condition BEST supports closing an incident?",
    "options": [
      "Recovery is validated, evidence is retained, and required reporting is complete",
      "The first alert has stopped",
      "The attacker IP was blocked once",
      "The affected user changed a password"
    ],
    "correctIndex": 0,
    "explanation": "Closure should follow validated recovery, documentation, evidence handling, and required communication."
  },
  {
    "id": 388,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which data source BEST shows repeated failed logins followed by a successful login for the same account?",
    "options": [
      "Authentication logs",
      "HVAC logs",
      "Printer inventory",
      "Certificate practice statement"
    ],
    "correctIndex": 0,
    "explanation": "Authentication logs record login attempts, sources, outcomes, and account details."
  },
  {
    "id": 389,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which data source is MOST useful for identifying hosts that resolved a known command-and-control domain?",
    "options": [
      "DNS query logs",
      "UPS battery logs",
      "Physical badge inventory",
      "RAID controller status"
    ],
    "correctIndex": 0,
    "explanation": "DNS logs show which clients requested particular domain names."
  },
  {
    "id": 390,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which data source BEST confirms whether a host attempted an outbound connection to a blocked IP address?",
    "options": [
      "Firewall logs",
      "Password policy",
      "Asset depreciation report",
      "Certificate request"
    ],
    "correctIndex": 0,
    "explanation": "Firewall logs record allowed and denied network connections."
  },
  {
    "id": 391,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which source is MOST likely to show a process spawning PowerShell with an encoded command?",
    "options": [
      "EDR or endpoint process telemetry",
      "DNS zone file",
      "Physical access log",
      "Data retention schedule"
    ],
    "correctIndex": 0,
    "explanation": "Endpoint telemetry records process creation, parent-child relationships, and command lines."
  },
  {
    "id": 392,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which log entry would MOST strongly indicate directory traversal attempts?",
    "options": [
      "Repeated requests containing `../` sequences",
      "A normal GET request for `/index.html`",
      "A successful TLS handshake",
      "A DHCP lease renewal"
    ],
    "correctIndex": 0,
    "explanation": "Traversal attempts commonly include parent-directory sequences in requested paths."
  },
  {
    "id": 393,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which source BEST identifies who changed a cloud storage bucket from private to public?",
    "options": [
      "Cloud control-plane audit logs",
      "Endpoint antivirus signature list",
      "UPS event history",
      "Local printer queue"
    ],
    "correctIndex": 0,
    "explanation": "Cloud audit logs record management API actions, identities, and timestamps."
  },
  {
    "id": 394,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "An analyst needs to identify which internal hosts communicated with an external IP and how much data was transferred, but full packets are unavailable. Which source is BEST?",
    "options": [
      "NetFlow or similar flow records",
      "Password history",
      "Certificate revocation list",
      "File hash database only"
    ],
    "correctIndex": 0,
    "explanation": "Flow records summarize source, destination, ports, timing, and traffic volume."
  },
  {
    "id": 395,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which data source provides the MOST detailed view of protocol headers and unencrypted payloads for a network session?",
    "options": [
      "Packet capture",
      "Asset inventory",
      "Risk register",
      "Data classification policy"
    ],
    "correctIndex": 0,
    "explanation": "Packet captures contain individual frames and packets for detailed analysis."
  },
  {
    "id": 396,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which source BEST traces whether a phishing message was delivered, forwarded, or quarantined?",
    "options": [
      "Email gateway and message-trace logs",
      "RAID logs",
      "BIOS event logs",
      "Physical visitor log"
    ],
    "correctIndex": 0,
    "explanation": "Mail-system logs track message routing and security actions."
  },
  {
    "id": 397,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "A user claims an application approved a transaction without authorization. Which source should be reviewed FIRST?",
    "options": [
      "Application audit logs",
      "DNS cache",
      "UPS logs",
      "Wi-Fi signal survey"
    ],
    "correctIndex": 0,
    "explanation": "Application audit logs should record user actions, decisions, and transaction events."
  },
  {
    "id": 398,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which information is file metadata rather than file content?",
    "options": [
      "Creation time, owner, and permissions",
      "The paragraphs inside a document",
      "The image pixels",
      "The encrypted payload only"
    ],
    "correctIndex": 0,
    "explanation": "Metadata describes properties and context about a file."
  },
  {
    "id": 399,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "Which source BEST shows that a host was vulnerable before an incident and whether remediation had been scheduled?",
    "options": [
      "Vulnerability scan history and tickets",
      "Current weather data",
      "Printer configuration",
      "Certificate transparency log only"
    ],
    "correctIndex": 0,
    "explanation": "Historical scan findings and remediation records establish prior exposure and response."
  },
  {
    "id": 400,
    "domain": "4.0 Security Operations",
    "objective": "4.9 Security Data Sources",
    "question": "An analyst needs to list active TCP connections and listening ports on a Windows host. Which command is MOST appropriate?",
    "options": [
      "netstat or Get-NetTCPConnection",
      "format",
      "chkdsk only",
      "nslookup only"
    ],
    "correctIndex": 0,
    "explanation": "These tools display active and listening network connections."
  },
  {
    "id": 401,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Which document expresses high-level management intent and mandatory organizational requirements?",
    "options": [
      "Policy",
      "Procedure",
      "Guideline",
      "Runbook log"
    ],
    "correctIndex": 0,
    "explanation": "A policy states management's mandatory direction and expectations."
  },
  {
    "id": 402,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "A requirement states that all sensitive data at rest must use AES-256 encryption. What type of document is this?",
    "options": [
      "Standard",
      "Guideline",
      "Procedure",
      "Risk register"
    ],
    "correctIndex": 0,
    "explanation": "A standard defines a specific mandatory requirement that supports policy."
  },
  {
    "id": 403,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "A document lists the exact steps for creating, approving, and disabling user accounts. What type of document is it?",
    "options": [
      "Procedure",
      "Policy",
      "Guideline",
      "Regulation"
    ],
    "correctIndex": 0,
    "explanation": "A procedure gives step-by-step instructions for performing a task."
  },
  {
    "id": 404,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "A security document recommends, but does not require, using a password manager for personal accounts. What type of document is this?",
    "options": [
      "Guideline",
      "Standard",
      "Policy",
      "Law"
    ],
    "correctIndex": 0,
    "explanation": "Guidelines provide recommended practices rather than mandatory requirements."
  },
  {
    "id": 405,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Which policy defines permitted and prohibited use of company computers, networks, and internet access?",
    "options": [
      "Acceptable use policy",
      "Business impact analysis",
      "Certificate policy",
      "Data-processing agreement"
    ],
    "correctIndex": 0,
    "explanation": "An acceptable use policy sets rules for organizational technology use."
  },
  {
    "id": 406,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Which policy should define account approval, least privilege, access reviews, and account termination?",
    "options": [
      "Access control policy",
      "Media relations policy",
      "Environmental policy",
      "Travel policy"
    ],
    "correctIndex": 0,
    "explanation": "An access control policy governs how identities receive, use, and lose access."
  },
  {
    "id": 407,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Who is typically accountable for deciding how sensitive business data should be classified and who may access it?",
    "options": [
      "Data owner",
      "Data custodian",
      "Internet service provider",
      "External auditor"
    ],
    "correctIndex": 0,
    "explanation": "The data owner is accountable for classification, access requirements, and acceptable use."
  },
  {
    "id": 408,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Who is typically responsible for implementing backups, access controls, and storage protections directed by the data owner?",
    "options": [
      "Data custodian",
      "Data subject",
      "Data owner only",
      "Marketing manager"
    ],
    "correctIndex": 0,
    "explanation": "The custodian operates and protects data according to the owner's requirements."
  },
  {
    "id": 409,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Under privacy governance, which role determines the purposes and means of processing personal data?",
    "options": [
      "Data controller",
      "Data processor",
      "Data subject",
      "Certificate authority"
    ],
    "correctIndex": 0,
    "explanation": "The controller determines why and how personal data is processed."
  },
  {
    "id": 410,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "A cloud vendor processes customer personal data only according to the customer's documented instructions. Which role does the vendor perform?",
    "options": [
      "Data processor",
      "Data controller",
      "Data subject",
      "Risk owner"
    ],
    "correctIndex": 0,
    "explanation": "A processor handles personal data on behalf of a controller."
  },
  {
    "id": 411,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Which body is MOST appropriate for resolving conflicts between security requirements and business priorities across departments?",
    "options": [
      "Security steering committee",
      "Individual help-desk technician",
      "External attacker",
      "Single application user"
    ],
    "correctIndex": 0,
    "explanation": "A cross-functional steering committee provides governance and executive alignment."
  },
  {
    "id": 412,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Who should formally accept residual risk for a business system?",
    "options": [
      "The designated risk or business owner",
      "Any analyst who found the issue",
      "The vulnerability scanner vendor",
      "An unaffiliated consultant"
    ],
    "correctIndex": 0,
    "explanation": "Risk acceptance belongs to an accountable owner with authority over the affected business objective."
  },
  {
    "id": 413,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "A legacy application cannot meet the password standard. What should occur?",
    "options": [
      "Document and approve a time-limited exception with compensating controls",
      "Ignore the standard permanently",
      "Disable all monitoring",
      "Publish the administrator password"
    ],
    "correctIndex": 0,
    "explanation": "Exceptions should be justified, approved, compensated, tracked, and periodically reviewed."
  },
  {
    "id": 414,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "When should a security policy be reviewed outside its normal annual cycle?",
    "options": [
      "After significant legal, business, technology, or threat changes",
      "Only when an employee requests it",
      "Never after approval",
      "Only after a successful audit"
    ],
    "correctIndex": 0,
    "explanation": "Material changes can make policies outdated before the scheduled review."
  },
  {
    "id": 415,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "A policy requires encrypted laptops, but device reports show many systems are not encrypted. What is the MOST important governance issue?",
    "options": [
      "Failure to monitor and enforce compliance",
      "Excessive data minimization",
      "Too much certificate transparency",
      "Insufficient load balancing"
    ],
    "correctIndex": 0,
    "explanation": "Governance must include monitoring and enforcement, not only written requirements."
  },
  {
    "id": 416,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "A customer contract requires breach notification within 24 hours. What type of governance input is this?",
    "options": [
      "Contractual requirement",
      "Internal guideline",
      "Technical baseline only",
      "Threat intelligence indicator"
    ],
    "correctIndex": 0,
    "explanation": "Contracts create external obligations that governance must incorporate."
  },
  {
    "id": 417,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "A new privacy law applies to the organization. What should governance do FIRST?",
    "options": [
      "Assess applicability and update controls and policies",
      "Ignore it until an incident occurs",
      "Delete all audit records",
      "Remove the legal team from review"
    ],
    "correctIndex": 0,
    "explanation": "The organization must determine scope and translate legal obligations into governance requirements."
  },
  {
    "id": 418,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Which requirement MOST appropriately belongs in a remote-access policy?",
    "options": [
      "Approved devices, MFA, encryption, and session controls",
      "Office furniture standards",
      "Printer toner levels",
      "Public marketing language"
    ],
    "correctIndex": 0,
    "explanation": "Remote-access policy should define secure authentication, devices, connections, and use."
  },
  {
    "id": 419,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Who should approve a high-risk production change that may interrupt a critical business service?",
    "options": [
      "Authorized change authority with business and technical input",
      "Any user with local access",
      "The external auditor alone",
      "The software vendor without customer review"
    ],
    "correctIndex": 0,
    "explanation": "High-risk changes require authorized, cross-functional evaluation and approval."
  },
  {
    "id": 420,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.1 Security Governance",
    "question": "Why should employees acknowledge security policies?",
    "options": [
      "To document awareness of responsibilities and requirements",
      "To eliminate the need for training",
      "To transfer all organizational liability",
      "To replace technical controls"
    ],
    "correctIndex": 0,
    "explanation": "Acknowledgment documents that users received and accepted applicable expectations."
  },
  {
    "id": 421,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "Which statement BEST defines risk?",
    "options": [
      "The combination of likelihood and impact from a threat exploiting a vulnerability",
      "A vulnerability with no business context",
      "A control that always succeeds",
      "A list of all company assets"
    ],
    "correctIndex": 0,
    "explanation": "Risk considers the probability and consequence of a threat exploiting a weakness."
  },
  {
    "id": 422,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "What is inherent risk?",
    "options": [
      "Risk before controls are applied",
      "Risk remaining after controls",
      "Risk transferred to an insurer",
      "Risk that has been eliminated"
    ],
    "correctIndex": 0,
    "explanation": "Inherent risk is the level of risk in the absence of controls."
  },
  {
    "id": 423,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "What is residual risk?",
    "options": [
      "Risk remaining after controls are applied",
      "Risk before any controls",
      "Risk that cannot be measured",
      "Risk owned by a vendor only"
    ],
    "correctIndex": 0,
    "explanation": "Residual risk is what remains after safeguards reduce likelihood or impact."
  },
  {
    "id": 424,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "Which term describes the amount and type of risk an organization is willing to pursue or retain in support of its objectives?",
    "options": [
      "Risk appetite",
      "Risk register",
      "Risk indicator",
      "Risk transfer"
    ],
    "correctIndex": 0,
    "explanation": "Risk appetite expresses the broad level and type of risk the organization is willing to accept."
  },
  {
    "id": 425,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A company accepts up to 30 minutes of customer-service downtime per month. Which concept does this numerical boundary represent?",
    "options": [
      "Risk tolerance",
      "Risk appetite",
      "Threat intelligence",
      "Data sovereignty"
    ],
    "correctIndex": 0,
    "explanation": "Risk tolerance defines acceptable variation or limits around a risk objective."
  },
  {
    "id": 426,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "Where should identified risks, owners, ratings, treatment plans, and due dates be tracked?",
    "options": [
      "Risk register",
      "Certificate revocation list",
      "DNS zone file",
      "Packet capture"
    ],
    "correctIndex": 0,
    "explanation": "A risk register is the central record for identified and managed risks."
  },
  {
    "id": 427,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A team labels risks as low, medium, or high based on likelihood and impact. Which assessment method is this?",
    "options": [
      "Qualitative risk analysis",
      "Quantitative risk analysis",
      "Cryptographic analysis",
      "Packet analysis"
    ],
    "correctIndex": 0,
    "explanation": "Qualitative analysis uses descriptive ratings rather than monetary estimates."
  },
  {
    "id": 428,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "An asset is worth $200,000 and a single incident is expected to cause a 30% loss. What is the single loss expectancy?",
    "options": [
      "$60,000",
      "$6,000",
      "$140,000",
      "$230,000"
    ],
    "correctIndex": 0,
    "explanation": "SLE equals asset value multiplied by exposure factor: $200,000 × 0.30 = $60,000."
  },
  {
    "id": 429,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A loss event has an SLE of $40,000 and is expected once every five years. What is the annualized loss expectancy?",
    "options": [
      "$8,000",
      "$40,000",
      "$200,000",
      "$2,000"
    ],
    "correctIndex": 0,
    "explanation": "ARO is 0.2, so ALE equals $40,000 × 0.2 = $8,000."
  },
  {
    "id": 430,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A company stops offering a service because the associated legal exposure is unacceptable. Which response is this?",
    "options": [
      "Avoid",
      "Transfer",
      "Accept",
      "Mitigate"
    ],
    "correctIndex": 0,
    "explanation": "Risk avoidance removes the activity that creates the risk."
  },
  {
    "id": 431,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A company purchases cyber insurance to cover part of the financial impact of a breach. Which response is this?",
    "options": [
      "Transfer",
      "Avoid",
      "Accept",
      "Ignore"
    ],
    "correctIndex": 0,
    "explanation": "Insurance transfers part of the financial consequence to another party."
  },
  {
    "id": 432,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A company deploys MFA and network segmentation to reduce account-compromise risk. Which response is this?",
    "options": [
      "Mitigate",
      "Avoid",
      "Transfer",
      "Accept without action"
    ],
    "correctIndex": 0,
    "explanation": "Mitigation uses controls to reduce likelihood or impact."
  },
  {
    "id": 433,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "Management knowingly proceeds with a low-impact risk after documenting the decision. Which response is this?",
    "options": [
      "Accept",
      "Avoid",
      "Transfer",
      "Exploit"
    ],
    "correctIndex": 0,
    "explanation": "Acceptance is a deliberate decision to tolerate the risk."
  },
  {
    "id": 434,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "Which activity identifies critical processes, dependencies, maximum tolerable downtime, and outage impacts?",
    "options": [
      "Business impact analysis",
      "Vulnerability scan",
      "Packet capture",
      "Certificate enrollment"
    ],
    "correctIndex": 0,
    "explanation": "A BIA determines the business consequences of disruption and recovery priorities."
  },
  {
    "id": 435,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "Which input is MOST important when prioritizing recovery of business systems?",
    "options": [
      "Business impact and process dependency",
      "Alphabetical hostname order",
      "Age of the server rack",
      "Number of desktop icons"
    ],
    "correctIndex": 0,
    "explanation": "Recovery priorities should reflect business criticality and dependencies."
  },
  {
    "id": 436,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A security analyst identifies a risk affecting payroll. Who should own the risk?",
    "options": [
      "An accountable payroll or business owner",
      "The scanner that found it",
      "Any external user",
      "The certificate authority"
    ],
    "correctIndex": 0,
    "explanation": "The owner should have authority and accountability for the affected business objective."
  },
  {
    "id": 437,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A sudden increase in privileged accounts is monitored as an early warning of access-control risk. What is this metric?",
    "options": [
      "Key risk indicator",
      "Recovery time objective",
      "Single loss expectancy",
      "Certificate policy"
    ],
    "correctIndex": 0,
    "explanation": "A KRI signals increasing exposure or likelihood related to a risk."
  },
  {
    "id": 438,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "Which information is MOST useful in an executive risk report?",
    "options": [
      "Top risks, business impact, trends, ownership, and treatment status",
      "Raw scanner output without context",
      "Every firewall packet",
      "Individual keyboard layouts"
    ],
    "correctIndex": 0,
    "explanation": "Executives need concise business-focused risk information and accountability."
  },
  {
    "id": 439,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A security team reassesses a risk after a compensating control is implemented. What is the team measuring?",
    "options": [
      "Residual risk",
      "Inherent risk only",
      "Asset depreciation",
      "Data residency"
    ],
    "correctIndex": 0,
    "explanation": "The reassessment determines the risk remaining after the control."
  },
  {
    "id": 440,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.2 Risk Management",
    "question": "A risk score exceeds a predefined level and must be escalated to senior leadership. What has been crossed?",
    "options": [
      "Risk threshold",
      "Certificate chain",
      "Recovery point",
      "Data classification"
    ],
    "correctIndex": 0,
    "explanation": "A risk threshold is a defined trigger for action or escalation."
  },
  {
    "id": 441,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Before selecting a SaaS provider, a company reviews the provider's security program, breach history, certifications, and data handling. What process is this?",
    "options": [
      "Vendor due diligence",
      "Threat hunting",
      "Packet analysis",
      "Key rotation"
    ],
    "correctIndex": 0,
    "explanation": "Due diligence evaluates a third party's security and business risk before engagement."
  },
  {
    "id": 442,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Which factor should MOST influence selection of a cloud vendor that will process regulated health data?",
    "options": [
      "Ability to meet security, privacy, and contractual requirements",
      "Logo color",
      "Office furniture",
      "Number of social-media followers"
    ],
    "correctIndex": 0,
    "explanation": "The vendor must satisfy applicable security, privacy, availability, and contractual obligations."
  },
  {
    "id": 443,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "What is the PRIMARY purpose of a vendor security questionnaire?",
    "options": [
      "Collect structured information about the vendor's controls and practices",
      "Replace all independent evidence",
      "Guarantee the vendor has never had an incident",
      "Provide a network password"
    ],
    "correctIndex": 0,
    "explanation": "Questionnaires support risk assessment but should be validated with appropriate evidence."
  },
  {
    "id": 444,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Which contract clause allows a customer to examine or commission an assessment of a vendor's controls?",
    "options": [
      "Right-to-audit clause",
      "Force majeure only",
      "Acceptable use clause",
      "Password history clause"
    ],
    "correctIndex": 0,
    "explanation": "A right-to-audit provision gives the customer defined assessment rights."
  },
  {
    "id": 445,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "A contract specifies 99.95% availability, support response times, and service credits. What is this section?",
    "options": [
      "SLA",
      "NDA",
      "MOU",
      "AUP"
    ],
    "correctIndex": 0,
    "explanation": "A service-level agreement defines measurable service commitments and remedies."
  },
  {
    "id": 446,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Which agreement prohibits a contractor from disclosing proprietary information?",
    "options": [
      "NDA",
      "SLA",
      "BIA",
      "RTO"
    ],
    "correctIndex": 0,
    "explanation": "A nondisclosure agreement protects confidential information from unauthorized disclosure."
  },
  {
    "id": 447,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Two government agencies document how they intend to share threat intelligence without establishing a detailed procurement contract. Which document BEST fits?",
    "options": [
      "MOU",
      "SLA",
      "NDA only",
      "Certificate policy"
    ],
    "correctIndex": 0,
    "explanation": "A memorandum of understanding records cooperative intent and responsibilities."
  },
  {
    "id": 448,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Two companies establish terms for an ongoing business relationship, including security responsibilities and data exchange. Which agreement is MOST appropriate?",
    "options": [
      "Business partnership agreement",
      "Password policy",
      "Certificate signing request",
      "Packet capture"
    ],
    "correctIndex": 0,
    "explanation": "A business partnership agreement defines responsibilities and terms between business partners."
  },
  {
    "id": 449,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "A cloud vendor will process personal data for a customer. Which agreement should define processing instructions, safeguards, and privacy responsibilities?",
    "options": [
      "Data-processing agreement",
      "Acceptable use policy",
      "Change ticket",
      "Asset tag"
    ],
    "correctIndex": 0,
    "explanation": "A DPA governs how a processor handles personal data on behalf of a controller."
  },
  {
    "id": 450,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Before a third party conducts a penetration test, which document should define scope, timing, allowed techniques, and contacts?",
    "options": [
      "Rules of engagement",
      "Password standard",
      "Data retention policy",
      "Business impact analysis"
    ],
    "correctIndex": 0,
    "explanation": "Rules of engagement establish authorization, boundaries, safety, and communication for testing."
  },
  {
    "id": 451,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Which activity BEST manages vendor risk after the contract is signed?",
    "options": [
      "Continuous or periodic monitoring of control and risk changes",
      "Rely only on the original questionnaire forever",
      "Disable breach notification",
      "Remove termination rights"
    ],
    "correctIndex": 0,
    "explanation": "Third-party risk must be monitored throughout the relationship."
  },
  {
    "id": 452,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "A critical vendor reports a breach affecting customer data. What should the customer do FIRST?",
    "options": [
      "Activate the contractual incident and notification process",
      "Ignore the event until contract renewal",
      "Delete all internal logs",
      "Publish unverified claims"
    ],
    "correctIndex": 0,
    "explanation": "The customer should follow agreed incident, evidence, legal, and communication procedures."
  },
  {
    "id": 453,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Which action is MOST important when ending a managed service contract?",
    "options": [
      "Revoke access and confirm return or destruction of data",
      "Leave remote accounts active",
      "Share replacement credentials",
      "Disable asset inventory"
    ],
    "correctIndex": 0,
    "explanation": "Offboarding must remove access and address data disposition and asset return."
  },
  {
    "id": 454,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "A vendor relies on several subcontractors to process sensitive data. What should the customer verify?",
    "options": [
      "Security requirements flow down to subcontractors",
      "Subcontractors may use any controls",
      "Only the primary vendor needs incident reporting",
      "Data classification no longer applies"
    ],
    "correctIndex": 0,
    "explanation": "Fourth-party and subcontractor risk should be governed by equivalent requirements."
  },
  {
    "id": 455,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "Several critical business services depend on the same cloud provider and region. Which third-party risk is MOST significant?",
    "options": [
      "Concentration risk",
      "Password history",
      "Certificate pinning",
      "Data masking"
    ],
    "correctIndex": 0,
    "explanation": "Concentration risk arises when many critical dependencies share one provider or failure domain."
  },
  {
    "id": 456,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.3 Third-party Risk",
    "question": "A vendor provides a current independent assurance report. What should the customer do NEXT?",
    "options": [
      "Review scope, exceptions, period, and relevance to the service",
      "Assume every control is perfect",
      "Ignore complementary customer responsibilities",
      "Publish the report publicly"
    ],
    "correctIndex": 0,
    "explanation": "Assurance reports must be evaluated for scope, findings, dates, and customer responsibilities."
  },
  {
    "id": 457,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "Which standard is MOST directly associated with organizations that store, process, or transmit payment card data?",
    "options": [
      "PCI DSS",
      "HIPAA",
      "FERPA",
      "SOX"
    ],
    "correctIndex": 0,
    "explanation": "PCI DSS defines security requirements for payment card environments."
  },
  {
    "id": 458,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "Which U.S. law is MOST directly associated with protecting individually identifiable health information handled by covered entities and business associates?",
    "options": [
      "HIPAA",
      "PCI DSS",
      "SOX",
      "COPPA"
    ],
    "correctIndex": 0,
    "explanation": "HIPAA includes privacy and security requirements for protected health information."
  },
  {
    "id": 459,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "Which regulation is MOST directly associated with personal data rights for individuals in the European Union?",
    "options": [
      "GDPR",
      "GLBA",
      "SOX",
      "FISMA"
    ],
    "correctIndex": 0,
    "explanation": "The GDPR governs processing and protection of personal data of individuals in the EU."
  },
  {
    "id": 460,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "Which U.S. law is MOST closely associated with financial reporting controls for publicly traded companies?",
    "options": [
      "SOX",
      "HIPAA",
      "FERPA",
      "COPPA"
    ],
    "correctIndex": 0,
    "explanation": "The Sarbanes-Oxley Act addresses corporate financial reporting and related internal controls."
  },
  {
    "id": 461,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "Which U.S. law requires financial institutions to protect customers' nonpublic personal information?",
    "options": [
      "GLBA",
      "FERPA",
      "COPPA",
      "FISMA"
    ],
    "correctIndex": 0,
    "explanation": "The Gramm-Leach-Bliley Act includes safeguards for customer financial information."
  },
  {
    "id": 462,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "An online service collects only the information necessary to complete a transaction. Which privacy principle is demonstrated?",
    "options": [
      "Data minimization",
      "Unlimited retention",
      "Implicit disclosure",
      "Maximum collection"
    ],
    "correctIndex": 0,
    "explanation": "Data minimization limits collection to information needed for a defined purpose."
  },
  {
    "id": 463,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "Personal information collected to deliver a product is later used for unrelated advertising without notice or consent. Which principle was MOST directly violated?",
    "options": [
      "Purpose limitation",
      "Availability",
      "Non-repudiation",
      "Fault tolerance"
    ],
    "correctIndex": 0,
    "explanation": "Purpose limitation requires personal data to be used consistently with the stated and lawful purpose."
  },
  {
    "id": 464,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "A customer asks what personal data a company holds about the customer. Which privacy capability should support the request?",
    "options": [
      "Data subject access process",
      "Certificate revocation",
      "Network segmentation",
      "RAID recovery"
    ],
    "correctIndex": 0,
    "explanation": "Organizations subject to applicable privacy requirements need a process for access requests."
  },
  {
    "id": 465,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "What should determine whether and when affected individuals or regulators must be notified after a data breach?",
    "options": [
      "Applicable laws, contracts, and documented incident procedures",
      "The attacker's preference",
      "The number of printers",
      "Whether the breach occurred on a weekend"
    ],
    "correctIndex": 0,
    "explanation": "Notification duties and deadlines arise from legal, regulatory, and contractual requirements."
  },
  {
    "id": 466,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "Which outcome is a potential consequence of failing to meet a mandatory security regulation?",
    "options": [
      "Fines, legal action, operational restrictions, and reputational damage",
      "Automatic removal of all risk",
      "Guaranteed insurance payment",
      "Permanent exemption from audits"
    ],
    "correctIndex": 0,
    "explanation": "Non-compliance can create financial, legal, contractual, operational, and reputational consequences."
  },
  {
    "id": 467,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "A control is required by policy, but reports show it is disabled on 15% of endpoints. What should the organization do?",
    "options": [
      "Investigate, remediate, and report the compliance gap",
      "Change the report to show 100%",
      "Stop collecting evidence",
      "Ignore the exceptions permanently"
    ],
    "correctIndex": 0,
    "explanation": "Compliance monitoring should lead to documented remediation and accountability."
  },
  {
    "id": 468,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "Which requirement should govern deletion of customer records after the business purpose ends?",
    "options": [
      "Approved retention and legal requirements",
      "Keep every record forever",
      "Delete all records immediately regardless of law",
      "The storage administrator's preference"
    ],
    "correctIndex": 0,
    "explanation": "Retention and disposal must follow legal, contractual, regulatory, and business requirements."
  },
  {
    "id": 469,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "A routine deletion schedule conflicts with a legal hold covering specific records. What should happen?",
    "options": [
      "Preserve the covered records until the hold is released",
      "Continue deletion as normal",
      "Delete them faster",
      "Move them to an untracked personal account"
    ],
    "correctIndex": 0,
    "explanation": "A legal hold suspends normal disposal for relevant information."
  },
  {
    "id": 470,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.4 Security Compliance",
    "question": "A new application will collect precise location data from employees. Which activity should occur BEFORE deployment?",
    "options": [
      "Privacy impact assessment",
      "Password spraying",
      "Disk defragmentation",
      "Certificate revocation"
    ],
    "correctIndex": 0,
    "explanation": "A privacy impact assessment evaluates data collection, use, risk, and safeguards before implementation."
  },
  {
    "id": 471,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "An organization's own audit department evaluates whether security controls follow policy. What type of audit is this?",
    "options": [
      "Internal audit",
      "External audit",
      "Penetration test only",
      "Threat hunt"
    ],
    "correctIndex": 0,
    "explanation": "Internal audits are performed by or on behalf of the organization itself."
  },
  {
    "id": 472,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "An independent accounting firm evaluates controls for a customer assurance report. What type of audit is this?",
    "options": [
      "External audit",
      "Internal self-assessment",
      "Threat hunt",
      "Configuration scan only"
    ],
    "correctIndex": 0,
    "explanation": "An external audit is conducted by an independent party outside the organization."
  },
  {
    "id": 473,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "What does attestation MOST directly provide?",
    "options": [
      "A formal assertion about the state or effectiveness of controls",
      "A guarantee that no future incident will occur",
      "A list of all passwords",
      "Automatic risk acceptance"
    ],
    "correctIndex": 0,
    "explanation": "Attestation is a formal statement or assurance regarding controls or compliance."
  },
  {
    "id": 474,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "Which report is MOST relevant when evaluating a service provider's controls related to security, availability, confidentiality, processing integrity, or privacy?",
    "options": [
      "SOC 2",
      "SOC 1 only",
      "DNS report",
      "CVSS report"
    ],
    "correctIndex": 0,
    "explanation": "SOC 2 reports address controls relevant to the Trust Services Criteria."
  },
  {
    "id": 475,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "What is the key difference between a Type I and Type II assurance report?",
    "options": [
      "Type I addresses design at a point in time; Type II also evaluates operation over a period",
      "Type I is public and Type II is always classified",
      "Type I contains no controls",
      "Type II applies only to physical security"
    ],
    "correctIndex": 0,
    "explanation": "Type II includes testing of operating effectiveness over a defined period."
  },
  {
    "id": 476,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "Which evidence is generally MOST persuasive to an auditor?",
    "options": [
      "Independent, relevant, and reproducible evidence",
      "An undocumented verbal claim",
      "A screenshot with no date or context",
      "A personal opinion from an unrelated employee"
    ],
    "correctIndex": 0,
    "explanation": "Reliable audit evidence should be relevant, objective, traceable, and reproducible."
  },
  {
    "id": 477,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "Why might an auditor test a representative sample of access requests rather than every request?",
    "options": [
      "To obtain reasonable assurance efficiently",
      "To avoid documenting results",
      "To guarantee there are no exceptions",
      "To replace scope definition"
    ],
    "correctIndex": 0,
    "explanation": "Sampling supports efficient testing when full-population review is impractical."
  },
  {
    "id": 478,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "An auditor identifies a control deficiency. What should management provide?",
    "options": [
      "A remediation plan with owner and target date",
      "A request to delete the finding",
      "A shared administrator password",
      "A promise without accountability"
    ],
    "correctIndex": 0,
    "explanation": "Findings should be tracked to assigned corrective actions and deadlines."
  },
  {
    "id": 479,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "Why must audit scope be defined before fieldwork begins?",
    "options": [
      "To establish systems, controls, period, and criteria being examined",
      "To guarantee a passing result",
      "To eliminate evidence collection",
      "To remove independence"
    ],
    "correctIndex": 0,
    "explanation": "Scope defines the boundaries and criteria for the assessment."
  },
  {
    "id": 480,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "Which assessment is designed to demonstrate whether vulnerabilities can be exploited under authorized conditions?",
    "options": [
      "Penetration test",
      "Policy review",
      "Asset inventory",
      "Business impact analysis"
    ],
    "correctIndex": 0,
    "explanation": "Penetration testing attempts exploitation within an approved scope and rules of engagement."
  },
  {
    "id": 481,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "Which assessment primarily identifies and prioritizes weaknesses without necessarily exploiting them?",
    "options": [
      "Vulnerability assessment",
      "Penetration test",
      "Red-team exercise only",
      "Disaster-recovery test"
    ],
    "correctIndex": 0,
    "explanation": "Vulnerability assessments identify and analyze weaknesses, usually without active exploitation."
  },
  {
    "id": 482,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "Which exercise emulates a realistic adversary and tests detection and response across people, process, and technology?",
    "options": [
      "Red-team exercise",
      "Configuration checklist only",
      "Backup inventory",
      "Policy acknowledgment"
    ],
    "correctIndex": 0,
    "explanation": "Red teams simulate adversary objectives to test the broader defensive capability."
  },
  {
    "id": 483,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "Why is assessor independence important?",
    "options": [
      "It reduces conflicts of interest and increases objectivity",
      "It guarantees all controls will pass",
      "It eliminates the need for evidence",
      "It transfers ownership of every risk"
    ],
    "correctIndex": 0,
    "explanation": "Independent assessment supports impartial conclusions and credibility."
  },
  {
    "id": 484,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.5 Audits and Assessments",
    "question": "After an audit finding is corrected, what should occur before closure?",
    "options": [
      "Validate that the corrective action is implemented and effective",
      "Delete the original evidence",
      "Remove the issue from records without testing",
      "Disable monitoring"
    ],
    "correctIndex": 0,
    "explanation": "Closure should be based on evidence that remediation actually addresses the finding."
  },
  {
    "id": 485,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "What is the BEST immediate action for an employee who receives a suspicious email requesting a password reset?",
    "options": [
      "Report it through the approved channel without using the link",
      "Reply with the password",
      "Forward it to personal email",
      "Open every attachment to investigate"
    ],
    "correctIndex": 0,
    "explanation": "Users should avoid interacting and report suspicious messages through the organization's process."
  },
  {
    "id": 486,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "What is the PRIMARY purpose of authorized phishing simulations?",
    "options": [
      "Measure and improve user recognition and reporting behavior",
      "Punish every user who clicks",
      "Collect real passwords",
      "Replace all technical controls"
    ],
    "correctIndex": 0,
    "explanation": "Simulations provide training and metrics for improving resilience to phishing."
  },
  {
    "id": 487,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "Which metric BEST indicates improvement after repeated phishing-awareness campaigns?",
    "options": [
      "Higher reporting rate and lower interaction rate",
      "More spam delivered",
      "Longer email signatures",
      "More shared accounts"
    ],
    "correctIndex": 0,
    "explanation": "Effective programs should improve reporting and reduce unsafe interaction."
  },
  {
    "id": 488,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "Which group should receive additional training on secure coding and dependency risk?",
    "options": [
      "Software developers",
      "All visitors only",
      "Facilities vendors only",
      "Customers with no system access"
    ],
    "correctIndex": 0,
    "explanation": "Role-based training should address the specific risks and responsibilities of developers."
  },
  {
    "id": 489,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "Which topic is MOST important for administrators with elevated access?",
    "options": [
      "Privileged account handling and secure administrative practices",
      "Public social-media marketing",
      "Printer paper selection",
      "Office decorating"
    ],
    "correctIndex": 0,
    "explanation": "Privileged users need focused training on high-impact access, credentials, and change controls."
  },
  {
    "id": 490,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "A caller claims to be the CIO and urgently requests a password reset. What should the help desk do?",
    "options": [
      "Verify identity through an approved independent process",
      "Comply because the caller sounds confident",
      "Ask for the current password",
      "Disable audit logging"
    ],
    "correctIndex": 0,
    "explanation": "Urgency and authority claims should not bypass identity verification."
  },
  {
    "id": 491,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "An unknown person asks an employee to hold a secure door because the person's badge is 'not working.' What should the employee do?",
    "options": [
      "Direct the person to the approved visitor or access process",
      "Hold the door open",
      "Loan the person a badge",
      "Ignore the incident"
    ],
    "correctIndex": 0,
    "explanation": "Employees should not bypass physical access controls and should direct visitors to verification."
  },
  {
    "id": 492,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "Which behavior BEST supports a clean-desk policy?",
    "options": [
      "Secure sensitive documents and lock the screen when away",
      "Leave passwords under the keyboard",
      "Keep printed customer data visible overnight",
      "Share an access badge"
    ],
    "correctIndex": 0,
    "explanation": "Clean-desk practices reduce exposure of information and unattended systems."
  },
  {
    "id": 493,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "An employee finds an unknown USB drive in the parking lot. What should the employee do?",
    "options": [
      "Turn it over to the approved security process without connecting it",
      "Insert it into a work computer",
      "Take it home and inspect it",
      "Mail it to a customer"
    ],
    "correctIndex": 0,
    "explanation": "Unknown removable media may be bait and should be handled through approved procedures."
  },
  {
    "id": 494,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "A normally reliable employee begins accessing large amounts of unrelated sensitive data shortly before resigning. What should coworkers do?",
    "options": [
      "Report the behavior through the approved insider-risk process",
      "Confront the employee publicly",
      "Ignore it because the access is technically allowed",
      "Share additional files"
    ],
    "correctIndex": 0,
    "explanation": "Unusual access patterns should be reported through established channels for appropriate review."
  },
  {
    "id": 495,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "Which program characteristic MOST encourages employees to report mistakes quickly?",
    "options": [
      "A clear, accessible, and non-retaliatory reporting process",
      "Automatic punishment for every error",
      "No published contact method",
      "A policy against reporting suspicious activity"
    ],
    "correctIndex": 0,
    "explanation": "Employees report sooner when channels are clear and the culture supports prompt disclosure."
  },
  {
    "id": 496,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "When should security awareness training occur?",
    "options": [
      "At onboarding, periodically, and when risks or roles change",
      "Only after a breach",
      "Only once during employment",
      "Only for the security team"
    ],
    "correctIndex": 0,
    "explanation": "Effective awareness is continuous and responsive to changing roles and threats."
  },
  {
    "id": 497,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "A user attempts to upload restricted data to an unapproved site and receives an immediate policy reminder. What type of training is this?",
    "options": [
      "Just-in-time training",
      "Annual classroom training only",
      "Penetration testing",
      "Disaster recovery"
    ],
    "correctIndex": 0,
    "explanation": "Just-in-time training delivers relevant guidance at the moment of risky behavior."
  },
  {
    "id": 498,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "Which behavior should awareness training encourage?",
    "options": [
      "Use unique passwords and an approved password manager",
      "Reuse one complex password everywhere",
      "Share passwords with coworkers",
      "Store passwords in public notes"
    ],
    "correctIndex": 0,
    "explanation": "Unique passwords and approved password managers reduce reuse and credential-stuffing risk."
  },
  {
    "id": 499,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "Which practice BEST protects confidential conversations during remote work?",
    "options": [
      "Use a private location and approved communication tools",
      "Discuss sensitive matters in crowded public spaces",
      "Use open public Wi-Fi without protection",
      "Share meeting links publicly"
    ],
    "correctIndex": 0,
    "explanation": "Physical privacy and approved secure tools reduce eavesdropping and unauthorized access."
  },
  {
    "id": 500,
    "domain": "5.0 Security Program Management and Oversight",
    "objective": "5.6 Security Awareness",
    "question": "Which activity BEST improves an awareness program over time?",
    "options": [
      "Use incident trends, simulation results, and user feedback to update training",
      "Repeat identical content forever without measurement",
      "Remove reporting channels",
      "Train only after audit failures"
    ],
    "correctIndex": 0,
    "explanation": "Metrics and real incidents should drive continuous improvement of awareness content."
  }
];
