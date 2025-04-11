import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Help() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Help & FAQs</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">How to Use MediClear</h2>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-4 text-gray-700">
            <li>
              <span className="font-medium">Search for a medication</span>
              <p className="mt-1">
                Enter the name of your medication in the search bar on the home page. 
                You can search by either brand name (e.g., "Lipitor") or generic name (e.g., "atorvastatin").
              </p>
            </li>
            <li>
              <span className="font-medium">Select from search results</span>
              <p className="mt-1">
                Click on the medication card that matches what you're looking for. 
                Make sure to check both the generic and brand names to ensure you've selected the correct medication.
              </p>
            </li>
            <li>
              <span className="font-medium">Navigate information sections</span>
              <p className="mt-1">
                Use the tabs below the medication overview to navigate between different information sections:
                Warnings, Usage & Instructions, Dosage, Side Effects, and Drug Interactions.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Why can't I find my medication?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  There are a few possible reasons:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Check the spelling of the medication name</li>
                  <li>Try searching for the generic name instead of the brand name (or vice versa)</li>
                  <li>Some very new medications or those with limited distribution may not yet be in the FDA database</li>
                  <li>The medication might be available outside the United States and not FDA-approved</li>
                </ul>
                <p className="mt-2 text-gray-700">
                  If you still can't find your medication, consult your healthcare provider or pharmacist for information.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Is the information on MediClear up to date?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  MediClear pulls information directly from the FDA's database through their openFDA API. 
                  The information is as current as the FDA's database. Generally, this means the information 
                  is based on the most recently approved drug labeling, though there may occasionally be a 
                  delay between when a manufacturer updates a label and when it appears in the FDA database.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Should I rely on MediClear instead of my doctor's advice?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  <strong>No.</strong> MediClear is designed to help you better understand medications, 
                  but it is not a substitute for professional medical advice. Always follow your healthcare 
                  provider's guidance regarding medications, as they can provide personalized recommendations 
                  based on your specific health situation.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Why is some information missing for my medication?</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  The FDA database contains varying levels of detail for different medications. Newer medications 
                  often have more comprehensive information than older ones. Over-the-counter medications may have 
                  less detailed information than prescription drugs. If critical information is missing, please consult 
                  your healthcare provider or pharmacist.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>What do the different warning levels mean?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium text-red-600">Boxed Warnings (Black Box Warnings)</span>: 
                    The most serious warnings the FDA requires. These indicate a significant risk of serious 
                    or life-threatening adverse effects.
                  </li>
                  <li>
                    <span className="font-medium text-amber-600">Warnings and Precautions</span>: 
                    Important safety concerns that are not severe enough to warrant a boxed warning, 
                    but still require attention.
                  </li>
                  <li>
                    <span className="font-medium text-amber-600">Contraindications</span>: 
                    Situations where a medication should not be used because the risk outweighs any possible benefit.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            If you have questions about using MediClear or need technical support, please contact us:
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700">supportmediclear@gmail.com</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-700">Support: (444) 444-4444</span>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded">
            <p className="text-blue-800 text-sm">
              <strong>For Medical Emergencies:</strong> If you're experiencing a medication-related emergency, 
              contact your healthcare provider immediately, call your local emergency number (911 in the US), 
              or go to the nearest emergency room.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
