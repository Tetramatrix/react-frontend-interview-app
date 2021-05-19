import React, { useState } from 'react'
import NameStep from './NameStep'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
// eslint-disable-next-line 
   devIns = 'dev_ins'
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

    
const Buyflow: React.FC<BuyflowProps> = (props) => {
  
  const initialState : any = {
            email: '',
            age: 0
        };
   
  const [currentStep, setStep] = useState('name')
  const [collectedData, updateData] = useState(initialState)
    
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
  
    if (value !== "errorMsg" && value !== -1)  {
    
       if (field === "name") {
          let name = value.split(';')
          updateData({ ...collectedData, ['FirstN']: name[0], ...collectedData, ['LastN']: name[1]  })       
       } else {
          updateData({ ...collectedData, [field]: value })          
       }      
       setStep(nextStep)
    } 
    
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === 'name' && <NameStep cb={getStepCallback('email')} />) ||
       (currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Buyflow
