import React, { useState } from "react";
import axios from "axios";
import Results from "@/components/results/results";
import UniProtChart from "../charts/UniProtChart";
import style from './protsequence.css'; 

const ProtSequence = ({ click }) => {
  const [proteinSequence, setProteinSequence] = useState("");
  const [predictionsData, setPredictionsData] = useState(null);

  const handleLoadSample = () => {
    setProteinSequence(">sp|O00566|MPP10_HUMAN U3 small nucleolar ribonucleoprotein protein MPP10 OS=Homo sapiens OX=9606 GN=MPHOSPH10 PE=1 SV=2\r\nMAPQVWRRRTLERCLTEVGKATGRPECFLTIQEGLASKFTSLTKVLYDFNKILENGRIHG\r\nSPLQKLVIENFDDEQIWQQLELQNEPILQYFQNAVSETINDEDISLLPESEEQEREEDGS\r\nEIEADDKEDLEDLEEEEVSDMGNDDPEMGERAENSSKSDLRKSPVFSDEDSDLDFDISKL\r\nEQQSKVQNKGQGKPREKSIVDDKFFKLSEMEAYLENIEKEEERKDDNDEEEEDIDFFEDI\r\nDSDEDEGGLFGSKKLKSGKSSRNLKYKDFFDPVESDEDITNVHDDELDSNKEDDEIAEEE\r\nAEELSISETDEDDDLQENEDNKQHKESLKRVTFALPDDAETEDTGVLNVKKNSDEVKSSF\r\nEKRQEKMNEKIASLEKELLEKKPWQLQGEVTAQKRPENSLLEETLHFDHAVRMAPVITEE\r\nTTLQLEDIIKQRIRDQAWDDVVRKEKPKEDAYEYKKRLTLDHEKSKLSLAEIYEQEYIKL\r\nNQQKTAEEENPEHVEIQKMMDSLFLKLDALSNFHFIPKPPVPEIKVVSNLPAITMEEVAP\r\nVSVSDAALLAPEEIKEKNKAGDIKTAAEKTATDKKRERRKKKYQKRMKIKEKEKRRKLLE\r\nKSSVDQAGKYSKTVASEKLKQLTKTGKASFIKDEGKDKALKSSQAFFSKLQDQVKMQIND\r\nAKKTEKKKKKRQDISVHKLKL\r\n\r\n>sp|Q9UER7|DAXX_HUMAN Death domain-associated protein 6 OS=Homo sapiens OX=9606 GN=DAXX PE=1 SV=2\r\nMATANSIIVLDDDDEDEAAAQPGPSHPLPNAASPGAEAPSSSEPHGARGSSSSGGKKCYK\r\nLENEKLFEEFLELCKMQTADHPEVVPFLYNRQQRAHSLFLASAEFCNILSRVLSRARSRP\r\nAKLYVYINELCTVLKAHSAKKKLNLAPAATTSNEPSGNNPPTHLSLDPTNAENTASQSPR\r\nTRGSRRQIQRLEQLLALYVAEIRRLQEKELDLSELDDPDSAYLQEARLKRKLIRLFGRLC\r\nELKDCSSLTGRVIEQRIPYRGTRYPEVNRRIERLINKPGPDTFPDYGDVLRAVEKAAARH\r\nSLGLPRQQLQLMAQDAFRDVGIRLQERRHLDLIYNFGCHLTDDYRPGVDPALSDPVLARR\r\nLRENRSLAMSRLDEVISKYAMLQDKSEEGERKKRRARLQGTSSHSADTPEASLDSGEGPS\r\nGMASQGCPSASRAETDDEDDEESDEEEEEEEEEEEEEATDSEEEEDLEQMQEGQEDDEEE\r\nDEEEEAAAGKDGDKSPMSSLQISNEKNLEPGKQISRSSGEQQNKGRIVSPSLLSEEPLAP\r\nSSIDAESNGEQPEELTLEEESPVSQLFELEIEALPLDTPSSVETDISSSRKQSEEPFTTV\r\nLENGAGMVSSTSFNGGVSPHNWGDSGPPCKKSRKEKKQTGSGPLGNSYVERQRSVHEKNG\r\nKKICTLPSPPSPLASLAPVADSSTRVDSPSHGLVTSSLCIPSPARLSQTPHSQPPRPGTC\r\nKTSVATQCDPEEIIVLSDSD\r\n\r\n\r\n");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Sending data:", { protein_seq: proteinSequence });
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/protein-sequence-prediction/",
        {
          protein_seq: proteinSequence,
        }
      );
  
      const predictions = response.data;
      setPredictionsData(predictions);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting protein sequence:", error);
      // Handle errors, e.g., display an error message to the user
    }
  };
  

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-group headers">
          <h3>Enter Protein Sequence!</h3>
          <p>Please enter a valid protein sequence to test.</p>
        </div>
        <div className="form-group">
          <label htmlFor="proteinSequence">Protein Sequence:</label>
          <textarea
            id="proteinSequence"
            value={proteinSequence}
            onChange={(e) => setProteinSequence(e.target.value)}
          />
        </div>
        <div className="buttons">
          <input
            type="submit"
            value="Predict SUMOylation"
            onClick={handleSubmit}
          />
          <input type="submit" value="Load Sample" onClick={handleLoadSample} />
        </div>
      </div>
      {predictionsData && <Results data={predictionsData} />}
      <UniProtChart predictionsData ={predictionsData}/>
    </div>
  );
};

export default ProtSequence;
