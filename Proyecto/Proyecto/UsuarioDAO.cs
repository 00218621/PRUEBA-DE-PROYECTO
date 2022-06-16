using System.Data.SqlClient;
using Proyecto.Properties;

namespace Proyecto
{
    public class UsuarioDAO
    {
        public static Usuario Existe(string nombre, string telefono)
        {
            string cadena = Resources.cadena_conexion;
            Usuario usu = new Usuario();

            using (SqlConnection connection = new SqlConnection(cadena)){
                string query = "SELECT USUARIO.nombre 'usuario',USUARIO.telefono 'telefono',ROL.rol 'rol'  FROM USUARIO INNER JOIN ROL ON USUARIO.id_rol=ROL.id WHERE USUARIO.nombre LIKE @nombre AND USUARIO.telefono LIKE @telefono";
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@nombre", nombre);
                command.Parameters.AddWithValue("@telefono", telefono);
                
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader()){
                    while (reader.Read())
                    {
                        usu.nombre = reader["usuario"].ToString();
                        usu.telefono = reader["telefono"].ToString();
                        usu.rol = reader["rol"].ToString();
                    }   }
                connection.Close();
            }
            return usu;
        }
    }
}