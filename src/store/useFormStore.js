import { create } from 'zustand';

const useFormStore = create((set) => ({
  values: new Set(),
  formData: {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha: "",
    mensaje: "",
    migrante: false,
    soluciones: [],
  },
  formSubmitted: false,

  setValues: (newValues) => set({ values: newValues }),
  setFormData: (newData) => set({ formData: { ...newData } }),
  setFormSubmitted: (submitted) => set({ formSubmitted: submitted }),

  handleInputChange: (e) => {
    const { name, value, type, checked } = e.target;
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  },

  handleSelect: (selectedKeys) => {
    const selectedKeysArray = Array.from(selectedKeys);
    set((state) => ({
      formData: {
        ...state.formData,
        soluciones: selectedKeysArray,
      },
    }));
  },

  handleSubmit: (e) => {
    e.preventDefault(); // Prevent the page from reloading
    const { formData, setFormData, setValues, setFormSubmitted } = useFormStore.getState();
    
    console.log("DATA DESDE EL FORMULARIO", formData);
    fetch('/api/sendForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          fecha: "",
          mensaje: "",
          migrante: false,
          soluciones: [],
        });
        setValues(new Set());
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
}));

export default useFormStore;