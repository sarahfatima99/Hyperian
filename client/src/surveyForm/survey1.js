import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import React from 'react'
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";

const survey1 = () => {

  const creatorOptions = {
    showLogicTab: false,
    showPreviewTab:true,
    showJSONEditorTab:false,
    isAutoSave: true
  };
  const creator = new SurveyCreator(creatorOptions);

  return (
    <>
    <SurveyCreatorComponent creator={creator} />
    </>
  )
}
export default survey1;