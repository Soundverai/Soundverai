import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface PayPalModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  amount: string;
}

export const PayPalModal = ({ isOpen, onClose, planName, amount }: PayPalModalProps) => {
  if (!isOpen) return null;

  const initialOptions = {
    "client-id": "AbCTHfihEk6xVoPLhrgfyyF2WaqDa5AxkT-48xVSAEU3XZt6vEhSLelbNRO-LeE9e6Jvkm0ikLMukVJ7",
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter italic">{planName}</h2>
          <p className="text-white/50">Subscription Plan: ${amount}/month</p>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/5">
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              style={{ layout: "vertical", shape: "pill" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: `${planName} Subscription`,
                      amount: {
                        value: amount,
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                if (actions.order) {
                  const details = await actions.order.capture();
                  alert(`Transaction completed by ${details.payer.name?.given_name}`);
                  onClose();
                }
              }}
            />
          </PayPalScriptProvider>
        </div>

        <p className="text-[10px] text-center text-white/30 uppercase tracking-widest">
          Secure Encrypted Transaction via PayPal
        </p>
      </motion.div>
    </div>
  );
};
