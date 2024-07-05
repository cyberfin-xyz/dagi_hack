import React, { useState } from 'react';
import { observer } from 'mobx-react'
import StoreContext from '@store/RootStore'
import { StyledAiAdviseItem, StyledAiAdviseWrapper, StyledFormWrapper, StyledPageHeader, StyledPageInner, StyledSelectImgWrapper } from './styles';

import { useNavigate } from 'react-router-dom';
import Paragraph from '@components/Paragraph';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { MainButtonStyle } from '@components/Button/Button';


const Create = () => {
	const { MainStore } = StoreContext();

	const navigate = useNavigate();

	const [currentStep, setCurrentStep] = useState<'basicInfo' | 'socialLinks' | 'finalReview' | 'end'>('basicInfo');

	const [formState, setFormState] = useState({
		name: '',
		ticker: '',
		description: '',
	});

	const handleChange = (field: string, value: string) => {
		setFormState((prevState: any) => ({
			...prevState,
			[field]: value,
		}));
	};

	const handleNextStep = () => {
		setCurrentStep((prevStep: any) => (prevStep === 'basicInfo') ? 'socialLinks' : (prevStep === 'socialLinks' ? 'finalReview' : 'end'))
	};

	console.log(formState);

	return (
		<>
			<StyledPageInner>

				{
					currentStep === 'basicInfo' ? <>
						<StyledPageHeader>
							<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'24px'} lineHeight={'32px'} customStyle={{ letterSpacing: '-0.48px' }}>
								Add basic information
							</Paragraph>
						</StyledPageHeader>

						<StyledSelectImgWrapper>
							<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.48px' }}>
								Select an image for the token
							</Paragraph>
						</StyledSelectImgWrapper>

						<StyledFormWrapper>
							<TextInput
								value={formState.name}
								onChange={(value: string) => handleChange('name', value)}
								placeholder={'Name'}
								withFocus
							/>
							<TextInput
								value={formState.ticker}
								onChange={(value: string) => handleChange('ticker', value)}
								placeholder={'Ticker'}
							/>
							<TextInput
								value={formState.description}
								onChange={(value: string) => handleChange('description', value)}
								placeholder={'Description'}
							/>
						</StyledFormWrapper>

						<StyledAiAdviseWrapper>
							<StyledAiAdviseItem>

							</StyledAiAdviseItem>
						</StyledAiAdviseWrapper>
					</>
						: currentStep === 'socialLinks' ? <>
							<StyledPageHeader style={{ justifyContent: 'flex-start' }}>
								<Paragraph color={'#F2F2F2'} fontFamily={'WorkSans-SemiBold'} fontSize={'24px'} lineHeight={'32px'} customStyle={{ letterSpacing: '-0.48px' }}>
									Add Social links
								</Paragraph>

								<Paragraph color={'rgba(242, 242, 242, 0.5)'} fontFamily={'WorkSans'} fontSize={'14px'} lineHeight={'20px'} customStyle={{ letterSpacing: '-0.14px' }}>
									Optional
								</Paragraph>
							</StyledPageHeader>

							<StyledFormWrapper>
								<TextInput
									value={formState.name}
									onChange={(value: string) => handleChange('name', value)}
									placeholder={'Name'}
									withFocus
								/>
								<TextInput
									value={formState.ticker}
									onChange={(value: string) => handleChange('ticker', value)}
									placeholder={'Ticker'}
								/>
								<TextInput
									value={formState.description}
									onChange={(value: string) => handleChange('description', value)}
									placeholder={'Description'}
								/>
							</StyledFormWrapper>

							<StyledAiAdviseWrapper>
								<StyledAiAdviseItem>

								</StyledAiAdviseItem>
							</StyledAiAdviseWrapper>
						</> : ''
				}

				<Button
					customStyle={MainButtonStyle}
					onClick={handleNextStep}
				>
					{
						currentStep === 'basicInfo'
							? 'Next Step'
							: currentStep === 'socialLinks'
								? 'Final Review '
								: 'Create a token'
					}
				</Button>
			</StyledPageInner>
		</>
	)
}

export default observer(Create);