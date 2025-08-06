'use client';

import React, { useState } from 'react';
import GiftForm from '@/components/GiftForm';
import GiftSuggestions from '@/components/GiftSuggestions';
import DummyGiftSuggestions from '@/components/DummyGiftSuggestions';
import OpenAIGiftSuggestions from '@/components/OpenAIGiftSuggestions';
import GiftFormFeatures from '@/components/GiftFormFeatures';
import DemoNotice from '@/components/DemoNotice';
import Navbar from '@/components/Navbar';
import { generateGiftSuggestions, checkOpenAIConfiguration, type GiftSuggestion } from '@/lib/openai';

interface FormData {
  recipient: string;
  age: string;
  gender: string;
  interests: string;
  budget: string;
  occasion: string;
  relationship: string;
}



interface ApiResponse {
  success: boolean;
  suggestion?: string;
  suggestions?: GiftSuggestion[];
  requestData: FormData;
  error?: string;
  isOpenAI?: boolean;
}

// Demo Notice Wrapper component
function DemoNoticeWrapper() {
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null);

  React.useEffect(() => {
    checkOpenAIConfiguration().then(setIsConfigured);
  }, []);

  if (isConfigured === null) {
    return null; // Loading
  }

  return !isConfigured ? <DemoNotice /> : null;
}

export default function RecommendPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // OpenAI yapılandırmasını kontrol et
      const isConfigured = await checkOpenAIConfiguration();
      
      if (isConfigured) {
        // OpenAI API kullan
        const suggestions = await generateGiftSuggestions(formData);
        
        const aiResult: ApiResponse = {
          success: true,
          suggestions: suggestions,
          requestData: formData,
          isOpenAI: true
        };

        setResult(aiResult);
      } else {
        // Dummy data kullan
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2 saniye bekle

        const mockResult: ApiResponse = {
          success: true,
          requestData: formData,
          isOpenAI: false
        };

        setResult(mockResult);
      }

    } catch (err) {
      console.error('API Error:', err);
      setError('Hediye önerisi oluşturulurken bir hata oluştu: ' + (err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewSearch = () => {
    setResult(null);
    setError(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-20 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse delay-3000"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {error && (
          <div className="container mx-auto px-4 pt-8">
            <div className="max-w-2xl mx-auto mb-6">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-300">Hata Oluştu</h3>
                    <p className="mt-1 text-sm text-red-200">{error}</p>
                  </div>
                  <div className="ml-auto pl-3">
                    <button
                      onClick={() => setError(null)}
                      className="inline-flex text-red-400 hover:text-red-300"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!result ? (
          <div className="container mx-auto px-4 py-8">
            <DemoNoticeWrapper />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto min-h-screen lg:min-h-[calc(100vh-4rem)]">
              {/* Left Side - Features */}
              <div className="flex flex-col justify-center p-6 lg:p-8">
                <GiftFormFeatures />
              </div>
              
              {/* Right Side - Form */}
              <div className="flex flex-col justify-center">
                <GiftForm onSubmit={handleFormSubmit} isLoading={isLoading} />
              </div>
            </div>
          </div>
        ) : result.isOpenAI && result.suggestions ? (
          <OpenAIGiftSuggestions
            suggestions={result.suggestions}
            requestData={result.requestData}
            onNewSearch={handleNewSearch}
          />
        ) : (
          <DummyGiftSuggestions
            requestData={result.requestData}
            onNewSearch={handleNewSearch}
          />
        )}
      </div>
    </div>
    </>
  );
}