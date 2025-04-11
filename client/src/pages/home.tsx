import { useState } from "react";
import { MedicationSearch } from "@/components/medication-search";
import MedicationDetails from "@/components/medication-details";
import { useSearchMedications } from "@/hooks/use-fda-api";
import { MedicationCard } from "@/components/ui/medication-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedicationId, setSelectedMedicationId] = useState<string | null>(null);
  
  const { 
    data: searchResults = [], 
    isLoading: searchLoading, 
    error: searchError 
  } = useSearchMedications(searchQuery);

  const handleSelectMedication = (medicationId: string) => {
    setSelectedMedicationId(medicationId);
    // Scroll to top when a medication is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">Understand Your Medications</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find clear, easy-to-understand information about your medications using FDA data.
        </p>
      </section>

      {/* Search Bar */}
      <section className="mb-10">
        <MedicationSearch onSelectMedication={handleSelectMedication} />
      </section>

      {/* Loading State */}
      {searchLoading && searchQuery.length > 0 && (
        <div className="flex flex-col items-center py-10">
          <div className="w-8 h-8 border-t-2 border-primary-500 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Searching medication database...</p>
        </div>
      )}

      {/* Error State */}
      {searchError && (
        <Alert variant="destructive" className="max-w-3xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {(searchError as Error)?.message || "Unable to retrieve medication information. Please try again later."}
          </AlertDescription>
        </Alert>
      )}

      {/* Empty State */}
      {!searchLoading && searchQuery.length > 0 && searchResults.length === 0 && !searchError && (
        <div className="text-center py-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No medications found</h3>
          <p className="mt-1 text-gray-500">Try searching for a different medication name.</p>
        </div>
      )}

      {/* Selected Medication Details */}
      {selectedMedicationId && (
        <MedicationDetails medicationId={selectedMedicationId} />
      )}

      {/* Search Results */}
      {!selectedMedicationId && searchResults.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((medication) => (
            <MedicationCard
              key={medication.id}
              medication={medication}
              onClick={() => handleSelectMedication(medication.id || "")}
            />
          ))}
        </div>
      )}
    </main>
  );
}
