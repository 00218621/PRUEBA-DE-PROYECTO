using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Proyecto.Properties;

namespace Proyecto
{
    public class ActividadDAO
    {
        public static List<Actividad> ObtenerTodos()
        {
            string cadena = Resources.cadena_conexion;
            List<Actividad> lista = new List<Actividad>();

            using (SqlConnection connection = new SqlConnection(cadena)){
                string query = "SELECT EVENTO.titulo 'Evento', EVENTO.asistentes 'Personas', ACTIVIDAD.f_realizacion 'fecha',AREA.nombre 'Area'  FROM ACTIVIDAD"+
                               " INNER JOIN EVENTO ON ACTIVIDAD.id_evento=EVENTO.id INNER JOIN AREA ON ACTIVIDAD.id_area=AREA.id";
                SqlCommand command = new SqlCommand(query, connection);
                
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader()){
                    while (reader.Read())
                    {
                        Actividad acti = new Actividad();
                        acti.evento = reader["Evento"].ToString();
                        acti.persona = Convert.ToInt32(reader["Personas"].ToString());
                        acti.fecha = Convert.ToDateTime(reader["fecha"].ToString());
                        acti.area = reader["Area"].ToString();
                        lista.Add(acti);
                    }   }
                connection.Close();
            }
            return lista;
        }
    }
}