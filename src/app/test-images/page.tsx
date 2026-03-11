import { TEAM_STEALTH } from '@/data/stealth';

export default function TestPage() {
    return (
        <div className="bg-red-500 p-20 min-h-screen">
            <h1 className="text-white text-4xl mb-10">Testing Transparency (Red Background should show through)</h1>
            <div className="grid grid-cols-2 gap-10">
                {TEAM_STEALTH.map(member => (
                    <div key={member.name} className="bg-white/10 p-5 rounded">
                        <p className="text-white mb-2">{member.name}</p>
                        <img src={member.image} className="w-64 h-64 object-contain border border-white" alt={member.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}
