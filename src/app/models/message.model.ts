export interface Message {
  id: any;                 // Unique identifier
  remetenteId: any;         // Sender ID
  destinatarioId: any;      // Receiver ID
  texto: string;            // Message content
  dataHora: Date;           // Timestamp
}

// Optional Portuguese alias
export interface Mensagem extends Message {}