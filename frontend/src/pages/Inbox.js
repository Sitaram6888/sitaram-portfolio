import { useState } from "react";
import axios from "axios";
import { Lock, Loader2, Inbox as InboxIcon, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Inbox() {
  const [key, setKey] = useState("");
  const [messages, setMessages] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const load = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${API}/messages`, { headers: { "X-Inbox-Key": key } });
      setMessages(res.data);
    } catch {
      setError("Invalid passkey — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="inbox-page" className="min-h-screen bg-[#030712] text-slate-100 px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <button
          data-testid="inbox-back-button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 transition-colors mb-10"
        >
          <ArrowLeft size={15} /> Back to portfolio
        </button>

        {messages === null ? (
          <form
            data-testid="inbox-unlock-form"
            onSubmit={load}
            className="glass rounded-2xl border border-blue-500/15 p-8 text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-400/25 border border-cyan-400/25 flex items-center justify-center mb-5">
              <Lock size={20} className="text-cyan-300" />
            </div>
            <h1 className="font-display text-xl font-bold">Message Inbox</h1>
            <p className="mt-2 text-sm text-slate-400">Enter the inbox passkey to view contact form messages.</p>
            <input
              data-testid="inbox-passkey-input"
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Passkey"
              className="mt-6 w-full rounded-xl bg-slate-900/60 border border-slate-700/80 px-4 py-3 text-sm outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/15"
            />
            {error && <p data-testid="inbox-error" className="mt-3 text-sm text-red-400">{error}</p>}
            <button
              data-testid="inbox-unlock-button"
              type="submit"
              disabled={loading}
              className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 disabled:opacity-60"
            >
              {loading ? <Loader2 size={15} className="animate-spin" /> : null}
              Unlock Inbox
            </button>
          </form>
        ) : (
          <div>
            <h1 className="font-display text-xl font-bold flex items-center gap-2 mb-6">
              <InboxIcon size={20} className="text-cyan-300" />
              {messages.length} message{messages.length === 1 ? "" : "s"}
            </h1>
            {messages.length === 0 && (
              <p data-testid="inbox-empty" className="text-sm text-slate-400">No messages yet.</p>
            )}
            <div className="flex flex-col gap-4">
              {messages.map((m, i) => (
                <div key={m._id || i} data-testid={`inbox-message-${i}`} className="glass rounded-2xl border border-blue-500/15 p-5">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <p className="font-semibold text-sm">{m.name}</p>
                    <p className="text-xs text-slate-500">{new Date(m.created_at).toLocaleString()}</p>
                  </div>
                  <a href={`mailto:${m.email}`} className="text-xs text-cyan-300 hover:underline">{m.email}</a>
                  <p className="mt-2 text-sm font-medium text-slate-200">{m.subject}</p>
                  <p className="mt-1 text-sm text-slate-400 whitespace-pre-wrap">{m.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
