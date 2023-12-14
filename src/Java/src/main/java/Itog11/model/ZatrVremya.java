package Itog11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Itog11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ЗатрВремя
 */
@Entity(name = "IISItog11ЗатрВремя")
@Table(schema = "public", name = "ЗатрВремя")
public class ZatrVremya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЗатрВремя")
    private Integer затрвремя;


    public ZatrVremya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getЗатрВремя() {
      return затрвремя;
    }

    public void setЗатрВремя(Integer затрвремя) {
      this.затрвремя = затрвремя;
    }


}