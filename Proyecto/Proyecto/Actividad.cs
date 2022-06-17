using System;

namespace Proyecto
{
    public class Actividad
    {
        public string evento { get; set; }
        public int persona { get; set; }
        public DateTime fecha { get; set; } 
        public string area { get; set; }

        public Actividad()
        {
            
        }

        public Actividad(string evento, int persona, DateTime fecha, string area)
        {
            this.evento = evento;
            this.persona = persona;
            this.fecha = fecha;
            this.area = area;
        }
    }
}