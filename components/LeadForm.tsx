
import React, { useState } from 'react';
import { UserData } from '../types';

interface LeadFormProps {
  onSubmit: (data: UserData) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-12 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold serif text-gray-800 mb-4">即將完成之旅</h2>
        <p className="text-gray-500">留下您的聯繫資訊，以便接收專屬的氣味分析報表與新年好禮資訊。</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-[2rem] shadow-xl border border-white">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">真實姓名</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              placeholder="請輸入姓名"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">手機號碼</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              placeholder="請輸入手機"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">電子郵件 (選填)</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95"
        >
          查看分析結果
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
