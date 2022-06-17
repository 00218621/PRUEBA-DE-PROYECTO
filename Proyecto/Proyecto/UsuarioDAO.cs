using System.Data.SqlClient;
using Proyecto.Properties;

namespace Proyecto
{
    public class UsuarioDAO
    {
        public static Usuario Existe(string user, string contraseña)
        {
            string cadena = Resources.cadena_conexion;
            Usuario usu = new Usuario();

            using (SqlConnection connection = new SqlConnection(cadena)){
                string query = "SELECT USUARIO.nombre,ROL.rol,USUARIO.telefono  FROM USUARIO"+
                               " INNER JOIN ROL ON USUARIO.id_rol=ROL.id WHERE USUARIO.nombre LIKE @usuario AND USUARIO.telefono LIKE @apellido";
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@usuario", user);
                command.Parameters.AddWithValue("@apellido", contraseña);
                
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader()){
                    while (reader.Read())
                    {
                        usu.user = reader["nombre"].ToString();
                        usu.contraseña = reader["telefono"].ToString();
                        usu.rol = reader["rol"].ToString();
                    }   }
                connection.Close();
            }
            return usu;
        }
    }
}